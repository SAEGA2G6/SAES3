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

    DBQueries.sendScoresRequest(this);

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }
}
