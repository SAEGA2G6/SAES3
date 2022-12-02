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

    //Calque 1,2 et 3

    var calque1 = carte.createLayer("Calque de Tuiles 1", tilesets_list, 0, 0).setDepth(0);

    var calque2 = carte.createLayer("Calque de Tuiles 2", tilesets_list, 0, 0).setDepth(0);

    var calque3 = carte.createLayer("Calque de Tuiles 3", tilesets_list, 0, 0).setDepth(2);

    //Pokemon Sprite
    const player = new Player(this, 400, 218).setDepth(1);

    //Professeur
    const prof1 = this.physics.add.sprite(480, 340, "prof1").setImmovable();
    prof1.body.setSize(prof1.width * 0.6, prof1.height * 0.8, true);

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

    //Collision
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

    //camera
    this.cameras.main.setBounds(0, 0, carte.displayWidth, carte.displayHeight);
    this.cameras.main.startFollow(player);
    this.cameras.main.zoom = 1.2;

    this.player = player;

    // Events
    this.emitter = new Phaser.Events.EventEmitter();
    this.emitter.on('openDoors', this.handler, this);




    this.events.emit("scene-awake");
  }

  handler() {
    this.door.open();
    this.door.disableCollide();
    this.door.setDepth(2);
    console.log("truc");
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
