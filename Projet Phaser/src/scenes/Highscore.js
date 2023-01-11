class Highscore extends Phaser.Scene {
  constructor() {
    super("Highscore");
    this.myJsonScores;
  }

  /** @returns {void} */
  editorCreate() {
    const arrow_back = this.add.image(100, 100, "arrow_back")
    .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.scene.start("Menu");
      this.scene.stop();
    });

    const highscore_text = this.add.text(400, 250, "", {})
    .setOrigin(0.5, 0.5)
    .setStyle({
      fontFamily: "spacemono-regular",
      fontSize: "25px",
      color: "white",
    })
    .setInteractive({ useHandCursor: true }) .on("pointerdown", () => {});
    this.highscore_text = highscore_text;


    const roof0 = this.add.text(150, 500, "REZ-DE-CHAUSSEE - 1ERE ANNEE", {}).setDepth(5)
    .setOrigin(0.5)
    .setStyle({
      fontFamily: "retro-computer",
      fontSize: "15px",
      color: "WHITE",
    })
    .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      DBQueries.sendScoresRequest(this, "rc");
    });

    const roof1 = this.add.text(400, 500, "1ER ETAGE - 2EME ANNEE", {}).setDepth(5)
    .setOrigin(0.5)
    .setStyle({
      fontFamily: "retro-computer",
      fontSize: "15px",
      color: "WHITE",
    })
    .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      DBQueries.sendScoresRequest(this, "e1");
    });

    const roof2 = this.add.text(650, 500, "2EME ETAGE - 3EME ANNEE", {}).setDepth(5)
    .setOrigin(0.5)
    .setStyle({
      fontFamily: "retro-computer",
      fontSize: "15px",
      color: "WHITE",
    })
    .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      DBQueries.sendScoresRequest(this, "e2");
    });

    //DBQueries.sendScoresRequest(this);

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }
}
