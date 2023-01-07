class Highscore extends Phaser.Scene {
  constructor() {
    super("Highscore");
    this.myJsonScores;
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    const highscore_test = this.add.text(400, 250, "", {});
    this.highscore_test = highscore_test;
    highscore_test.setOrigin(0.5, 0.5);
    //highscore_test.text = "1ER\n2EME\n3EME\n4EME\n5EME\n6EME\n7EME\n8EME\n9EME\n10EME";
    highscore_test.setStyle({
      fontFamily: "spacemono-regular",
      fontSize: "25px",
      color: "white",
    });
    highscore_test
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {});

    const text_menu = this.add.text(400, 425, "", {});
    text_menu.setOrigin(0.5, 0.5);
    text_menu.text = "MENU";
    text_menu.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });

    new TextColor(text_menu, "Menu");

    DBQueries.sendScoresRequest(this);

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }
}
