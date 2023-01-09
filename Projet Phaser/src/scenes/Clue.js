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
        
        const support = this.add.image(400, 300, this.supportTexture)
        .setOrigin(0.5);


        const clue_text = this.add.text(0, 0, "", {}).setDepth(5)
        .setOrigin(0)
        .setStyle({
        fontFamily: "comforta"
        });
        this.clue_text = clue_text;

        Phaser.Display.Align.In.TopLeft(clue_text,support);

        // change couleur texte selon le support 
        if(this.supportTexture === "ordinateur") {
          support.setScale(1.5);
          clue_text.setStyle({
            fontSize: "23px",
            color: "white",
            wordWrap: { width: 500 }
          });
          clue_text.y -= 30;
          clue_text.x -= 50;
        }
        else {
          support.setScale(1.8);
          clue_text.setStyle({
            fontSize: "22px",
            color: "black",
            wordWrap: { width: 400 }
          });
          clue_text.y -= 90;
          clue_text.x -= 50;
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
          this.scene.stop();
        }
    }
  }