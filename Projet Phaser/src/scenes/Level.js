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
    ///////////// UPDATE /////////////
    this.update_list = [];
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
    this.player = player;

    ///////////// PROF/BOSS /////////////

    // ancien
    //const prof1 = this.physics.add.sprite(480, 340, "prof1").setImmovable();

    const prof1 = new DialogObject(
      this,
      480,
      340,
      "prof1",
      "Appuyer sur ESPACE pour commencer le QCM !",
      "mcq"
    );

    prof1.body.setSize(prof1.width * 0.6, prof1.height * 0.8, true);
    this.prof1 = prof1;

    const prof2 = new DialogObject(
      this,
      900,
      340,
      "prof2",
      "Appuyer sur ESPACE pour commencer le QCM !",
      "mcq"
    );

    const prof3 = new DialogObject(
      this,
      1760,
      340,
      "prof3",
      "Appuyer sur ESPACE pour commencer le QCM !",
      "mcq"
    );
    prof3.body.setSize(prof3.width * 0.6, prof3.height * 0.8, true);
    this.prof3 = prof3;

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

    ///////////// ROOM 1 (TODO: faire un json avec les textes) /////////////

    const pcOn1_room1 = new DialogObject(
      this,
      495,
      240,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "clue"
    );
    pcOn1_room1.flipX = true;
    const pcOn2_room1 = new DialogObject(
      this,
      625,
      110,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "clue"
    );
    const papers_room1 = new DialogObject(
      this,
      305,
      80,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "clue"
    );

    ///////////// ROOM 2 (TODO: faire comme pour ROOM 1) /////////////

    const pcOn1_room2 = this.physics.add
      .sprite(1040, 240, "pcAllume")
      .setImmovable();
    const pcOn2_room2 = this.physics.add
      .sprite(750, 146, "pcAllume")
      .setImmovable();
    pcOn2_room2.flipX = true;
    const poubelle_room2 = this.physics.add
      .sprite(1075, 400, "poubelleSprite")
      .setImmovable();

    ///////////// ROOM 3 (TODO: faire comme pour ROOM 1) /////////////

    const pcOn_room3 = this.physics.add
      .sprite(1775, 112, "pcAllume")
      .setImmovable();
    pcOn_room3.flipX = true;
    const poubelle_room3 = this.physics.add
      .sprite(1580, 400, "poubelleSprite")
      .setImmovable();
    const papers_room3 = this.physics.add
      .sprite(1937, 262, "papiers")
      .setImmovable();

    ///////////// ROOM 4 (TODO: faire comme pour ROOM 1) /////////////

    const pcOn1_room4 = this.physics.add
      .sprite(1810, 623, "pcAllume")
      .setImmovable();
    const pcOn2_room4 = this.physics.add
      .sprite(1905, 912, "pcAllume")
      .setImmovable();
    const pcOn3_room4 = this.physics.add
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
      prof2,
      prof3,
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

    ///////////// PROVISOIRE: portes de la salle 2 à ouvrir /////////////
    const list_doors = [door_room2_1, door_room2_2];
    this.list_doors = list_doors;

    ///////////// EVENTS /////////////
    this.emitter = new Phaser.Events.EventEmitter();
    this.emitter.on("open_doors", this.open_doors_handler, this);
    this.emitter.on("time_malus", this.malusChrono, this);

    ///////////// CHRONOMETER /////////////
    /// txt chrono

    const back_chrono = this.add.image(125, 100, "back_chrono").setDepth(4);
    /*Phaser.Display.Align.In.TopLeft(
      back_chrono,
      this.add.zone(400, 300, 800, 600)
    );*/
    back_chrono.setOrigin(0.5, 0.48);
    back_chrono.setScrollFactor(0);
    back_chrono.setScale(0.17);

    const chrono_txt = this.add.text(0, 0, "", {}).setDepth(5);
    chrono_txt.setOrigin(0.5, 0.5);
    chrono_txt.setStyle({
      fontFamily: "roboto",
      fontSize: "20px",
      color: "black",
    });
    chrono_txt.setScrollFactor(0);
    Phaser.Display.Align.In.Center(chrono_txt, back_chrono);
    this.chrono_txt = chrono_txt;

    /// txt malus chrono
    const time_malus_txt = this.add
      .text(chrono_txt.x, chrono_txt.y + 25, "+30", {})
      .setDepth(5);
    time_malus_txt.setOrigin(0.5, 0.5);
    time_malus_txt.setStyle({
      fontFamily: "roboto",
      fontSize: "15px",
      color: "red",
    });
    time_malus_txt.setScrollFactor(0);
    time_malus_txt.visible = false;
    this.time_malus_txt = time_malus_txt;

    /// Chrono start at 0
    this.chrono = 0;

    /// Every second, the chrono increment of 1
    const chrono = this.time.addEvent({
      delay: 1000,
      callback: () => (this.chrono += 1),
      callbackScope: this,
      loop: true,
    });

    this.events.emit("scene-awake");
  }

  ///////////// EVENTS HANDLERS /////////////
  /////////////// TODO: ajouter les portes dans list_doors depuis InterfaceQCM /////////////
  open_doors_handler() {
    for (var i = 0; i < this.list_doors.length; i++) {
      this.list_doors[i].open();
    }
  }

  malusChrono() {
    this.time_malus_txt.visible = true;
    const timedEvent = this.time.delayedCall(
      3000,
      () => {
        (this.time_malus_txt.visible = false), (this.chrono += 30);
      },
      [],
      this
    );
  }

  ///////////// UPDATE /////////////
  updateChrono() {
    /// CHRONOMETER
    var min = Math.floor(this.chrono / 60);
    var sec = this.chrono % 60;
    var min_txt;
    var sec_txt;
    if (min < 10) {
      min_txt = "0" + min;
    } else {
      min_txt = min;
    }
    if (sec < 10) {
      sec_txt = "0" + sec;
    } else {
      sec_txt = sec;
    }
    this.chrono_txt.text = min_txt + " : " + sec_txt;
  }

  create() {
    this.editorCreate();
  }

  update() {
    ///LIST TO UPDATE DIALOG OBJECTS (BOSS, CLUES)
    for (var i = 0; i < this.update_list.length; i++) {
      this.update_list[i].update();
    }

    ///TO UPDATE CHRONOMETER
    this.updateChrono();

    /////TEST
    const KeyK = this.input.keyboard.addKey("k");
    if (KeyK.isDown) {
      this.scene.restart("Level");
    }
  }
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
