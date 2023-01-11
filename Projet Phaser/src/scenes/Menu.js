class Menu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {

    const carte = this.make.tilemap({ key: "map" });

    const tilesets_list = [
      carte.addTilesetImage("couloir", "couloir"),
      carte.addTilesetImage("escaliers", "escaliers"),
      carte.addTilesetImage("meuble1", "meuble1"),
      carte.addTilesetImage("mur", "mur"),
      carte.addTilesetImage("pc", "pc"),
      carte.addTilesetImage("portes", "portes"),
      carte.addTilesetImage("poubelle", "poubelle"),
      carte.addTilesetImage("toiletsBureau", "toiletsBureau"),
    ];

    ///////////// LAYERS /////////////
    //Calque 1,2 et 3 (profondeur à 0 pour le sol et pour le mobilier, profondeur à 1 pour le joueur, profondeur à 2 pour les objets et ce q)

    const calque1 = carte
      .createLayer("Calque de Tuiles 1", tilesets_list, 0, 0)
      .setDepth(0);

    const calque2 = carte
      .createLayer("Calque de Tuiles 2", tilesets_list, 0, 0)
      .setDepth(0);


    this.place_menu_items();

    this.events.emit("scene-awake");
  }

  preload() {
    this.load.plugin('rexinputtextplugin', 'lib/rexinputtextplugin.min.js', true);
  }

  create() {
    this.editorCreate();
  }

  /**
   * Places all objects in the menu
   * @return {void}
   */
  place_menu_items() {
    // Ajout du logo du MENU
    const back_menu = this.add.image(400, 300, "menuDemarrage");

    // HIGHSCORE TEXT
    const text_highscore = this.add.text(400, 325, "", {});
    text_highscore.setOrigin(0.5, 0.5);
    text_highscore.text = "HIGHSCORE";
    text_highscore.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });

    // START TEXT
    const text_start = this.add.text(400, 425, "", {});
    text_start.setOrigin(0.5, 0.5);
    text_start.text = "START";
    text_start.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });
    this.text_start = text_start;

    // START GAME AND HIGHSCORE 
    new TextColor(text_start, "ChooseCharacter", {chooseOption: "Level"});
    new TextColor(text_highscore, "Highscore");
  }
}
