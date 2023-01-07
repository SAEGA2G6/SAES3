class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    this.place_menu_items();

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  place_menu_items() {
    // Ajout du logo du MENU
    const back_menu = this.add.image(400, 300, "menuDemarrage");

    // Ajout de HIGHSCORE
    const text_highscore = this.add.text(400, 325, "", {});
    text_highscore.setOrigin(0.5, 0.5);
    text_highscore.text = "HIGHSCORE";
    text_highscore.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });

    // Ajout de START
    const text_start = this.add.text(400, 425, "", {});
    text_start.setOrigin(0.5, 0.5);
    text_start.text = "START";
    text_start.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });
    this.text_start = text_start;

    // Gestion START
    //new TextColor(text_start, "Level");
    new TextColor(text_start, "ChooseCharacter");
    new TextColor(text_highscore, "Highscore");

    /*text_start
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.start_button_down());*/
  }
}
