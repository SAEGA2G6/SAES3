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
        this.sendRequest();
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

    /**
     * query sent to retrieve the text of the clue
     * @return {void}
     */
    sendRequest() {
        const that = this;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "src/mysql.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            // Traitez la réponse ici
            console.log("on est dans la requete");
            var response = xhr.responseText;
            const MyJsonClue = JSON.parse(this.response);
            console.log(response);
            that.clue_text.text = MyJsonClue[0].CONTENUE;
          }
        };
        xhr.open("POST", "src/mysql.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("query=SELECT * FROM INDICE WHERE ID_INDICE = '" + this.clueId + "'");
      }
  }