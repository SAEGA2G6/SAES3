// You can write more code here

/* START OF COMPILED CODE */

class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    // text_menu
    const text_menu = this.add.text(400, 100, "", {});
    text_menu.setOrigin(0.5, 0.5);
    text_menu.text = "MENU";
    text_menu.setStyle({
      fontFamily: "Roboto",
      fontSize: "125px",
      color: "white",
      backgroundColor: "black",
    });

    const text_start = this.add.text(400, 400, "", {});
    text_start.setOrigin(0.5, 0.5);
    text_start.text = "START";
    text_start.setStyle({
      fontFamily: "Roboto",
      fontSize: "60px",
      color: "white",
      backgroundColor: "black",
    });

    text_menu.setInteractive().on("pointerdown",() => text_menu.text = "feur feur feur");

    this.text_start = text_start;
    //animation start
    text_start
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.start_button_down())
      .on("pointerover", () => this.start_button_over())
      .on("pointerout", () => this.start_button_out());
    new PushOnClick(text_start);

    this.events.emit("scene-awake");
  }

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
    console.log("menu");
  }

  // Fonctions pour pointerdown, pointerover et pointerout

  start_button_down() {
    this.text_start.setStyle({ fill: "yellow" });
    this.scene.start("Level");
  }

  start_button_over() {
    this.text_start.setStyle({ fill: "orange" });
  }

  start_button_out() {
    this.text_start.setStyle({ fill: "white" });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
