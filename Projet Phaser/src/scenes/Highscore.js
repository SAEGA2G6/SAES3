class Highscore extends Phaser.Scene {
  constructor() {
    super("Highscore");
    this.myJsonScores;
  }

  /** @returns {void} */
  editorCreate() {
    const arrowBack = this.add.image(100, 100, "arrow_back")
    .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.scene.start("Menu");
      this.scene.stop();
    });

    const textHighscore = this.add.text(400, 250, "", {})
    .setOrigin(0.5, 0.5)
    .setStyle({
      fontFamily: "spacemono-regular",
      fontSize: "25px",
      color: "white",
    });
    this.textHighscore = textHighscore;

    DBQueries.sendScoresRequest(this, "rc");


    const roof0 = this.add.text(150, 500, "REZ-DE-CHAUSSEE - 1ERE ANNEE", {}).setDepth(5)
    .setOrigin(0.5)
    .setStyle({
      fontFamily: "retro-computer",
      fontSize: "15px",
      color: "orange",
    });

    const roof1 = this.add.text(400, 500, "1ER ETAGE - 2EME ANNEE", {}).setDepth(5)
    .setOrigin(0.5)
    .setStyle({
      fontFamily: "retro-computer",
      fontSize: "15px",
      color: "white",
    });

    const roof2 = this.add.text(650, 500, "2EME ETAGE - 3EME ANNEE", {}).setDepth(5)
    .setOrigin(0.5)
    .setStyle({
      fontFamily: "retro-computer",
      fontSize: "15px",
      color: "white",
    });
    this.roof0 = roof0;
    this.roof1 = roof1;
    this.roof2 = roof2;

    roof0.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.resetTextsColor();
      roof0.setStyle({ fill: "orange" });
      DBQueries.sendScoresRequest(this, "rc");
    });

    roof1.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.resetTextsColor();
      roof1.setStyle({ fill: "orange" });
      DBQueries.sendScoresRequest(this, "e1");
    });

    roof2.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.resetTextsColor();
      roof2.setStyle({ fill: "orange" });
      DBQueries.sendScoresRequest(this, "e2");
    });

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  resetTextsColor() {
    this.roof0.setStyle({ fill: "white" });
    this.roof1.setStyle({ fill: "white" });
    this.roof2.setStyle({ fill: "white" });
  }
}
