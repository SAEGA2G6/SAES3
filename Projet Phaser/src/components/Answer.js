// You can write more code here

/* START OF COMPILED CODE */

class Answer extends Phaser.GameObjects.Text {
  constructor(scene, text, isRight) {
    super(scene, 0, 0, text, {});
    this.scene = scene;
    this.isRight = isRight;
    this.setDepth(5);
    this.setStyle({
      fontFamily: "Roboto",
      fontSize: "20px",
      color: "white",
    });
    /*
    this.setInteractive({ useHandCursor: true }).on("pointerover", () =>
    this.setStyle({ fill: "purple" })
  );
  this.setInteractive({ useHandCursor: true }).on("pointerout", () =>
    this.setStyle({ fill: "white" })
  );*/
    this.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      if (this.isRight) {
        /// on lance l'event de la bonne réponse ///
        this.setStyle({ fill: "green" });
        this.scene.emitter.emit("right_answer");
      } else {
        /// on lance l'event de la mauvaise réponse ///
        this.setStyle({ fill: "red" });
        this.scene.emitter.emit("wrong_answer");
      }
    });

    this.scene.add.existing(this);
  }
}
