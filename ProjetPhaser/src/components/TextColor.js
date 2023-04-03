/**
 * Class representing a colored text, which can redirect to another scene
 */
class TextColor extends UserComponent {
  /**
   * @param {Phaser.GameObjects.GameObject} gameObject The entity.
   * @param {Phaser.Scene} scene Scene that will be started when this text is clicked on
   */
  constructor(gameObject, scene, sceneData) {
    super(gameObject);

    this.gameObject = gameObject;
    gameObject["__TextColor"] = this;

    this.scene = scene;
    this.sceneData = sceneData;
  }

  /** @returns {TextColor} */
  static getComponent(gameObject) {
    return gameObject["__TextColor"];
  }

  /** @type {Phaser.GameObjects.Text} */
  gameObject;

  awake() {
    /// make the TextColor interactive by clicking on it ///
    this.gameObject.setInteractive({ useHandCursor: true });

    /// no redirection on click if "scene" is null ///
    if (this.scene === null) {
      this.gameObject.on("pointerdown", () =>
        this.gameObject.setStyle({ fill: "purple" })
      );
    } else {
      this.gameObject.on("pointerdown", () => {
        this.gameObject.setStyle({ fill: "purple" }),
          this.gameObject.scene.scene.start(this.scene, this.sceneData),
          this.gameObject.scene.scene.stop();
      });
    }
    this.gameObject.on("pointerover", () => this.gameObject.setStyle({ fill: "orange" }));
    this.gameObject.on("pointerout", () => this.gameObject.setStyle({ fill: "white" }));
  }
}
