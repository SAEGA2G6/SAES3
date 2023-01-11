class SecondFloor extends Phaser.Scene {
  init(data) {
    this.playerGender = data.texture;
    this.playerPseudo = data.pseudo;
    this.currentNbRoom = 1;
    this.nbRooms = 6; //TODO: mettre nb de rooms avec boss de l'étage
    this.levelPrefix = "e2" //TODO: mettre le prefixe de la room
  }
  
    /** @returns {void} */
    editorCreate() {
      ///////////// UPDATE /////////////
      this.update_list = [];
      ///////////// MAP /////////////

      // TODO: ajouter la map du 2ème étage
      const carte = this.make.tilemap({ key: "map2" });
      const tileset1 = carte.addTilesetImage("couloir", "couloir");
      const tileset2 = carte.addTilesetImage("escaliers", "escaliers");
      const tileset3 = carte.addTilesetImage("meuble1", "meuble1");
      const tileset4 = carte.addTilesetImage("mur", "mur");
      const tileset5 = carte.addTilesetImage("pc", "pc");
      const tileset6 = carte.addTilesetImage("portes", "portes");
      const tileset7 = carte.addTilesetImage("poubelle", "poubelle");
      const tileset8 = carte.addTilesetImage("toiletsBureau", "toiletsBureau");
      const tileset9 = carte.addTilesetImage("sofa", "sofa");
  
      const tilesets_list = [
        tileset1,
        tileset2,
        tileset3,
        tileset4,
        tileset5,
        tileset6,
        tileset7,
        tileset8,
        tileset9
      ];
  
      ///////////// LAYERS /////////////
      //Calque 1,2 et 3 (profondeur à 0 pour le sol et pour le mobilier, profondeur à 1 pour le joueur, profondeur à 2 pour les objets et ce q)
  
      const calque1 = carte
        .createLayer("Calque de Tuiles 1", tilesets_list, 0, 0)
        .setDepth(0);
  
      const calque2 = carte
        .createLayer("Calque de Tuiles 2", tilesets_list, 0, 0)
        .setDepth(0);
  
      const calque3 = carte
        .createLayer("Calque de Tuiles 3", tilesets_list, 0, 0)
        .setDepth(2);
  
      ///////////// PLAYER /////////////
  
      const player = new Player(this, 160, 600, this.playerGender).setDepth(1);
      this.player = player;
  
      ///////////// PROF/BOSS /////////////
      
      const prof10 = new DialogObject(
        this,
        788,
        400,
        "prof10",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );

      const prof11 = new DialogObject(
        this,
        1870,
        200,
        "prof1",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );

      const prof12 = new DialogObject(
        this,
        1010,
        609,
        "prof9",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );

      const prof13 = new DialogObject(
        this,
        1232,
        580,
        "prof8",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );

      const prof14 = new DialogObject(
        this,
        1552,
        580,
        "prof11",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );

        const prof15 = new DialogObject(
        this,
        1872,
        580,
        "prof6",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );


      ///////////// DOORS /////////////
      
      const door_room2 = new Door(this, 1888, 417, "doubleporte", true);

      const door_room3 = new Door(this, 800, 545, "doubleporte", false);

      const door_room4 = new Door(this, 1120, 545, "doubleporte", false);

      const door_room5 = new Door(this, 1440, 545, "doubleporte", false);

      const door_room6 = new Door(this, 1760, 545, "doubleporte", false);
  
      ///////////// INDICES /////////////

      /////////////// ROOM 1 /////////////

      
      const bin_room1 = new DialogObject(
        this, 620, 400,
        "poubelleSprite",
        "Appuyer sur ESPACE pour fouiller la poubelle","e2_r1_1",
        "clue"
      );

      const papers_room1 = new DialogObject(
        this, 755, 225,
        "papiers",
        "Appuyer sur ESPACE pour regarder les notes...","e2_r1_2",
        "clue"
      );

      const eleve_room1 = new DialogObject(
        this, 656, 108,
        "eleve3",
        "Appuyer sur ESPACE pour parler à l'élève","e2_r1_3",
        "clue"
      );

      /////////////// ROOM 2 /////////////

      const pcOn1_room2 = new DialogObject(
        this, 1743, 238,
        "pcAllume",
        "Appuyer sur ESPACE pour regarder l'ordinateur...","e2_r2_1",
        "clue"
      );


      const papers_room2 = new DialogObject(
        this, 1840, 310,
        "papiers",
        "Appuyer sur ESPACE pour regarder les notes...","e2_r2_2",
        "clue"
      );

      const eleve_room2 = new DialogObject(
        this, 1872, 45,
        "eleve4",
        "Appuyer sur ESPACE pour parler à l'élève","e2_r2_3",
        "clue"
      );

      /////////////// ROOM 3 /////////////

      const bin_room3 = new DialogObject(
        this, 750, 590,
        "poubelleSprite",
        "Appuyer sur ESPACE pour fouiller la poubelle","e2_r3_3",
        "clue"
      );

      const papers_room3 = new DialogObject(
        this, 782, 792,
        "papiers",
        "Appuyer sur ESPACE pour regarder les notes...","e2_r3_2",
        "clue"
      );

      const papers2_room3 = new DialogObject(
        this, 910, 920,
        "papiers",
        "Appuyer sur ESPACE pour regarder les notes...","e2_r3_2",
        "clue"
      );

      /////////////// ROOM 4 //////320//////

      const eleve_room4 = new DialogObject(
        this, 1070, 710,
        "eleve1",
        "Appuyer sur ESPACE pour fouiller la poubelle","e2_r2_1",
        "clue"
      );

      const papers_room4 = new DialogObject(
        this, 1326, 656,
        "papiers",
        "Appuyer sur ESPACE pour regarder les notes...","e2_r4_2",
        "clue"
      );

      const papers2_room4 = new DialogObject(
        this, 1298, 920,
        "papiers",
        "Appuyer sur ESPACE pour regarder les notes...","e2_r4_3",
        "clue"
      );

      /////////////// ROOM 5 /////////////

      const bin_room5 = new DialogObject(
        this, 1390, 590,
        "poubelleSprite",
        "Appuyer sur ESPACE pour fouiller la poubelle","e2_r5_1",
        "clue"
      );

      const papers_room5 = new DialogObject(
        this, 1522, 796,
        "papiers",
        "Appuyer sur ESPACE pour regarder les notes...","e2_r4_3",
        "clue"
      );

      const eleve_room5 = new DialogObject(
        this, 1390, 710,
        "eleve2",
        "Appuyer sur ESPACE pour fouiller la poubelle","e2_r2_1",
        "clue"
      );

      /////////////// ROOM 6 /////////////

      const papers_room6 = new DialogObject(
        this, 1965, 930,
        "papiers",
        "Appuyer sur ESPACE pour regarder les notes...","e2_r4_3",
        "clue"
      );

      const bin_room6 = new DialogObject(
        this, 1710, 590,
        "poubelleSprite",
        "Appuyer sur ESPACE pour fouiller la poubelle","e2_r5_1",
        "clue"
      );

      const eleve_room6 = new DialogObject(
        this, 1904, 902,
        "eleve3",
        "Appuyer sur ESPACE pour fouiller la poubelle","e2_r2_1",
        "clue"
      );
  
      ///////////// COLLISIONS /////////////
  
      calque1.setCollisionByProperty({ estSolide: true });
      calque2.setCollisionByProperty({ estSolide: true });
      calque3.setCollisionByProperty({ estSolide: true });
  
      const collider_list = [
        calque1,
        calque2,
        calque3,
        door_room2, door_room3, door_room4, door_room5, door_room6,
        prof10, prof11, prof12, prof13, prof14, prof15,
        bin_room1, eleve_room1,
        eleve_room2,
        bin_room3, 
        eleve_room4,
        bin_room5, eleve_room5,
        bin_room6, eleve_room6
      ];
      this.physics.add.collider(player, collider_list);
  
      ///////////// CAMERA /////////////
      this.cameras.main.setBounds(0, 0, carte.displayWidth, carte.displayHeight);
      this.cameras.main.startFollow(player);
      this.cameras.main.zoom = 1.2;
  
  
      ///////////// EVENTS /////////////
      this.emitter = new Phaser.Events.EventEmitter();
      this.emitter.on("open_doors", this.open_doors_handler, this);
      this.emitter.on("time_malus", this.malusChrono, this);
  
      ///////////// CHRONOMETER /////////////
      /// txt chrono
  
      const back_chrono = this.add.image(125, 100, "back_chrono").setDepth(4);
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
  }
  