class Highscore extends Phaser.Scene {
  constructor() {
    super("Highscore");
    this.myJsonScores;
  }

  /** @returns {void} */
  editorCreate() {
    const highscore_text = this.add.text(400, 250, "", {});
    this.highscore_text = highscore_text;
    highscore_text.setOrigin(0.5, 0.5);
    highscore_text.setStyle({
      fontFamily: "spacemono-regular",
      fontSize: "25px",
      color: "white",
    });
    highscore_text
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {});

    const menu_text = this.add.text(400, 425, "", {});
    menu_text.setOrigin(0.5, 0.5);
    menu_text.text = "MENU";
    menu_text.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });

    new TextColor(menu_text, "Menu");
    DBQueries.sendScoresRequest(this);

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }
}
