class Choose extends Phaser.Scene {
  /**
   * Scene for level and character selection.
   * @param {*} data Object containing data essential to the functioning of the selection.
   */
  init(data) {
    this.chooseOption = data.chooseOption;
    this.chosenLevel = data.chosenLevel;
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    /// back arrow ///
    this.add
      .image(100, 100, "arrow_back")
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.scene.start("Menu");
        this.scene.stop();
      });

    if (this.chooseOption === "Level") {
      this.chooseLevel();
    } else if (this.chooseOption === "Character") {
      this.chooseCharacter();
    }

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  /**
   * Places the objects necessary for the selection of the levels.
   * @return {void}
   */
  chooseLevel() {
    this.add
      .text(400, 150, "CHOISIS TON ETAGE", {})
      .setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      });

    const floor0 = this.add
      .text(400, 300, "REZ-DE-CHAUSSEE - 1ERE ANNEE", {})
      .setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.scene.restart({
          chooseOption: "Character",
          chosenLevel: "GroundFloor",
        });
      })
      .on("pointerover", () => floor0.setStyle({ fill: "orange" }))
      .on("pointerout", () => floor0.setStyle({ fill: "white" }));

    const floor1 = this.add
      .text(400, 400, "1ER ETAGE - 2EME ANNEE", {})
      .setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.scene.restart({
          chooseOption: "Character",
          chosenLevel: "FirstFloor",
        });
      })
      .on("pointerover", () => floor1.setStyle({ fill: "orange" }))
      .on("pointerout", () => floor1.setStyle({ fill: "white" }));

    const floor2 = this.add
      .text(400, 500, "2EME ETAGE - 3EME ANNEE", {})
      .setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.scene.restart({
          chooseOption: "Character",
          chosenLevel: "SecondFloor",
        });
      })
      .on("pointerover", () => floor2.setStyle({ fill: "orange" }))
      .on("pointerout", () => floor2.setStyle({ fill: "white" }));
  }

  /**
   * Places the objects necessary for the selection of the character.
   * @return {void}
   */
  chooseCharacter() {
    this.add
      .text(400, 150, "CHOISIS TON PERSONNAGE", {})
      .setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      });

    const back1 = this.add
      .rectangle(340, 300, 100, 148, 0xf3e6d8)
      .setStrokeStyle(4, 0x56a0d3);
    const back2 = this.add
      .rectangle(460, 300, 100, 148, 0xf3e6d8)
      .setStrokeStyle(4, 0xf773d6);

    const inputText = this.add
      .rexInputText(400, 450, {
        type: "textarea",
        text: "",
        fontSize: "20px",
        placeholder: "pseudo",
        minLength: 1,
        maxLength: 10,
        align: "center",
      })
      .resize(250, 100)
      .setOrigin(0.5, 0.5);

    const player1 = this.add
      .sprite(0, 0, "player")
      .setScale(2)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        if (inputText.text.trim().length > 0) {
          this.scene.start("Presentation", {
            chosenLevel: this.chosenLevel,
            texture: "player",
            pseudo: inputText.text,
          });
          this.scene.stop();
        }
      });

    Phaser.Display.Align.In.Center(player1, back1);

    const player2 = this.add
      .sprite(0, 0, "player2")
      .setScale(2)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        if (inputText.text.trim().length > 0) {
          this.scene.start("Presentation", {
            chosenLevel: this.chosenLevel,
            texture: "player2",
            pseudo: inputText.text,
          });
          this.scene.stop();
        }
      });

    Phaser.Display.Align.In.Center(player2, back2);

    const maleSymbol = this.add
      .image(0, 0, "male-symbol")
      .setOrigin(1, 0)
      .setScale(0.025);

    const femaleSymbol = this.add
      .image(0, 0, "female-symbol")
      .setOrigin(1, 0)
      .setScale(0.025);

    Phaser.Display.Align.In.TopRight(maleSymbol, back1);
    Phaser.Display.Align.In.TopRight(femaleSymbol, back2);
  }
}
