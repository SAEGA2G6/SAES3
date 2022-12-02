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
    ///////////// MAP /////////////
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

    ///////////// LAYERS /////////////
    //Calque 1,2 et 3 (profondeur à 0 pour le sol et pour le mobilier, profondeur à 1 pour le joueur, profondeur à 2 pour les objets et ce q)

    var calque1 = carte
      .createLayer("Calque de Tuiles 1", tilesets_list, 0, 0)
      .setDepth(0);

    var calque2 = carte
      .createLayer("Calque de Tuiles 2", tilesets_list, 0, 0)
      .setDepth(0);

    var calque3 = carte
      .createLayer("Calque de Tuiles 3", tilesets_list, 0, 0)
      .setDepth(2);

    ///////////// PLAYER /////////////
    const player = new Player(this, 400, 218).setDepth(1);

    ///////////// PROF/BOSS /////////////
    const prof1 = this.physics.add.sprite(480, 340, "prof1").setImmovable();
    prof1.body.setSize(prof1.width * 0.6, prof1.height * 0.8, true);


    ///////////// DOORS /////////////
    //Portes (pour pouvoir les ouvrir, ça doit être des sprites)

    var door_room2_1 = new Door(this, 768, 417, "doubleporte", true);
    this.door = door_room2_1;

    var door_room2_2 = new Door(this, 1024, 417, "doubleporte", true);

    var door_room3_1 = new Door(this, 1632, 417, "doubleporte", true);

    var door_room3_2 = new Door(this, 1888, 417, "doubleporte", true);

    var door_room4_1 = new Door(this, 1632, 545, "doubleporte", false);

    var door_room4_2 = new Door(this, 1888, 545, "doubleporte", false);

    var door_office1 = new Door(this, 1216, 417, "doubleporte", true);

    var door_office2 = new Door(this, 1440, 417, "doubleporte", true);

    var door_office3 = new Door(this, 1216, 545, "doubleporte", false);

    var door_office4 = new Door(this, 1440, 545, "doubleporte", false);

    var door_secretariat = new Door(this, 928, 673, "doubleporte", false);

    var door_boss = new Door(this, 750, 673, "simpleporte", false);

    //Indice

    ///////////// ROOM 1 /////////////

    const pcAllume1_room1 = this.physics.add
      .sprite(495, 240, "pcAllume")
      .setImmovable();
    pcAllume1_room1.flipX = true;
    const pcAllume2_room1 = this.physics.add
      .sprite(625, 110, "pcAllume")
      .setImmovable();
    const papiers_room1 = this.physics.add
      .sprite(305, 80, "papiers")
      .setImmovable();

    ///////////// ROOM 2 /////////////

    const pcAllume1_room2 = this.physics.add
      .sprite(1040, 240, "pcAllume")
      .setImmovable();
    const pcAllume2_room2 = this.physics.add
      .sprite(750, 146, "pcAllume")
      .setImmovable();
    pcAllume2_room2.flipX = true;
    const poubelle_room2 = this.physics.add
      .sprite(1075, 400, "poubelle")
      .setImmovable();

    ///////////// ROOM 3 /////////////

    const pcAllume_room3 = this.physics.add
      .sprite(1775, 112, "pcAllume")
      .setImmovable();
    pcAllume_room3.flipX = true;
    const poubelle_room3 = this.physics.add
      .sprite(1580, 400, "poubelleSprite")
      .setImmovable();
    const papiers_room3 = this.physics.add
      .sprite(1937, 262, "papiers")
      .setImmovable();

    ///////////// ROOM 4 /////////////

    const pcAllume1_room4 = this.physics.add
      .sprite(1810, 623, "pcAllume")
      .setImmovable();
    const pcAllume2_room4 = this.physics.add
      .sprite(1905, 912, "pcAllume")
      .setImmovable();
    const pcAllume3_room4 = this.physics.add
      .sprite(1776, 815, "pcAllume")
      .setImmovable();

    ///////////// COLLISIONS /////////////

    calque1.setCollisionByProperty({ estSolide: true });
    calque2.setCollisionByProperty({ estSolide: true });
    calque3.setCollisionByProperty({ estSolide: true });

    const collider_list = [
      calque1,
      calque2,
      calque3,
      prof1,
      door_room2_1,
      door_room2_2,
      door_room3_1,
      door_room3_2,
      door_room4_1,
      door_room4_2,
      door_office1,
      door_office2,
      door_office3,
      door_office4,
      door_secretariat,
      door_boss,
    ];
    this.physics.add.collider(player, collider_list);

    ///////////// CAMERA /////////////
    this.cameras.main.setBounds(0, 0, carte.displayWidth, carte.displayHeight);
    this.cameras.main.startFollow(player);
    this.cameras.main.zoom = 1.2;

    this.player = player;

    const list_doors = [door_room2_1, door_room2_2];
    this.list_doors = list_doors;

    ///////////// EVENTS /////////////
    this.emitter = new Phaser.Events.EventEmitter();
    this.emitter.on("openDoors", this.handler, this);

    this.events.emit("scene-awake");
  }

  handler() {
    for (var i = 0; i < this.list_doors.length; i++) {
      this.list_doors[i].open();
      this.list_doors[i].disableCollide();
      this.list_doors[i].setDepth(2);
    }
    /*this.door.open();
    this.door.disableCollide();
    this.door.setDepth(2);
    console.log("truc");*/
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
