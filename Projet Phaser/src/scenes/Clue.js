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
        const clue_text = this.add.text(0, 0, "", {}).setDepth(5);
        clue_text.setOrigin(0, 0.5);
        clue_text.setStyle({
        fontFamily: "roboto",
        fontSize: "25px",
        color: "white",
        wordWrap: { width: 400 }
        });

        this.clue_text = clue_text;

        Phaser.Display.Align.In.TopCenter(clue_text,paper_support);
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