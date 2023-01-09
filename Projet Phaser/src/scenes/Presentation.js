class Presentation extends Phaser.Scene {
    constructor() {
      super("Presentation");
    }
  
    /** @returns {void} */
    editorPreload() {}
  
    /** @returns {void} */
    editorCreate() {
      const msg_chooseLevel = this.add.text(400, 150, "CHOISIS TON ETAGE", {}).setDepth(5);
      msg_chooseLevel.setOrigin(0.5);
      msg_chooseLevel.setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      });
  
      const arrow_back = this.add.image(100, 100, "arrow_back");
      arrow_back.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
        this.scene.switch("Menu");
      });
      
  
      const roof0 = this.add.text(400, 150, "REZ-DE-CHAUSSEE / 1ERE ANNEE", {}).setDepth(5);
      roof0.setOrigin(0.5);
      roof0.setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      });

      const roof1 = this.add.text(400, 150, "1ER ETAGE / 2EME ANNEE", {}).setDepth(5);
      roof1.setOrigin(0.5);
      roof1.setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      });

      const roof2 = this.add.text(400, 150, "2EME ETAGE / 3EME ANNEE", {}).setDepth(5);
      roof2.setOrigin(0.5);
      roof2.setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      });
  

      roof0.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
        this.scene.start("Level", {texture: "player", pseudo: inputText.text});
      });
  
      roof1.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
        This.scene.start("Level", {texture: "player2", pseudo: inputText.text});
      });
  
      this.events.emit("scene-awake");
    }
  
    create() {
      this.editorCreate();
    }
  }
  