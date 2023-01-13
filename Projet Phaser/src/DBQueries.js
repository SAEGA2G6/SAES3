class DBQueries {
  /**
   * query sent to retrieve the text of the clue
   * @return {void}
   */
  static sendClueRequest(that) {
    const xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/clue.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        const MyJsonClue = JSON.parse(response);
        that.clueText.text = MyJsonClue[0].CONTENUE;
      }
    };
    console.log("ClueID: " + that.clueId);
    xhr.open("POST", "src/clue.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("clueID=" + that.clueId);
  }

  /**
   * query sent to retrieve the scores from DB
   * @return {void}
   */
  static sendScoresRequest(that, roof) {
    that.textHighscore.text = "";
    const xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/highscore.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        console.log("response: " + response);
        const myJsonScores = JSON.parse(response);
        if (myJsonScores.length == 0) {
          that.textHighscore.text = "Aucun score :(";
        } else {
          for (let index = 0; index < myJsonScores.length; index++) {
            if (index == 0) {
              that.textHighscore.text +=
                "1ER  " +
                myJsonScores[index].ID_JOUEUR +
                "   " +
                myJsonScores[index].SCORE +
                " sec";
            } else {
              var place = index + 1;
              that.textHighscore.text +=
                "\n" +
                place +
                "EME " +
                myJsonScores[index].ID_JOUEUR +
                "   " +
                myJsonScores[index].SCORE +
                " sec";
            }
          }
        }
      }
    };
    xhr.open("POST", "src/highscore.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("roof=" + roof);
  }

  /**
   * Send a request to the DB to get the question and answers texts of the current MCQ
   * @param {string} prefix
   * @return {void}
   */
  static sendQuestionAnswersRequest(that, prefix) {
    const xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/QuestionAnswers.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        MCQInterface.myJsonQA = JSON.parse(response);
        that.nextQuestion();
      }
    };
    xhr.open("POST", "src/QuestionAnswers.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("room=" + prefix);
  }

  /**
   * Sends a request to the DB to insert the player's score in the DB
   * @return {void}
   */
  static sendInsertScoreRequest(that) {
    const xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/score.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.open("POST", "src/score.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log(
      that.player.pseudo + " " + that.player.score + " " + that.levelPrefix
    );
    xhr.send(
      "pseudo=" +
        that.player.pseudo +
        "&score=" +
        that.player.score +
        "&levelPrefix=" +
        that.levelPrefix
    );
  }
}
