class Choose extends Phaser.Scene {
  init(data) {
    this.chooseOption = data.chooseOption;
    this.chosenLevel = data.chosenLevel;
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    const arrowBack = this.add.image(100, 100, "arrow_back")
    .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.scene.start("Menu");
      this.scene.stop();
    });


    if(this.chooseOption == "Level") {
      this.chooseLevel();
    }
    else if(this.chooseOption == "Character") {
      this.chooseCharacter();
    }

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  chooseLevel() {
    const textChooseLevel = this.add.text(400, 150, "CHOISIS TON ETAGE", {}).setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      });
      
      const roof0 = this.add.text(400, 300, "REZ-DE-CHAUSSEE - 1ERE ANNEE", {}).setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.scene.restart({chooseOption: "Character", chosenLevel: "GroundFloor"});
      })
      .on("pointerover", () => roof0.setStyle({ fill: "orange" }))
      .on("pointerout", () => roof0.setStyle({ fill: "white" }));

      const roof1 = this.add.text(400, 400, "1ER ETAGE - 2EME ANNEE", {}).setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.scene.restart({chooseOption: "Character", chosenLevel: "FirstFloor"});
      })
      .on("pointerover", () => roof1.setStyle({ fill: "orange" }))
      .on("pointerout", () => roof1.setStyle({ fill: "white" }));

      const roof2 = this.add.text(400, 500, "2EME ETAGE - 3EME ANNEE", {}).setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      })
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.scene.restart({chooseOption: "Character", chosenLevel: "SecondFloor"});
      })
      .on("pointerover", () => roof2.setStyle({ fill: "orange" }))
      .on("pointerout", () => roof2.setStyle({ fill: "white" }));
  }


  chooseCharacter() {
    const textChooseCharacter = this.add.text(400, 150, "CHOISIS TON PERSONNAGE", {})
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

    const inputText = this.add.rexInputText(400, 450, {
      type: 'textarea',
      text: '',
      fontSize: '20px',
      placeholder: 'pseudo',
      minLength: 1,
      maxLength: 10,
      align: 'center',

    })
      .resize(250, 100)
      .setOrigin(0.5, 0.5);

    const player1 = this.add.sprite(0, 0, "player")
    .setScale(2)
    .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      if(inputText.text.trim().length > 0) {
        this.scene.start("Presentation", {chosenLevel: this.chosenLevel, texture: "player", pseudo: inputText.text});
        this.scene.stop();
      }
    });

    Phaser.Display.Align.In.Center(player1, back1);


    const player2 = this.add.sprite(0, 0, "player2")
    .setScale(2)
    .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      if(inputText.text.trim().length > 0) {
        this.scene.start("Presentation", {chosenLevel: this.chosenLevel, texture: "player2", pseudo: inputText.text});
        this.scene.stop();
      }
    });

    Phaser.Display.Align.In.Center(player2, back2);


    const maleSymbol = this.add.image(0, 0, "male-symbol")
    .setOrigin(1,0).setScale(0.025);

    const femaleSymbol = this.add.image(0, 0, "female-symbol")
    .setOrigin(1,0).setScale(0.025);

    Phaser.Display.Align.In.TopRight(maleSymbol, back1);
    Phaser.Display.Align.In.TopRight(femaleSymbol, back2);
  }
}