class ChooseCharacter extends Phaser.Scene {
  init(data) {
    this.chooseOption = data.chooseOption;
    this.chosenLevel = data.chosenLevel
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {

    if(this.chooseOption == "Level") {
      this.chooseLevel;
    }
    else if(this.chooseOption == "Character") {
      this.chooseCharacter();
    }


    const arrow_back = this.add.image(100, 100, "arrow_back");
    arrow_back.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.scene.switch("Menu");
    });

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  chooseLevel() {
    const msg_chooseLevel = this.add.text(400, 150, "CHOISIS TON ETAGE", {}).setDepth(5);
      msg_chooseLevel.setOrigin(0.5);
      msg_chooseLevel.setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
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
        this.scene.restart({chooseOption: "Character", chosenLevel: "Level"});
      });
  
      roof1.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
        this.scene.restart({chooseOption: "Character", chosenLevel: "FirstFloor"});
      });

      roof2.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
        this.scene.restart({chooseOption: "Character", chosenLevel: "SecondFloor"});
      });
  }


  chooseCharacter() {
    const msg_chooseCharacter = this.add.text(400, 150, "CHOISIS TON PERSONNAGE", {}).setDepth(5);
    msg_chooseCharacter.setOrigin(0.5);
    msg_chooseCharacter.setStyle({
      fontFamily: "retro-computer",
      fontSize: "40px",
      color: "WHITE",
    });

    var back1 = this.add.rectangle(340, 300, 100, 148, 0xF3E6D8);
    var back2 = this.add.rectangle(460, 300, 100, 148, 0xF3E6D8);
    back1.setStrokeStyle(4, 0x56A0D3);
    back2.setStrokeStyle(4, 0xF773D6);

    const player1 = this.add.sprite(0, 0, "player");
    player1.setScale(2);
    Phaser.Display.Align.In.Center(player1, back1);

    const player2 = this.add.sprite(0, 0, "player2");
    player2.setScale(2);
    Phaser.Display.Align.In.Center(player2, back2);

    const male_symbol = this.add.image(
      player1.x + 38,
      player1.y - 60,
      "male-symbol"
    );
    const female_symbol = this.add.image(
      player2.x + 40,
      player2.y - 60,
      "female-symbol"
    );
    male_symbol.setOrigin(0.5);
    female_symbol.setOrigin(0.5);
    male_symbol.setScale(0.025);
    female_symbol.setScale(0.025);

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


    player1.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      if(inputText.text.trim().length > 0) {
        this.scene.start(this.chosenLevel, {texture: "player", pseudo: inputText.text});
      }
    });

    player2.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      if(inputText.text.trim().length > 0) {
        this.scene.start(this.chosenLevel, {texture: "player2", pseudo: inputText.text});
      }
    });
  }
}