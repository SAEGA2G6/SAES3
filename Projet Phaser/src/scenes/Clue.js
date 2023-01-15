class Clue extends Phaser.Scene {
    init(data) {
      this.currentScene = data.currentScene;
      this.supportTexture = data.supportTexture;
      this.currentClue;
      this.clueId;
    }
  
    /** @returns {void} */
    editorPreload() {}
  
    /** @returns {void} */
    editorCreate() {
      this.currentScene.player.velocity = 0;

      const support = this.add.image(400, 300, this.supportTexture)
      .setOrigin(0.5);


      const clueText = this.add.text(0, 0, "", {}).setDepth(5)
      .setOrigin(0)
      .setStyle({
      fontFamily: "comforta"
      });
      this.clueText = clueText;

      Phaser.Display.Align.In.TopLeft(clueText,support);
      
      // change couleur texte selon le support 
      if(this.supportTexture === "ordinateur") {
        support.setScale(1.5);
        clueText.setStyle({
          fontSize: "20px",
          color: "white",
          wordWrap: { width: 500 }
        });
        clueText.y -= 30;
        clueText.x -= 50;
      }
      else {
        support.setScale(1.8);
        clueText.setStyle({
          fontSize: "17px",
          color: "black",
          wordWrap: { width: 400 }
        });
        clueText.y -= 90;
        clueText.x -= 50;
      }
      
      DBQueries.sendClueRequest(this);

      const KeyESC = this.input.keyboard.addKey("esc");
      this.KeyESC = KeyESC;
    }
  
    Preload() {
      this.editorPreload();
    }
  
    create() {
      this.editorCreate();
    }
  
    update() {
      if (this.KeyESC.isDown) {
        this.currentClue.disable(false);
        this.exitClue();
      }
    }

    exitClue() {
      //TODO: faire une méthode pour reset la vitesse du joueur
      this.currentScene.player.velocity = this.currentScene.player.baseVelocity;
      //we stop this scene which is then reset
      this.scene.stop();
    }
  }