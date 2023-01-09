class FirstFloor extends Phaser.Scene {
  init(data) {
    this.playerGender = data.texture;
    this.playerPseudo = data.pseudo;
    this.currentNbRoom = 1;
    this.nbRooms = 5; //TODO: mettre nb de rooms avec boss de l'étage
    this.levelPrefix = "e1" //TODO: mettre le prefixe de la room
  }
  
    /** @returns {void} */
    editorCreate() {
      ///////////// UPDATE /////////////
      this.update_list = [];
      ///////////// MAP /////////////

      const carte = this.make.tilemap({ key: "map1" });
  
      const tilesets_list = [
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
        1120,
        580,
        "prof6",
        "Appuyer sur ESPACE pour commencer le QCM !",
        null,
        "mcq"
      );

      const prof7 = new DialogObject(
        this,
        1472,
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
      
      //TODO//
  
      ///////////// DOORS /////////////
      
      const door_room2_1 = new Door(this, 1504, 417, "doubleporte", true);
      const door_room2_2 = new Door(this, 1888, 417, "doubleporte", true);

      const door_room3_1 = new Door(this, 1024, 545, "doubleporte", false);
      const door_room3_2 = new Door(this, 1216, 545, "doubleporte", false);

      const door_room4_1 = new Door(this, 1376, 545, "doubleporte", false);
      const door_room4_2 = new Door(this, 1568, 545, "doubleporte", false);

      const door_room5_1 = new Door(this, 1728, 545, "doubleporte", false);
      const door_room5_2 = new Door(this, 1920, 545, "doubleporte", false);
  
      ///////////// INDICES /////////////
      
      /////////////// ROOM 1 /////////////

    const pcOn1_room1 = new DialogObject(
      this, 399, 368,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "clue"
    );

    const pcOn2_room1 = new DialogObject(
      this, 559, 48,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "clue"
    );
    pcOn2_room0.flipX = true;

    const papers_room1 = new DialogObject(
      this, 305, 190,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "clue"
    );

      /////////////// ROOM 2 /////////////


    const pcOn1_room2 = new DialogObject(
      this, 1905, 73,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "clue"
    );
    pcOn1_room1.flipX = true;

    const papers_room2 = new DialogObject(
      this, 1505, 60,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "clue"
    );

    const bin_room2 = new DialogObject(
      this, 1937, 400,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "clue"
    );

    /////////////// ROOM 3 /////////////

    const bin_room3 = new DialogObject(
      this, 976, 590,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "clue"
    );

    const papers_room3 = new DialogObject(
      this, 1260, 768,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "clue"
    );

    const eleve_room3 = new DialogObject(
      this, 976, 975,
      "eleve1",
      "Appuyer sur ESPACE pour parler à l'élève",
      "clue"
    );

    /////////////// ROOM 4 /////////////

    const papers1_room4 = new DialogObject(
      this, 1328, 720,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "clue"
    );

    const papers2_room4 = new DialogObject(
      this, 1500, 926,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "clue"
    );

    const bin_room4 = new DialogObject(
      this, 1616, 590,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "clue"
    );

    /////////////// ROOM 5 /////////////

    const papers_room5 = new DialogObject(
      this, 1780, 830,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "clue"
    );

    const eleve1_room5 = new DialogObject(
      this, 1970, 930,
      "eleve1",
      "Appuyer sur ESPACE pour parler à l'élève",
      "clue"
    );
    eleve1_room4.flipX = true;

    const eleve2_room5 = new DialogObject(
      this, 1935, 930,
      "eleve2",
      "Appuyer sur ESPACE pour parler à l'élève",
      "clue"
    );

      ///////////// COLLISIONS /////////////
  
      calque1.setCollisionByProperty({ estSolide: true });
      calque2.setCollisionByProperty({ estSolide: true });
      calque3.setCollisionByProperty({ estSolide: true });
  
      const collider_list = [
        calque1, calque2, calque3,
        door_room1_1, door_room1_2,
        door_room2_1, door_room2_2,
        door_room3_1, door_room3_2,
        door_room4_1, door_room4_2,
        bin_room1,
        bin_room2, eleve_room2,
        bin_room3,
        eleve1_room4, eleve2_room4,
        prof5, prof6, prof7, prof8, prof9
      ];
      this.physics.add.collider(player, collider_list);
  
      ///////////// CAMERA /////////////
      this.cameras.main.setBounds(0, 0, carte.displayWidth, carte.displayHeight)
      this.cameras.main.startFollow(player);
      this.cameras.main.zoom = 1.2;

      ///////////// DOOR OPENING SYSTEM ///////////// //TODO: mettre les portes devant être ouvertes
    const list_allDoors = [
      [door_room2_1, door_room2_2],
      [door_room3_1, door_room3_2],
      [door_room4_1, door_room4_2],
      [door_room5_1, door_room5_2]
    ];
    this.list_allDoors = list_allDoors;
  
  
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

    create() {
      this.editorCreate();
    }
  
    update() {
      ///CHECK IF GAME IS OVER
      if(this.isGameOver()) {
        this.getScore();
        DBQueries.sendInsertScoreRequest(this);
        this.scene.start("Menu");
        this.scene.stop();
      }
      ///LIST TO UPDATE DIALOG OBJECTS (PLAYER, BOSS, CLUES)
      for (var i = 0; i < this.update_list.length; i++) {
        this.update_list[i].update();
      }
      ///TO UPDATE CHRONOMETER
      this.updateChrono();
    }
  
    /**
     * Gives the player's score, which is the time it took to complete all the MCQs
     */
    getScore() {
      this.player.score = this.chrono;
    }
  }
  