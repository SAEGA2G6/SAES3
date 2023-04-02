/**
 * Class representing the scene displayed before the start of the level, which is used to explain the context of the game
 */
class Presentation extends Phaser.Scene {
  /**
   * Scene that displays the presentation, the context of the game.
   * @param {*} data Object containing data essential to the functioning of the game.
   */
  init(data) {
    this.data = data;
  }

  /** @returns {void} */
  editorCreate() {
    var introIterator = 0;
    this.introIterator = introIterator;

    this.listPresentationImages = [
      this.add.image(400, 300, "pres1").setOrigin(0.5).setScale(0.3),
      this.add.image(400, 300, "pres2").setOrigin(0.5).setScale(0.3),
      this.add.image(400, 300, "pres3").setOrigin(0.5).setScale(0.3),
      this.add.image(400, 300, "pres4").setOrigin(0.5).setScale(0.3),
      this.add.image(400, 300, "pres5").setOrigin(0.5).setScale(0.3),
    ];
    this.listPresentationImages.forEach((image) => {
      image.visible = false;
    });
    this.listPresentationImages[this.introIterator].visible = true;

    // Arrow to skip all
    this.add
      .image(700, 100, "arrow_back")
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.introIterator = this.listPresentationImages.length - 1;
        this.nextImage();
      }).angle = 180;

    // Arrow to go to next image
    this.add
      .image(700, 300, "arrow_back")
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.nextImage();
      }).angle = 180;

    //Text skip all
    this.add
      .text(700, 125, "Tout passer", {})
      .setOrigin(0.5, 0.5)
      .setStyle({
        fontFamily: "spacemono-regular",
        fontSize: "15px",
        color: "WHITE",
        wordWrap: { width: 600 },
      });

    this.textStart = this.add
      .text(700, 500, "START", {})
      .setOrigin(0.5, 0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "60px",
        color: "white",
      });
    this.textStart.visible = false;

    /// START GAME AND HIGHSCORE ///
    new TextColor(this.textStart, "Floor", this.data);

    //this.nextImage();

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  /**
   * Displays the following presentation image
   * @return {void}
   */
  nextImage() {
    if (this.introIterator + 1 < this.listPresentationImages.length) {
      this.listPresentationImages.forEach((image) => {
        image.visible = false;
      });
      this.listPresentationImages[this.introIterator + 1].visible = true;
      this.introIterator++;
    } else {
      this.introIterator = 0;
      this.listPresentationImages.forEach((image) => {
        image.visible = false;
      });
      this.listPresentationImages[this.introIterator].visible = true;
      this.textStart.visible = true;
    }
  }
}
