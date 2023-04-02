/**
 * Class representing the scene displayed at the beginning of the game
 */
class Menu extends Phaser.Scene {
  /**
   * Scene that displays the menu.
   */
  constructor() {
    super("Menu");
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    const carte = this.make.tilemap({ key: "map" });

    const tilesetsList = [
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
      .createLayer("Calque de Tuiles 1", tilesetsList, 0, 0)
      .setDepth(0);

    const calque2 = carte
      .createLayer("Calque de Tuiles 2", tilesetsList, 0, 0)
      .setDepth(0);

    this.placeMenuItems();

    this.events.emit("scene-awake");
  }

  preload() {
    this.load.plugin(
      "rexinputtextplugin",
      "lib/rexinputtextplugin.min.js",
      true
    );
  }

  create() {
    this.editorCreate();
  }

  /**
   * Places all objects in the menu
   * @return {void}
   */
  placeMenuItems() {
    const backMenu = this.add.image(400, 300, "menuDemarrage");

    /// HIGHSCORE TEXT ///
    const textHighscore = this.add.text(400, 325, "", {});
    textHighscore.setOrigin(0.5, 0.5);
    textHighscore.text = "HIGHSCORE";
    textHighscore.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });

    /// START TEXT ///
    const textStart = this.add.text(400, 425, "", {});
    textStart.setOrigin(0.5, 0.5);
    textStart.text = "START";
    textStart.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });
    this.textStart = textStart;

    /// START GAME AND HIGHSCORE ///
    new TextColor(textStart, "Choose", { chooseOption: "Level" });
    new TextColor(textHighscore, "Highscore");
  }
}
