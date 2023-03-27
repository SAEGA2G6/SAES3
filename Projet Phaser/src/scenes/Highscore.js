class Highscore extends Phaser.Scene {
  /**
   * Scene that displays the highscores.
   */
  constructor() {
    super("Highscore");
    this.myJsonScores;
  }

  /** @returns {void} */
  editorCreate() {
    const arrowBack = this.add
      .image(100, 100, "arrow_back")
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.scene.start("Menu");
        this.scene.stop();
      });

    const textHighscore = this.add
      .text(400, 250, "", {})
      .setOrigin(0.5, 0.5)
      .setStyle({
        fontFamily: "spacemono-regular",
        fontSize: "25px",
        color: "white",
      });
    this.textHighscore = textHighscore;

    

    DBQueries.sendScoresRequest(this, "rc", this.callback);

    const floor0 = this.add
      .text(150, 500, "REZ-DE-CHAUSSEE - 1ERE ANNEE", {})
      .setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "15px",
        color: "orange",
      });

    const floor1 = this.add
      .text(400, 500, "1ER ETAGE - 2EME ANNEE", {})
      .setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "15px",
        color: "white",
      });

    const floor2 = this.add
      .text(650, 500, "2EME ETAGE - 3EME ANNEE", {})
      .setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "15px",
        color: "white",
      });
    this.floor0 = floor0;
    this.floor1 = floor1;
    this.floor2 = floor2;

    floor0.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.resetTextsColor();
      floor0.setStyle({ fill: "orange" });
      DBQueries.sendScoresRequest(this, "rc", this.callback);
    });

    floor1.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.resetTextsColor();
      floor1.setStyle({ fill: "orange" });
      DBQueries.sendScoresRequest(this, "e1", this.callback);
    });

    floor2.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.resetTextsColor();
      floor2.setStyle({ fill: "orange" });
      DBQueries.sendScoresRequest(this, "e2", this.callback);
    });

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  callback(that, data){
    that.textHighscore.text = "";
    if (data.length == 0) {
      that.textHighscore.text = "Aucun score :(";
    } else {
      for (let index = 0; index < data.length; index++) {
        if (index == 0) {
          that.textHighscore.text +=
            "1ER  " +
            data[index].ID_JOUEUR +
            "   " +
            data[index].SCORE +
            " sec";
        } else {
          var place = index + 1;
          that.textHighscore.text +=
            "\n" +
            place +
            "EME " +
            data[index].ID_JOUEUR +
            "   " +
            data[index].SCORE +
            " sec";
        }
      }
    }
  }


  /**
   * Resets the colour of the floor texts.
   * @return {void}
   */
  resetTextsColor() {
    this.floor0.setStyle({ fill: "white" });
    this.floor1.setStyle({ fill: "white" });
    this.floor2.setStyle({ fill: "white" });
  }
}
