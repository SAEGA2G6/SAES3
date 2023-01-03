// You can write more code here

/* START OF COMPILED CODE */

class ChooseCharacter extends Phaser.Scene {
  constructor() {
    super("ChooseCharacter");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
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

    player1.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.scene.start("Level", {texture: "player"});
    });

    player2.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      this.scene.start("Level", {texture: "player2"});
    });

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
