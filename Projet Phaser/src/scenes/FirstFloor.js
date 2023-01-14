class FirstFloor extends Phaser.Scene {
  init(data) {
    this.playerGender = data.texture;
    this.playerPseudo = data.pseudo;
    this.currentNbRoom = 1;
    this.nbRooms = 5;
    this.levelPrefix = "e1";
  }
  
    /** @returns {void} */
    editorCreate() {
      ///////////// UPDATE /////////////
      this.updateList = [];
      ///////////// MAP /////////////

      const carte = this.make.tilemap({ key: "map1" });
  
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
      //Layer 1, 2 and 3 (depth at 0 for the ground and for the furniture, depth at 1 for the player, depth at 2 for the objects and others)
  
      const calque1 = carte
        .createLayer("Calque de Tuiles 1", tilesetsList, 0, 0)
        .setDepth(0);
  
      const calque2 = carte
        .createLayer("Calque de Tuiles 2", tilesetsList, 0, 0)
        .setDepth(0);
  
      const calque3 = carte
        .createLayer("Calque de Tuiles 3", tilesetsList, 0, 0)
        .setDepth(2);
  
      ///////////// PLAYER /////////////
  
      const player = new Player(this, 160, 600, this.playerGender, this.playerPseudo).setDepth(1);
      this.player = player;
  
      ///////////// PROF/BOSS /////////////

      const prof5 = new DialogObject(
        this,
        660,
        240,
        "prof5",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );

      const prof6 = new DialogObject(
        this,
        1472,
        580,
        "prof6",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );

      const prof7 = new DialogObject(
        this,
        1120,
        580,
        "prof7",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );

      const prof8 = new DialogObject(
        this,
        1824,
        580,
        "prof8",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );

      const prof9 = new DialogObject(
        this,
        1900,
        250,
        "prof9",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );
        
      ///////////// DOORS /////////////
      
      const doorRoom2_1 = new Door(this, 1504, 417, "doubleporte", true);
      const doorRoom2_2 = new Door(this, 1888, 417, "doubleporte", true);

      const doorRoom3_1 = new Door(this, 1024, 545, "doubleporte", false);
      const doorRoom3_2 = new Door(this, 1216, 545, "doubleporte", false);

      const doorRoom4_1 = new Door(this, 1376, 545, "doubleporte", false);
      const doorRoom4_2 = new Door(this, 1568, 545, "doubleporte", false);

      const doorRoom5_1 = new Door(this, 1728, 545, "doubleporte", false);
      const doorRoom5_2 = new Door(this, 1920, 545, "doubleporte", false);
  
      ///////////// CLUES /////////////
      
      /////////////// ROOM 1 /////////////

    const pcOn1Room1 = new DialogObject(
      this, 399, 368,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...","e1_r1_1",
      "clue"
    );

    const pcOn2Room1 = new DialogObject(
      this, 559, 48,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...","e1_r1_2",
      "clue"
    );
    pcOn2Room1.flipX = true;

    const papersRoom1 = new DialogObject(
      this, 305, 190,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...","e1_r1_3",
      "clue"
    );

      /////////////// ROOM 2 /////////////


    const pcOn1Room2 = new DialogObject(
      this, 1905, 73,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...","e1_r2_1",
      "clue"
    );
    pcOn1Room2.flipX = true;

    const papersRoom2 = new DialogObject(
      this, 1505, 60,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...","e1_r2_2",
      "clue"
    );

    const binRoom2 = new DialogObject(
      this, 1937, 400,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle","e1_r2_3",
      "clue"
    );

    /////////////// ROOM 3 /////////////

    const binRoom3 = new DialogObject(
      this, 976, 590,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle","e1_r3_1",
      "clue"
    );

    const papersRoom3 = new DialogObject(
      this, 1260, 768,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...","e1_r3_2",
      "clue"
    );

    const eleveRoom3 = new DialogObject(
      this, 976, 975,
      "eleve1",
      "Appuyer sur ESPACE pour parler à l'élève","e1_r3_3",
      "clue"
    );

    /////////////// ROOM 4 /////////////

    const papers1Room4 = new DialogObject(
      this, 1328, 720,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...","e1_r4_1",
      "clue"
    );

    const papers2Room4 = new DialogObject(
      this, 1500, 926,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...","e1_r4_2",
      "clue"
    );

    const binRoom4 = new DialogObject(
      this, 1616, 590,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle","e1_r4_3",
      "clue"
    );

    /////////////// ROOM 5 /////////////

    const papersRoom5 = new DialogObject(
      this, 1780, 830,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...","e1_r5_1",
      "clue"
    );

    const eleve1Room5 = new DialogObject(
      this, 1970, 930,
      "eleve1",
      "Appuyer sur ESPACE pour parler à l'élève","e1_r5_2",
      "clue"
    );
    eleve1Room5.flipX = true;

    const eleve2Room5 = new DialogObject(
      this, 1710, 930,
      "eleve2",
      "Appuyer sur ESPACE pour parler à l'élève","e1_r5_3",
      "clue"
    );

      ///////////// COLLISIONS /////////////
  
      calque1.setCollisionByProperty({ estSolide: true });
      calque2.setCollisionByProperty({ estSolide: true });
      calque3.setCollisionByProperty({ estSolide: true });
  
      const colliderList = [
        calque1, calque2, calque3,
        doorRoom2_1, doorRoom2_2,
        doorRoom3_1, doorRoom3_2,
        doorRoom4_1, doorRoom4_2,
        doorRoom5_1, doorRoom5_2,
        binRoom2,
        binRoom3,
        binRoom4, eleveRoom3,
        eleve1Room5, eleve2Room5,
        prof5, prof6, prof7, prof8, prof9
      ];
      this.physics.add.collider(player, colliderList);
  
      ///////////// CAMERA /////////////
      this.cameras.main.setBounds(0, 0, carte.displayWidth, carte.displayHeight)
      this.cameras.main.startFollow(player);
      this.cameras.main.zoom = 1.2;

      ///////////// DOOR OPENING SYSTEM /////////////
    const listAllDoors = [
      [doorRoom2_1, doorRoom2_2],
      [doorRoom3_1, doorRoom3_2],
      [doorRoom4_1, doorRoom4_2],
      [doorRoom5_1, doorRoom5_2]
    ];
    this.listAllDoors = listAllDoors;
  
  
      ///////////// EVENTS /////////////
      this.emitter = new Phaser.Events.EventEmitter();
      this.emitter.on("openDoors", this.openDoorsHandler, this);
      this.emitter.on("timeMalus", this.malusChrono, this);
  
      ///////////// CHRONOMETER /////////////
      const chronometer = new Chronometer(this);
      this.chronometer = chronometer;
  
      this.events.emit("scene-awake");
    }
  
    ///////////// EVENTS HANDLERS /////////////
    openDoorsHandler() {
      if (this.currentNbRoom < this.nbRooms) {
        for (
          var i = 0;
          i < this.listAllDoors[this.currentNbRoom - 1].length;
          i++
        ) {
          this.listAllDoors[this.currentNbRoom - 1][i].open();
        }
      }
      this.currentNbRoom++;
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
      /// CHECK IF GAME IS OVER ///
      if(this.isGameOver()) {
        this.getScore();
        DBQueries.sendInsertScoreRequest(this);
        this.scene.start("GameOver", {pseudo: this.playerPseudo, roof: "'1er étage'", playerChrono: this.player.score, playerGender: this.playerGender});
        this.scene.stop();
      }
      /// LIST TO UPDATE DIALOG OBJECTS (PLAYER, BOSS, CLUES) ///
      for (var i = 0; i < this.updateList.length; i++) {
        this.updateList[i].update();
      }
    }
  }
  