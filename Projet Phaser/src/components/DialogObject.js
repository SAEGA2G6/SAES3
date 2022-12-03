// You can write more code here

/* START OF COMPILED CODE */

class DialogObject extends Phaser.Physics.Arcade.Sprite {
  ///dialogType correspond au type de dialogue (indice -> clue, qcm -> mcq...)
  constructor(scene, x, y, texture, text, dialogType) {
    super(scene, x, y, texture);
    this.scene.physics.world.enable(this);
    const text_dialog = this.scene.add.text(0, 0, "", {}).setDepth(5);
    text_dialog.setOrigin(0.5, 0.5);
    text_dialog.text = text;
    text_dialog.setStyle({
      fontFamily: "Roboto",
      fontSize: "10px",
      color: "black",
      backgroundColor: "grey",
    });
    this.text_dialog = text_dialog;
    this.dialogType = dialogType;

    const text_clue = this.scene.add.text(0, 0, "clue 1", {}).setDepth(5);
    text_clue.setStyle({
      fontFamily: "Roboto",
      fontSize: "10px",
      color: "black",
      backgroundColor: "grey",
    });
    this.text_clue = text_clue;
    this.text_clue.visible = false;

    this.scene.update_list.push(this);

    this.setImmovable();
    scene.add.existing(this);
  }

  update() {
    var KeySpace = this.scene.input.keyboard.addKey("SPACE");
    if (
      Phaser.Math.Distance.Between(
        this.x,
        this.y,
        this.scene.player.x,
        this.scene.player.y
      ) < 40
    ) {
      Phaser.Display.Align.In.BottomCenter(this.text_dialog, this);
      this.text_dialog.y += 5;
      this.text_dialog.visible = true;
      if (KeySpace.isDown && this.dialogType === "mcq") {
        this.scene.scene.switch("InterfaceQCM");
      } else if (KeySpace.isDown && this.dialogType === "clue") {
        Phaser.Display.Align.In.Center(this.text_clue, this.scene.player);
        this.text_clue.visible = true;
        this.scene.player.velocity = 0;
        const timedEvent = this.scene.time.delayedCall(10000, () => { this.scene.player.velocity = this.scene.player.baseVelocity, this.text_clue.visible = false}, [], this);
      }
    } else {
      this.text_dialog.visible = false;
    }
  }
}
