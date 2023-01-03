window.addEventListener("load", function () {
  var game = new Phaser.Game({
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    backgroundColor: "#242424",
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: "arcade",
      arcade: {
        debug: false, //false de base
        gravity: { y: 0 },
      },
    },
  });
  game.scene.add("Preload", Preload);
  game.scene.add("Menu", Menu);
  game.scene.add("Highscore", Highscore);
  game.scene.add("ChooseCharacter", ChooseCharacter);
  game.scene.add("Level", Level);
  game.scene.add("FirstFloor", FirstFloor);
  game.scene.add("SecondFloor", SecondFloor);
  game.scene.add("InterfaceQCM", InterfaceQCM);
  game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {
  preload() {
    this.load.pack("pack", "assets/preload-asset-pack.json");

    console.log("Lancement Preload");
    this.load.on(Phaser.Loader.Events.COMPLETE, () =>
      this.scene.start("Preload")
    );
  }
}
