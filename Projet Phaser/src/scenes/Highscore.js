class Highscore extends Phaser.Scene {
  constructor() {
    super("Highscore");
    this.myJsonScores;
  }

  /** @returns {void} */
  editorCreate() {
    const highscore_text = this.add.text(400, 250, "", {})
    .setOrigin(0.5, 0.5)
    .setStyle({
      fontFamily: "spacemono-regular",
      fontSize: "25px",
      color: "white",
    })
    .setInteractive({ useHandCursor: true }) .on("pointerdown", () => {});
    this.highscore_text = highscore_text;

    const menu_text = this.add.text(400, 425, "", {})
    .setOrigin(0.5, 0.5)
    .setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });
    menu_text.text = "MENU";

    new TextColor(menu_text, "Menu");
    DBQueries.sendScoresRequest(this);

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }
}
