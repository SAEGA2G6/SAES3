// You can write more code here

/* START OF COMPILED CODE */

class Presentation extends Phaser.Scene {
    constructor() {
      super("Presentation");
  
      /* START-USER-CTR-CODE */
      // Write your code here.
      /* END-USER-CTR-CODE */
    }
  
    /** @returns {void} */
    editorPreload() {}
  
    /** @returns {void} */
    editorCreate() {
        
      this.events.emit("scene-awake");
    }
  
    /* START-USER-CODE */
  
    // Write your code here
  
    create() {
      this.editorCreate();
    }
  
    /* END-USER-CODE */
  }
  
  /* END OF COMPILED CODE */
  
  // You can write more code here
  