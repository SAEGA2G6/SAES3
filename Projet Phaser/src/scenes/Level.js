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
    var tileset2 = carte.addTilesetImage("escaliers", "escaliers");
    var tileset3 = carte.addTilesetImage("meuble1", "meuble1");
    var tileset4 = carte.addTilesetImage("mur", "mur");
    var tileset5 = carte.addTilesetImage("pc", "pc");
    var tileset6 = carte.addTilesetImage("portes", "portes");
    var tileset7 = carte.addTilesetImage("poubelle", "poubelle");
    var tileset8 = carte.addTilesetImage("toiletsBureau", "toiletsBureau");

    var tilesets_list = [
      tileset1,
      tileset2,
      tileset3,
      tileset4,
      tileset5,
      tileset6,
      tileset7,
      tileset8,
    ];

    //Calque 1 et 2 (pour que le joueur soit au-dessus)

    var calque1 = carte.createLayer("Calque de Tuiles 1", tilesets_list, 0, 0);

    var calque2 = carte.createLayer("Calque de Tuiles 2", tilesets_list, 0, 0);

    //Pokemon Sprite
    const player = new Player(this, 400, 218);

    //Portes

    var door_room2_1 = this.physics.add
      .sprite(770, 415, "doubleporte")
      .setImmovable();
    door_room2_1.setTexture('player');
    
    var door_room2_2 = this.physics.add
      .sprite(1025, 415, "doubleporte")
      .setImmovable();

    var door_room3_1 = this.physics.add
      .sprite(1632, 415, "doubleporte")
      .setImmovable();
    var door_room3_2 = this.physics.add
      .sprite(1887, 415, "doubleporte")
      .setImmovable();

    var door_room4_1 = this.physics.add
      .sprite(1632, 545, "doubleporte")
      .setImmovable();
    var door_room4_2 = this.physics.add
      .sprite(1887, 545, "doubleporte")
      .setImmovable();

    var door_office1 = this.physics.add
      .sprite(1215, 415, "doubleporte")
      .setImmovable();
    var door_office2 = this.physics.add
      .sprite(1440, 415, "doubleporte")
      .setImmovable();
    var door_office3 = this.physics.add
      .sprite(1215, 545, "doubleporte")
      .setImmovable();
    var door_office4 = this.physics.add
      .sprite(1440, 545, "doubleporte")
      .setImmovable();

    var door_secretariat = this.physics.add
      .sprite(927, 673, "doubleporte")
      .setImmovable();

    var door_boss = this.physics.add
      .sprite(750, 673, "simpleporte")
      .setImmovable();

    //Calque 3 (pour que le joueur soit en-dessous)

    var calque3 = carte.createLayer("Calque de Tuiles 3", tilesets_list, 0, 0);

    //Collision
    calque1.setCollisionByProperty({ estSolide: true });
    calque2.setCollisionByProperty({ estSolide: true });
    calque3.setCollisionByProperty({ estSolide: true });

    const collider_list = [calque1, calque2, calque3,door_room2_1,door_room2_2,door_room3_1,door_room3_2,door_room4_1,door_room4_2,door_office1,door_office2,door_office3,door_office4,door_secretariat,door_boss];
    this.physics.add.collider(player, collider_list);

    //camera
    this.cameras.main.setBounds(0, 0, carte.displayWidth, carte.displayHeight);
    this.cameras.main.startFollow(player);
    this.cameras.main.zoom = 1.2;

    // (components)
    //new PushOnClick(player);

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
