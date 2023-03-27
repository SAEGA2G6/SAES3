class Floor extends Phaser.Scene {
    init(data) {
      this.playerGender = data.texture;
      this.playerPseudo = data.pseudo;
  
      this.currentNbRoom = 1;
      this.nbRooms;
  
      this.levelPrefix;
      this.map;
      this.imageMap;
  
      this.updateList = [];
  
      this.player;
  
      this.listAllDoors;
  
      this.chronometer;
    }
  
    /** @returns {void} */
    createTemplateFloor() {
      const carte = this.make.tilemap({ key: this.map });
  
      const tilesetsList = [
        carte.addTilesetImage("couloir", "couloir"),
        carte.addTilesetImage("escaliers", "escaliers"),
        carte.addTilesetImage("meuble1", "meuble1"),
        carte.addTilesetImage("mur", "mur"),
        carte.addTilesetImage("pc", "pc"),
        carte.addTilesetImage("portes", "portes"),
        carte.addTilesetImage("poubelle", "poubelle"),
        carte.addTilesetImage("toiletsBureau", "toiletsBureau"),
        carte.addTilesetImage("sofa", "sofa"),
        carte.addTilesetImage("tv", "tv"),
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
      this.player = new Player(
        this,
        0,
        0,
        this.playerGender,
        this.playerPseudo
      ).setDepth(1);
  
      ///////////// COLLISIONS /////////////
      calque1.setCollisionByProperty({ estSolide: true });
      calque2.setCollisionByProperty({ estSolide: true });
      calque3.setCollisionByProperty({ estSolide: true });
  
      this.physics.add.collider(this.player, [calque1, calque2, calque3]);
  
      ///////////// TEXT OPEN DOORS /////////////
      this.textOpenDoors = this.add.text(400, 100, "", {}).setDepth(5);
      this.textOpenDoors.setOrigin(0.5);
      this.textOpenDoors.text =
        "Les portes de la prochaine salle viennent de s'ouvrir !";
      this.textOpenDoors.setStyle({
        fontFamily: "Roboto",
        fontSize: "22px",
        color: "black",
        backgroundColor: "white",
      });
      this.textOpenDoors.setScrollFactor(0);
      this.textOpenDoors.visible = false;
  
      ///////////// CAMERA /////////////
      this.cameras.main.setBounds(0, 0, carte.displayWidth, carte.displayHeight);
      this.cameras.main.startFollow(this.player);
      this.cameras.main.zoom = 1.2;
  
      ///////////// EVENTS /////////////
      this.emitter = new Phaser.Events.EventEmitter();
      this.emitter.on("openDoors", this.openDoorsHandler, this);
      this.emitter.on("timeMalus", this.malusChrono, this);
  
      ///////////// CHRONOMETER /////////////
      const chronometer = new Chronometer(this);
      this.chronometer = chronometer;
    }
  
    ///////////// EVENTS HANDLERS /////////////
    /**
     * Open the doors to the next room
     * @return {void}
     */
    openDoorsHandler() {
      if (this.currentNbRoom < this.nbRooms) {
        for (
          var i = 0;
          i < this.listAllDoors[this.currentNbRoom - 1].length;
          i++
        ) {
          this.listAllDoors[this.currentNbRoom - 1][i].open();
        }
        this.textOpenDoors.visible = true;
        this.time.delayedCall(5000, () => {
          this.textOpenDoors.visible = false;
        });
      }
      this.currentNbRoom++;
    }
  
    /**
     * Apply the chronometer's malus
     * @return {void}
     */
    malusChrono() {
      this.chronometer.malusChrono();
    }
  
    ///////////// ENDGAME /////////////
    /**
     * Check if the game is over, i.e. if all MCQs have been completed
     * @returns {boolean} true if the game is over and false otherwise
     */
    isGameOver() {
      return this.currentNbRoom > this.nbRooms;
    }
  
    /**
     * Gives the player's score, which is the time it took to complete all the MCQs
     */
    getScore() {
      this.player.score = this.chronometer.chrono;
    }
  
    /**
     * Update the first floor (to detect when the game is over and update the objects in the scene).
     * @return {void}
     */
    update() {
      /// CHECK IF GAME IS OVER ///
      if (this.isGameOver()) {
        this.getScore();
        DBQueries.sendInsertScoreRequest(this);
        this.scene.start("GameOver", {
          pseudo: this.playerPseudo,
          floor: "'rez-de-chaussée'",
          playerChrono: this.player.score,
          playerGender: this.playerGender,
        });
        clearInterval(this.chronometer.intervalChrono);
        this.scene.stop();
      }
      /// LIST TO UPDATE DIALOG OBJECTS (PLAYER, BOSS, CLUES) ///
      for (var i = 0; i < this.updateList.length; i++) {
        this.updateList[i].update();
      }
    }
  }
  