class Presentation extends Phaser.Scene {
    constructor() {
      super("Presentation");
    }
  
    /** @returns {void} */
    editorPreload() {}
  
    /** @returns {void} */
    editorCreate() {
        
      this.events.emit("scene-awake");
    }
  
    create() {
      this.editorCreate();
    }
  }
  