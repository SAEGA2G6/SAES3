/**
 * Class representing an answer, an object that can be clicked when a question is displayed
 */
class Answer extends Phaser.GameObjects.Text {
  /**
   * The constructor for a answer object which will be displayed during the MCQ. The player will be able to click on it.
   * @param {Phaser.Scene} scene Scene where the answer is displayed
   */
  constructor(scene) {
    super(scene, 0, 0, "", {});
    this.scene = scene;

    /// by default, the answer is created as false ///
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
        /// the event of the right answer is launched ///
        this.setStyle({ fill: "green" });
        this.scene.emitter.emit("rightAnswer");
      } else {
        /// the event of the wrong answer is launched ///
        this.setStyle({ fill: "red" });
        this.scene.emitter.emit("wrongAnswer");
      }
    });

    /// the answer is added to the scene ///
    this.scene.add.existing(this);
  }
}
