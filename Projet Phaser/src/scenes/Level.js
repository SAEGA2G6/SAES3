// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
  constructor() {
    super("Level");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorCreate() {
    //map
    var carte = this.make.tilemap({ key: "map" });
    var tileset1 = carte.addTilesetImage("couloir", "couloir");
    var tileset2 = carte.addTilesetImage("door", "door");
    var tileset3 = carte.addTilesetImage("escaliers", "escaliers");
    var tileset4 = carte.addTilesetImage("meuble1", "meuble1");
    var tileset5 = carte.addTilesetImage("mur", "mur");
    var tileset6 = carte.addTilesetImage("pc", "pc");
    var tileset7 = carte.addTilesetImage("portes", "portes");
    var tileset8 = carte.addTilesetImage("poubelle", "poubelle");
    var tileset9 = carte.addTilesetImage("toiletsBureau", "toiletsBureau");

    //Calque 1 et 2 (pour que le joueur soit au-dessus)

    var calque1 = carte.createLayer(
      "Calque de Tuiles 1",
      [
        tileset1,
        tileset2,
        tileset3,
        tileset4,
        tileset5,
        tileset6,
        tileset7,
        tileset8,
        tileset9,
      ],
      0,
      0
    );
    var calque2 = carte.createLayer(
      "Calque de Tuiles 2",
      [
        tileset1,
        tileset2,
        tileset3,
        tileset4,
        tileset5,
        tileset6,
        tileset7,
        tileset8,
        tileset9,
      ],
      0,
      0
    );

    //Pokemon Sprite
    const player = new Player(this, 400, 218);
    player.setRectangle(200);

    //Calque 3 (pour que le joueur soit en-dessous)
    var calque3 = carte.createLayer(
      "Calque de Tuiles 3",
      [
        tileset1,
        tileset2,
        tileset3,
        tileset4,
        tileset5,
        tileset6,
        tileset7,
        tileset8,
        tileset9,
      ],
      0,
      0
    );

    //Collision
    calque1.setCollisionByProperty({ estSolide: true });
    calque2.setCollisionByProperty({ estSolide: true });
    calque3.setCollisionByProperty({ estSolide: true });
    this.physics.add.collider(player, [calque1,calque2,calque3]);


    // text_1
    /*const text_1 = this.add.text(400, 408, "", {});
    text_1.setOrigin(0.5, 0.5);
    text_1.text = "Je suis débile et je m'appelle Ethan";
    text_1.setStyle({ fontFamily: "Arial", fontSize: "30px" });*/

    // (components)
    new PushOnClick(player);

    this.player = player;

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  update() {
    this.player.update();
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
