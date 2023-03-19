class Floor extends Phaser.Scene {

    init(data) {
        this.playerGender = data.texture;
        this.playerPseudo = data.pseudo;
        this.currentNbRoom = 1;
        this.nbRooms = 4;
        this.levelPrefix = "rc";
        this.imageMap = "rcimg";
      }
  
    /** @returns {void} */
    editorCreate() {
  
      this.events.emit("scene-awake");
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
          floor: "'1er étage'",
          playerChrono: this.player.score,
          playerGender: this.playerGender,
        });
        this.scene.stop();
      }
      /// LIST TO UPDATE DIALOG OBJECTS (PLAYER, BOSS, CLUES) ///
      for (var i = 0; i < this.updateList.length; i++) {
        this.updateList[i].update();
      }
    }
  }
  