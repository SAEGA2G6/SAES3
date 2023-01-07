class DialogObject extends Phaser.Physics.Arcade.Sprite {
  /**
   *
   * @param {Phaser.Scene} scene Scene where the dialog object will be placed
   * @param {number} x x coordinate
   * @param {number} y y coordinate
   * @param {string} texture Texture of the dialog object
   * @param {string} displayText
   * @param {string} clueId ID which is used for the call to the DB to obtain the associated text
   * @param {string} dialogType Type of dialogue the object will have with the player, it can be a 'MCQ' type dialogue or a 'clue' type dialogue
   */
  constructor(scene, x, y, texture, displayText, clueId, dialogType) {
    super(scene, x, y, texture);
    this.scene.physics.world.enable(this);
    this.setImmovable();
    this.clueId = clueId;
    this.dialogType = dialogType;

    this.isEnable = true;

    /// Texte qui s'affiche au joueur quand il est proche ///
    /////TEST///// TODO: verifier si c'est qu'un test
    const screenCenterX =
      this.scene.cameras.main.worldView.x + this.scene.cameras.main.width / 2;
    const screenCenterY =
      this.scene.cameras.main.worldView.y +
      this.scene.cameras.main.height / 1.2;

    const text_box = this.scene.add
      .image(screenCenterX, screenCenterY, "textbox")
      .setScrollFactor(0);
    text_box.setDepth(5);
    this.text_box = text_box;

    /////////////
    const text_dialog = this.scene.add.text(0, 0, "", {}).setDepth(5);
    text_dialog.setOrigin(0.5, 0.5);
    text_dialog.text = displayText;
    text_dialog.setStyle({
      fontFamily: "Roboto",
      fontSize: "22px",
      color: "black",
    });
    /////TEST///// TODO: verifier si c'est qu'un test
    text_dialog.setScrollFactor(0);
    Phaser.Display.Align.In.Center(text_dialog, text_box);
    /////////////
    this.text_dialog = text_dialog;

    /// Texte pour l'indice ///
    const text_clue = this.scene.add.text(0, 0, "", {}).setDepth(5);
    text_clue.setStyle({
      fontFamily: "Roboto",
      fontSize: "10px",
      color: "black",
      backgroundColor: "grey",
    });
    text_clue.visible = false;
    this.text_clue = text_clue;
    ///////////////////////////

    /// On met le dialog object dans la liste des objets à update
    this.scene.update_list.push(this);

    scene.add.existing(this);
  }

  update() {
    const KeySpace = this.scene.input.keyboard.addKey("SPACE");
    const KeyEsc = this.scene.input.keyboard.addKey("ESC");

    if (
      Phaser.Math.Distance.Between(
        this.x,
        this.y,
        this.scene.player.x,
        this.scene.player.y
      ) < 40 &&
      this.isEnable
    ) {
      this.text_dialog.visible = true;
      this.text_box.visible = true;

      if (KeySpace.isDown && this.dialogType === "mcq") {
        this.disable(true);
        const scene_InterfaceQCM =
          this.scene.game.scene.getScene("InterfaceQCM");
        scene_InterfaceQCM.currentBoss = this;
        //Test
        this.scene.scene.launch("InterfaceQCM", { currentScene: this.scene });
        //
      } else if (KeySpace.isDown && this.dialogType === "clue") {
        this.disable(true);
        const scene_clue = this.scene.game.scene.getScene("Clue");
        scene_clue.clueId = this.clueId;

        this.scene.scene.launch("Clue");
      }
    } else {
      this.text_dialog.visible = false;
      this.text_box.visible = false;
    }
  }

  /**
   * Enable or disable the dialog object. This prevents the player to interact with the dialog object
   * @param {boolean} enableDialogObject
   */
  disable(enableDialogObject) {
    this.isEnable = !enableDialogObject;
  }
}
