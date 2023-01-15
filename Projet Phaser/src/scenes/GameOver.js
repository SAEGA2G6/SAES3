class GameOver extends Phaser.Scene {
  /**
   * Scene that displays when the player has finished a level.
   * @param {*} data Object containing data essential to the functioning of the scene (player'nickname/pseudo, finished floor, player's score, player gender).
   */
  init(data) {
    this.pseudo = data.pseudo;
    this.floor = data.floor;
    this.score = data.playerChrono;
    this.playerGender = data.playerGender;
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    const arrowBack = this.add
      .image(100, 100, "arrow_back")
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.scene.start("Menu");
        this.scene.stop();
      });

    const textCongratulation1 = this.add.text(400, 200, "", {});
    textCongratulation1.setOrigin(0.5, 0);
    textCongratulation1.text = "Bravo " + this.pseudo + "\xA0!";
    textCongratulation1.setStyle({
      fontFamily: "spacemono-regular",
      fontSize: "50px",
      color: "white",
      align: "center",
      wordWrap: { width: 600 },
    });
    this.textCongratulation1 = textCongratulation1;

    const player1 = this.add.sprite(400, 400, this.playerGender).setScale(2);

    const textCongratulation2 = this.add.text(400, 500, "", {});
    textCongratulation2.setOrigin(0.5, 0);
    textCongratulation2.text =
      "Tu as terminé l'étage " +
      this.floor +
      " en " +
      this.score +
      " secondes\xA0!";
    textCongratulation2.setStyle({
      fontFamily: "comforta",
      fontSize: "25px",
      color: "white",
      align: "center",
      wordWrap: { width: 600 },
    });
    this.textCongratulation2 = textCongratulation2;

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }
}
