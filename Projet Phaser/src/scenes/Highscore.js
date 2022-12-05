// You can write more code here

/* START OF COMPILED CODE */

class Highscore extends Phaser.Scene {
  constructor() {
    super("Highscore");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    const highscore_test = this.add.text(400, 250, "", {});
    highscore_test.setOrigin(0.5, 0.5);
    highscore_test.text = "1ER\n2EME\n3EME";
    highscore_test.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });
		highscore_test.setInteractive({ useHandCursor: true }).on("pointerdown", () => {});

    const text_menu = this.add.text(400, 425, "", {});
    text_menu.setOrigin(0.5, 0.5);
    text_menu.text = "MENU";
    text_menu.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });

    new TextColor(text_menu, "Menu");

    this.events.emit("scene-awake");
  }

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
