class ChooseCharacter extends Phaser.Scene {
  init(data) {
    this.chooseOption = data.chooseOption;
    this.chosenLevel = data.chosenLevel
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


    if(this.chooseOption == "Level") {
      this.chooseLevel();
      console.log("choosing level");
    }
    else if(this.chooseOption == "Character") {
      this.chooseCharacter();
      console.log("choosing character");
    }

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  chooseLevel() {
    const msg_chooseLevel = this.add.text(400, 150, "CHOISIS TON ETAGE", {}).setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      });
      
      //TODO: changer en TextColor
      const roof0 = this.add.text(400, 300, "REZ-DE-CHAUSSEE - 1ERE ANNEE", {}).setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      })
      .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
        this.scene.restart({chooseOption: "Character", chosenLevel: "Level"});
      });

      const roof1 = this.add.text(400, 400, "1ER ETAGE - 2EME ANNEE", {}).setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      })
      .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
        this.scene.restart({chooseOption: "Character", chosenLevel: "FirstFloor"});
      });

      const roof2 = this.add.text(400, 500, "2EME ETAGE - 3EME ANNEE", {}).setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      })
      .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
        this.scene.restart({chooseOption: "Character", chosenLevel: "SecondFloor"});
      });
  }


  chooseCharacter() {
    const msg_chooseCharacter = this.add.text(400, 150, "CHOISIS TON PERSONNAGE", {})
    .setDepth(5)
    .setOrigin(0.5)
    .setStyle({
      fontFamily: "retro-computer",
      fontSize: "40px",
      color: "WHITE",
    });

    const back1 = this.add.rectangle(340, 300, 100, 148, 0xF3E6D8)
    .setStrokeStyle(4, 0x56A0D3);
    const back2 = this.add.rectangle(460, 300, 100, 148, 0xF3E6D8)
    .setStrokeStyle(4, 0xF773D6);

    const player1 = this.add.sprite(0, 0, "player")
    .setScale(2)
    .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      if(inputText.text.trim().length > 0) {
        this.scene.start(this.chosenLevel, {texture: "player", pseudo: inputText.text});
        this.scene.stop();
      }
    });

    Phaser.Display.Align.In.Center(player1, back1);


    const player2 = this.add.sprite(0, 0, "player2")
    .setScale(2)
    .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      if(inputText.text.trim().length > 0) {
        this.scene.start(this.chosenLevel, {texture: "player2", pseudo: inputText.text});
        this.scene.stop();
      }
    });

    Phaser.Display.Align.In.Center(player2, back2);


    const male_symbol = this.add.image(0, 0, "male-symbol")
    .setOrigin(1,0).setScale(0.025);

    const female_symbol = this.add.image(0, 0, "female-symbol")
    .setOrigin(1,0).setScale(0.025);

    Phaser.Display.Align.In.TopRight(male_symbol, back1);
    Phaser.Display.Align.In.TopRight(female_symbol, back2);

    const inputText = this.add.rexInputText(400, 450, {
      type: 'textarea',
      text: '',
      fontSize: '20px',
      placeholder: 'pseudo',
      minLength: 1,
      maxLength: 22,
      align: 'center',

    })
      .resize(250, 100)
      .setOrigin(0.5, 0.5);
  }
}