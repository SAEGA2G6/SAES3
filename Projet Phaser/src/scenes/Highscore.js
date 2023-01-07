class Highscore extends Phaser.Scene {
  constructor() {
    super("Highscore");
    this.myJsonScores;
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    const highscore_test = this.add.text(400, 250, "", {});
    this.highscore_test = highscore_test;
    highscore_test.setOrigin(0.5, 0.5);
    //highscore_test.text = "1ER\n2EME\n3EME\n4EME\n5EME\n6EME\n7EME\n8EME\n9EME\n10EME";
    highscore_test.setStyle({
      fontFamily: "spacemono-regular",
      fontSize: "25px",
      color: "white",
    });
    highscore_test
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {});

    const text_menu = this.add.text(400, 425, "", {});
    text_menu.setOrigin(0.5, 0.5);
    text_menu.text = "MENU";
    text_menu.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });

    new TextColor(text_menu, "Menu");

    this.sendRequest();

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  /**
   * query sent to retrieve the text of the clue
   * @return {void}
   */
  sendRequest() {
    const that = this;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Traitez la réponse ici
        console.log("on est dans la requete");
        var response = xhr.responseText;
        const myJsonScores = JSON.parse(this.response);
        console.log(response);
        console.log(myJsonScores);
        for (let index = 0; index < myJsonScores.length; index++) {
          if (index == 0) {
            that.highscore_test.text +=
              "1ER  " +
              myJsonScores[index].ID_JOUEUR +
              " " +
              myJsonScores[index].SCORE;
          } else {
            var place = index + 1;
            that.highscore_test.text +=
              "\n" +
              place +
              "EME " +
              myJsonScores[index].ID_JOUEUR +
              " " +
              myJsonScores[index].SCORE;
          }
        }
      }
    };
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("query=SELECT * FROM SCORE ORDER BY score DESC");
  }
}
