class GameOver extends Phaser.Scene {
    init(data) {
        this.pseudo = data.pseudo;
        this.roof = data.roof;
        this.score = data.playerChrono;
        this.playerGender = data.playerGender;
    }
  
    /** @returns {void} */
    editorPreload() {}
  
    /** @returns {void} */
    editorCreate() {
        const arrow_back = this.add.image(100, 100, "arrow_back")
        .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
          this.scene.start("Menu");
          this.scene.stop();
        });

        const text_congratulation1 = this.add.text(400, 200, "", {});
        text_congratulation1.setOrigin(0.5, 0);
        text_congratulation1.text = "Bravo " + this.pseudo + "\xA0!";
        text_congratulation1.setStyle({
          fontFamily: "spacemono-regular",
          fontSize: "50px",
          color: "white",
          align: "center",
          wordWrap: { width: 600 },
        });
        this.text_congratulation1 = text_congratulation1;


        const player1 = this.add.sprite(400, 400, this.playerGender)
        .setScale(2);


        const text_congratulation2 = this.add.text(400, 500, "", {});
        text_congratulation2.setOrigin(0.5, 0);
        text_congratulation2.text = "Tu as terminé l'étage " + this.roof + " en " + this.score + " secondes\xA0!";
        text_congratulation2.setStyle({
          fontFamily: "comforta",
          fontSize: "25px",
          color: "white",
          align: "center",
          wordWrap: { width: 600 },
        });
        this.text_congratulation2 = text_congratulation2;

        
  
      this.events.emit("scene-awake");
    }
  
    create() {
      this.editorCreate();
    }
  
  }
  