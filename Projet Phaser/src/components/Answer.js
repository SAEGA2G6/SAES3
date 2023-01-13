class Answer extends Phaser.GameObjects.Text {
  /**
   * The constructor for a answer objectwhich will be displayed during the MCQ. The player will be able to click on it if he/she thinks it is right
   * @param {Phaser.Scene} scene Scene to display the answer
   */
  constructor(scene) {
    super(scene, 0, 0, "", {});
    this.scene = scene;
    this.isRight = false;
    this.setDepth(5);
    this.setStyle({
      fontFamily: "Roboto",
      fontSize: "15px",
      color: "black",
      wordWrap: { width: 600 },
    });
    this.setOrigin(0);

    this.setInteractive({ useHandCursor: true }).on("pointerdown", () => {
      if (this.isRight) {
        /// on lance l'event de la bonne réponse ///
        this.setStyle({ fill: "green" });
        this.scene.emitter.emit("rightAnswer");
      } else {
        /// on lance l'event de la mauvaise réponse ///
        this.setStyle({ fill: "red" });
        this.scene.emitter.emit("wrongAnswer");
      }
    });

    this.scene.add.existing(this);
  }
}
