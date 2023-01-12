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
  
      const player = new Player(this, 160, 600, this.playerGender, this.playerPseudo).setDepth(1);
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

                  ///////////// DOOR OPENING SYSTEM ///////////// 
                  const list_allDoors = [
                    [door_room2],
                    [door_room3],
                    [door_room4],
                    [door_room5],
                    [door_room6]
                  ];
                  this.list_allDoors = list_allDoors;

  
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
  
      const chronometer = new Chronometer(this);
      this.chronometer = chronometer;  
  
      this.events.emit("scene-awake");
    }
  
    ///////////// EVENTS HANDLERS /////////////
    open_doors_handler() {
      console.log("room num: " + this.currentNbRoom);
      if (this.currentNbRoom < this.nbRooms) {
        for (
          var i = 0;
          i < this.list_allDoors[this.currentNbRoom - 1].length;
          i++
        ) {
          this.list_allDoors[this.currentNbRoom - 1][i].open();
        }
      }
      this.currentNbRoom++;
      console.log("portes de la salle " + this.currentNbRoom + " ouvertes");
    }
  
    malusChrono() {
      this.chronometer.malusChrono();
    }
  
  ///////////// ENDGAME /////////////
  /**
   * Check if the game is over, i.e. if all MCQs have been completed
   * @returns {boolean} true if the game is over and false otherwise
   */
   isGameOver() {
    if (this.currentNbRoom > this.nbRooms) {
      return true;
    } else {
      return false;
    }
  }

      /**
   * Gives the player's score, which is the time it took to complete all the MCQs
   */
       getScore() {
        this.player.score = this.chronometer.chrono;
      }
  
    create() {
      this.editorCreate();
    }
  
    update() {
      ///CHECK IF GAME IS OVER
      if(this.isGameOver()) {
        this.getScore();
        DBQueries.sendInsertScoreRequest(this);
        this.scene.start("Menu");
        clearInterval(this.chronometer.intervalChrono);
        this.scene.stop();
      }
      ///LIST TO UPDATE DIALOG OBJECTS (PLAYER, BOSS, CLUES)
      for (var i = 0; i < this.update_list.length; i++) {
        this.update_list[i].update();
      }
    }
  }
  