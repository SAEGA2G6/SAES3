class TextColor extends UserComponent {
  /**
   * @param {Phaser.GameObjects.GameObject} gameObject The entity.
   * @param {Phaser.Scene} scene Scene that will be played when this text is clicked on
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
    if (this.scene === null) {
      this.gameObject
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => this.gameObject.setStyle({ fill: "purple" }));
    } else {
      this.gameObject
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => {
          this.gameObject.setStyle({ fill: "purple" }),
            this.gameObject.scene.scene.start(this.scene, this.sceneData),
            this.gameObject.scene.scene.stop();
        });
    }

    this.gameObject
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => this.gameObject.setStyle({ fill: "orange" }));
    this.gameObject
      .setInteractive({ useHandCursor: true })
      .on("pointerout", () => this.gameObject.setStyle({ fill: "white" }));
  }
}
