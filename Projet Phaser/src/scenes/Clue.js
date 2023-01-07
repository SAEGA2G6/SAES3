class Clue extends Phaser.Scene {
    constructor() {
      super("Clue");
      this.clueId;
    }
  
    /** @returns {void} */
    editorPreload() {}
  
    /** @returns {void} */
    editorCreate() {
        const paper_support = this.add.image(400, 300, "papier");
        paper_support.setScale(1.8);
        paper_support.setOrigin(0.5);

        const clue_text = this.add.text(0, 0, "", {}).setDepth(5);
        clue_text.setOrigin(0, 0.5);
        clue_text.setStyle({
        fontFamily: "roboto",
        fontSize: "25px",
        color: "black",
        wordWrap: { width: 300 }
        });

        this.clue_text = clue_text;

        Phaser.Display.Align.In.BottomLeft(clue_text,paper_support);
        clue_text.y -= 225;
        DBQueries.sendClueRequest(this);
    }
  
    Preload() {
      this.editorPreload();
    }
  
    create() {
      this.editorCreate();
    }
  
    update() {
        const KeyESC = this.input.keyboard.addKey("esc");
        if (KeyESC.isDown) {
          this.scene.stop();
        }
    }
  }