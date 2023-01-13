class Chronometer {
  constructor(scene) {
    this.scene = scene;
    /// Chrono start at 0
    this.chrono = 0;
    ///////////// CHRONOMETER /////////////
    const backChrono = this.scene.add
      .image(125, 100, "back_chrono")
      .setDepth(4)
      .setOrigin(0.5, 0.48)
      .setScrollFactor(0)
      .setScale(0.17);

    const chronoTxt = this.scene.add
      .text(0, 0, "00 : 00", {})
      .setDepth(5)
      .setOrigin(0.5, 0.5)
      .setStyle({
        fontFamily: "roboto",
        fontSize: "20px",
        color: "black",
      })
      .setScrollFactor(0);
    Phaser.Display.Align.In.Center(chronoTxt, backChrono);
    this.chronoTxt = chronoTxt;

    ////malus text////
    const timeMalusTxt = this.scene.add
      .text(chronoTxt.x, chronoTxt.y + 25, "+30", {})
      .setDepth(5)
      .setOrigin(0.5, 0.5)
      .setStyle({
        fontFamily: "roboto",
        fontSize: "15px",
        color: "red",
      })
      .setScrollFactor(0);
    timeMalusTxt.visible = false;
    this.timeMalusTxt = timeMalusTxt;

    /// Every second, the chrono is incremented by one
    const intervalChrono = setInterval(() => this.updateChrono(), 1000);
    this.intervalChrono = intervalChrono;
    //
  }

  malusChrono() {
    this.timeMalusTxt.visible = true;
    const timedEvent = this.scene.time.delayedCall(
      3000,
      () => {
        (this.timeMalusTxt.visible = false), (this.chrono += 30);
      },
      [],
      this
    );
  }  


  updateChrono() {
    this.chrono += 1
    var min = Math.floor(this.chrono / 60);
    var sec = this.chrono % 60;
    var minTxt;
    var secTxt;
    if (min < 10) {
      minTxt = "0" + min;
    } else {
      minTxt = min;
    }
    if (sec < 10) {
      secTxt = "0" + sec;
    } else {
      secTxt = sec;
    }
    this.chronoTxt.text = minTxt + " : " + secTxt;
  }
}
