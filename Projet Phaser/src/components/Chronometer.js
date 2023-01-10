class Chronometer {
  constructor(scene) {
    this.scene = scene;
    /// Chrono start at 0
    this.chrono = 0;
    ///////////// CHRONOMETER /////////////
    const back_chrono = this.scene.add
      .image(125, 100, "back_chrono")
      .setDepth(4)
      .setOrigin(0.5, 0.48)
      .setScrollFactor(0)
      .setScale(0.17);

    const chrono_txt = this.scene.add
      .text(0, 0, "00 : 00", {})
      .setDepth(5)
      .setOrigin(0.5, 0.5)
      .setStyle({
        fontFamily: "roboto",
        fontSize: "20px",
        color: "black",
      })
      .setScrollFactor(0);
    Phaser.Display.Align.In.Center(chrono_txt, back_chrono);
    this.chrono_txt = chrono_txt;

    ////malus text////
    const time_malus_txt = this.scene.add
      .text(chrono_txt.x, chrono_txt.y + 25, "+30", {})
      .setDepth(5)
      .setOrigin(0.5, 0.5)
      .setStyle({
        fontFamily: "roboto",
        fontSize: "15px",
        color: "red",
      })
      .setScrollFactor(0);
    time_malus_txt.visible = false;
    this.time_malus_txt = time_malus_txt;

    /// Every second, the chrono is incremented by one
    const intervalChrono = setInterval(() => this.updateChrono(), 1000);
    this.intervalChrono = intervalChrono;
    //
  }

  malusChrono() {
    this.time_malus_txt.visible = true;
    const timedEvent = this.scene.time.delayedCall(
      3000,
      () => {
        (this.time_malus_txt.visible = false), (this.chrono += 30);
      },
      [],
      this
    );
  }  


  updateChrono() {
    this.chrono += 1
    var min = Math.floor(this.chrono / 60);
    var sec = this.chrono % 60;
    var min_txt;
    var sec_txt;
    if (min < 10) {
      min_txt = "0" + min;
    } else {
      min_txt = min;
    }
    if (sec < 10) {
      sec_txt = "0" + sec;
    } else {
      sec_txt = sec;
    }
    this.chrono_txt.text = min_txt + " : " + sec_txt;
  }
}
