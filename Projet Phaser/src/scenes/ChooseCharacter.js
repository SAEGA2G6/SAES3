class ChooseCharacter extends Phaser.Scene {
  constructor() {
    super("ChooseCharacter");
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    const msg_chooseCharacter = this.add.text(400, 150, "CHOISIS TON PERSONNAGE", {}).setDepth(5);
    msg_chooseCharacter.setOrigin(0.5);
    msg_chooseCharacter.setStyle({
      fontFamily: "retro-computer",
      fontSize: "40px",
      color: "WHITE",
    });

    const arrow_back = this.add.image(100, 100, "arrow_back");
    arrow_back.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.scene.switch("Menu");
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
      .setOrigin(0.5, 0.5)
      .on('textchange', function (inputText) {
      })
      .on('focus', function (inputText) {
          console.log('On focus');
      })
      .on('blur', function (inputText) {
          console.log('On blur');
      })
      .on('click', function (inputText) {
          console.log('On click');
      })
      .on('dblclick', function (inputText) {
          console.log('On dblclick');
      })


    player1.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      if(inputText.text.trim().length > 0) {
        this.scene.start("Level", {texture: "player", pseudo: inputText.text});
      }
    });

    player2.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      if(inputText.text.length > 0) {
        this.scene.start("Level", {texture: "player2", pseudo: inputText.text});
      }
    });

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }
}