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

    this.texture = texture;

    /// key used to open the MCQ or clue ///
    const KeySpace = this.scene.input.keyboard.addKey("SPACE");
    this.KeySpace = KeySpace;
    ////////////////////////////

    /// Text that is displayed to the player when he is close ///
    const screenCenterX =
      this.scene.cameras.main.worldView.x + this.scene.cameras.main.width / 2;
    const screenCenterY =
      this.scene.cameras.main.worldView.y +
      this.scene.cameras.main.height / 1.2;

    const textBox = this.scene.add
      .image(screenCenterX, screenCenterY, "textbox")
      .setScrollFactor(0);
    textBox.setDepth(5);
    this.textBox = textBox;

    const textDialog = this.scene.add.text(0, 0, "", {}).setDepth(5);
    textDialog.setOrigin(0.5, 0.5);
    textDialog.text = displayText;
    textDialog.setStyle({
      fontFamily: "Roboto",
      fontSize: "22px",
      color: "black",
    });
    textDialog.setScrollFactor(0);
    Phaser.Display.Align.In.Center(textDialog, textBox);
    this.textDialog = textDialog;
    ////////////////////////////

    /// Put the dialog object in the list of objects to be updated ///
    this.scene.updateList.push(this);
    ////////////////////////////

    scene.add.existing(this);
  }

  /**
   * Enable or disable the dialog object. This prevents the player to interact with the dialog object.
   * @param {boolean} enableDialogObject
   */
  disable(enableDialogObject) {
    this.isEnable = !enableDialogObject;
  }

  /**
   * update the DialogObject (see if the player is close enough to interact with it...).
   * @return {void}
   */
  update() {
    if (
      Phaser.Math.Distance.BetweenPoints(this, this.scene.player) < 40 &&
      this.isEnable
    ) {
      this.textDialog.visible = true;
      this.textBox.visible = true;

      if (this.KeySpace.isDown && this.dialogType === "mcq") {
        this.disable(true);
        const sceneMCQInterface =
          this.scene.game.scene.getScene("MCQInterface");
        sceneMCQInterface.currentBoss = this;
        this.scene.scene.launch("MCQInterface", { currentScene: this.scene });
      } else if (this.KeySpace.isDown && this.dialogType === "clue") {
        this.disable(true);
        const sceneClue = this.scene.game.scene.getScene("Clue");
        sceneClue.currentClue = this;
        sceneClue.clueId = this.clueId;
        if (this.texture === "pcAllume") {
          this.scene.scene.launch("Clue", {
            currentScene: this.scene,
            supportTexture: "ordinateur",
          });
        } else {
          this.scene.scene.launch("Clue", {
            currentScene: this.scene,
            supportTexture: "papier",
          });
        }
      }
    } else {
      this.textDialog.visible = false;
      this.textBox.visible = false;
    }
  }
}
