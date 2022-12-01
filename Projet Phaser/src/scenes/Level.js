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

    //Professeur
    const prof1 = this.physics.add.sprite(480, 340, "prof1").setImmovable();
    prof1.body.setSize(prof1.width * 0.6, prof1.height * 0.8, true);

    //Portes (pour pouvoir les ouvrir, ça doit être des sprites)

    /*var door_room2_1 = this.physics.add
      .sprite(768, 416, "doubleporte")
      .setImmovable();*/
    var door_room2_1 = new Door(this, 768, 417, "doubleporte", true);

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


    /*
    var door_room2_2 = this.physics.add
      .sprite(1024, 416, "doubleporte")
      .setImmovable();

    var door_room3_1 = this.physics.add
      .sprite(1632, 416, "doubleporte")
      .setImmovable();
    var door_room3_2 = this.physics.add
      .sprite(1888, 416, "doubleporte")
      .setImmovable();

    var door_room4_1 = this.physics.add
      .sprite(1632, 545, "doubleporte")
      .setImmovable()
      .setOffset(0, 31);
    door_room4_1.body
      .setSize(door_room4_1.width, door_room4_1.height * 0.5)
      .setOffset(0, 31);
    var door_room4_2 = this.physics.add
      .sprite(1888, 545, "doubleporte")
      .setImmovable();
    door_room4_2.body
      .setSize(door_room4_2.width, door_room4_2.height * 0.5)
      .setOffset(0, 31);
      

    var door_office1 = this.physics.add
      .sprite(1216, 416, "doubleporte")
      .setImmovable();
    var door_office2 = this.physics.add
      .sprite(1440, 416, "doubleporte")
      .setImmovable();
    var door_office3 = this.physics.add
      .sprite(1216, 545, "doubleporte")
      .setImmovable();
    door_office3.body
      .setSize(door_office3.width, door_office3.height * 0.5)
      .setOffset(0, 31);
    var door_office4 = this.physics.add
      .sprite(1440, 545, "doubleporte")
      .setImmovable();
    door_office4.body
      .setSize(door_office4.width, door_office4.height * 0.5)
      .setOffset(0, 31);

    var door_secretariat = this.physics.add
      .sprite(928, 673, "doubleporte")
      .setImmovable();
    door_secretariat.body
      .setSize(door_secretariat.width, door_secretariat.height * 0.5)
      .setOffset(0, 31);

    var door_boss = this.physics.add
      .sprite(750, 673, "simpleporte")
      .setImmovable();
    door_boss.body.setSize(door_boss.width, door_boss.height * 0.5).setOffset(0,31);*/

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

    //Calque 3 (pour que le joueur soit en-dessous)

    var calque3 = carte.createLayer("Calque de Tuiles 3", tilesets_list, 0, 0);

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

    this.events.emit("scene-awake");
  }
 ///todo séparer portes du haut et du bas + refaire la classe TextColor.js
  create_doors_upper() {
    /*var door_room2_1 = this.physics.add
      .sprite(768, 416, "doubleporte")
      .setImmovable();*/

    var door_room2_2 = this.physics.add
      .sprite(1024, 416, "doubleporte")
      .setImmovable();

    var door_room3_1 = this.physics.add
      .sprite(1632, 416, "doubleporte")
      .setImmovable();
    var door_room3_2 = this.physics.add
      .sprite(1888, 416, "doubleporte")
      .setImmovable();

    var door_room4_1 = this.physics.add
      .sprite(1632, 545, "doubleporte")
      .setImmovable();
    door_room4_1.body
      .setSize(door_room4_1.width, door_room4_1.height * 0.2)
      .setOffset(0, 31);
    var door_room4_2 = this.physics.add
      .sprite(1888, 545, "doubleporte")
      .setImmovable();
    door_room4_2.body
      .setSize(door_room4_2.width, door_room4_2.height * 0.2)
      .setOffset(0, 31);

    var door_office1 = this.physics.add
      .sprite(1216, 416, "doubleporte")
      .setImmovable();
    var door_office2 = this.physics.add
      .sprite(1440, 416, "doubleporte")
      .setImmovable();
    var door_office3 = this.physics.add
      .sprite(1216, 545, "doubleporte")
      .setImmovable();
    door_office3.body
      .setSize(door_office3.width, door_office3.height * 0.2)
      .setOffset(0, 31);
    var door_office4 = this.physics.add
      .sprite(1440, 545, "doubleporte")
      .setImmovable();
    door_office4.body
      .setSize(door_office4.width, door_office4.height * 0.2)
      .setOffset(0, 31);

    var door_secretariat = this.physics.add
      .sprite(928, 673, "doubleporte")
      .setImmovable();
    door_secretariat.body
      .setSize(door_secretariat.width, door_secretariat.height * 0.2)
      .setOffset(0, 31);

    var door_boss = this.physics.add
      .sprite(750, 673, "simpleporte")
      .setImmovable();
    door_boss.body.setSize(door_boss.width, door_boss.height * 0.2);
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
