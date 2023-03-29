class Preload extends Phaser.Scene {
  /**
   * Scene that is displayed during preloading
   */
  constructor() {
    super("Preload");
  }

  /** @returns {void} */
  editorPreload() {
    this.load.pack("asset-pack", "../assets/asset-pack.json");
    this.load.pack("tileset-pack", "../assets/tileset-pack.json");
    this.load.tilemapTiledJSON("map", "../assets/maps/iut_rcFinis.json");
    this.load.tilemapTiledJSON("map1", "../assets/maps/iut_e1Finis.json");
    this.load.tilemapTiledJSON("map2", "../assets/maps/iut_e2.json");
  }

  /** @returns {void} */
  editorCreate() {
    const spinner = this.physics.add.sprite(400, 219, "spinner");

    this.anims.create({
      key: "spin",
      frames: this.anims.generateFrameNumbers("spinner", { start: 0, end: 47 }),
      frameRate: 25,
      repeat: -1,
    });

    spinner.anims.play("spin");
    spinner.anims.yoyo = !spinner.anims.yoyo;

    /// progress ///
    const progress = this.add
      .text(400, 349, "", {})
      .setOrigin(0.5, 0.5)
      .setStyle({ fontSize: "30px" });
    progress.text = "0%";

    /// progress (components) ///
    new PreloadText(progress);

    this.events.emit("scene-awake");
  }

  preload() {
    this.editorCreate();

    this.editorPreload();

    this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Menu"));
  }
}
