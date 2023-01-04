// You can write more code here

/* START OF COMPILED CODE */

class DialogObject extends Phaser.Physics.Arcade.Sprite {
  ///dialogType correspond au type de dialogue (indice -> clue, qcm -> mcq...)
  constructor(scene, x, y, texture, displayText, clueText,dialogType) {
    super(scene, x, y, texture);
    this.scene.physics.world.enable(this);
    this.setImmovable();
    this.dialogType = dialogType;

    this.isEnable = true;

    /// Texte qui s'affiche au joueur quand il est proche ///
    /////TEST/////
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
    /////TEST/////
    text_dialog.setScrollFactor(0);
    Phaser.Display.Align.In.Center(text_dialog, text_box);
    /////////////
    this.text_dialog = text_dialog;

    /// Texte pour l'indice ///
    const text_clue = this.scene.add.text(0, 0, clueText, {}).setDepth(5);
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
        const scene_InterfaceQCM = this.scene.game.scene.getScene("InterfaceQCM");
        scene_InterfaceQCM.currentBoss = this;
        this.scene.scene.switch("InterfaceQCM");
      } else if (KeySpace.isDown && this.dialogType === "clue") {
        Phaser.Display.Align.In.Center(this.text_clue, this.scene.player);
        this.text_clue.visible = true;
        this.scene.player.velocity = 0;
      }

      if (KeyEsc.isDown && this.text_clue.visible === true) {
        this.text_clue.visible = false;
        this.scene.player.velocity = this.scene.player.baseVelocity;
      }
    } else {
      this.text_dialog.visible = false;
      this.text_box.visible = false;
    }
  }
}
