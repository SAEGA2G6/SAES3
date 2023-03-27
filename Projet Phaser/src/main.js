window.addEventListener("load", function () {
  var game = new Phaser.Game({
    parent: "phaser-input",
    dom: {
      createContainer: true,
    },
    width: 800,
    height: 600,
    type: Phaser.CANVAS,
    backgroundColor: "#242424",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
        gravity: { y: 0 },
      },
    },
  });

  game.scene.add("Preload", Preload);
  game.scene.add("Menu", Menu);
  game.scene.add("Highscore", Highscore);
  game.scene.add("Choose", Choose);
  game.scene.add("GameOver", GameOver);
  game.scene.add("Presentation", Presentation);
  game.scene.add("GroundFloor", GroundFloor);
  game.scene.add("FirstFloor", FirstFloor);
  game.scene.add("SecondFloor", SecondFloor);
  game.scene.add("MCQInterface", MCQInterface);
  game.scene.add("Clue", Clue);
  game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack("pack", "assets/preload-asset-pack.json");

    this.load.on(Phaser.Loader.Events.COMPLETE, () =>
      this.scene.start("Preload")
    );
  }
}
