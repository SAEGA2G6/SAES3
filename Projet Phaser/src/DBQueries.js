class DBQueries {
  /**
   * query sent to retrieve the text of the clue
   * @return {void}
   */
  static sendClueRequest(that) {
    const xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/requetes.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        const MyJsonClue = JSON.parse(response);
        that.clueText.text = MyJsonClue[0].CONTENUE;
      }
    };
    xhr.open("POST", "src/requetes.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("clueID=" + that.clueId);
  }

  /**
   * query sent to retrieve the scores from DB
   * @return {void}
   */
  
  static sendScoresRequest(that, floor, callback) {
    //that.textHighscore.text = "";

    const xhr = new XMLHttpRequest();

    DBQueries.xhr = xhr;

    xhr.open("POST", "src/requetes.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if(typeof callback === "function"){
          var resp = JSON.parse(xhr.responseText)
          callback(that, resp);
        }
      }
    };
    xhr.send("floor=" + floor);
  }

  /**
   * Send a request to the DB to get the question and answers texts of the current MCQ
   * @param {string} prefix
   * @return {void}
   */
  static sendQuestionAnswersRequest(that, prefix) {
    const xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/requetes.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = xhr.responseText;
        MCQInterface.myJsonQA = JSON.parse(response);
        that.nextQuestion();
      }
    };
    xhr.send("room=" + prefix);
  }

  /**
   * Sends a request to the DB to insert the player's score in the DB
   * @return {void}
   */
  static sendInsertScoreRequest(that) {
    const xhr = new XMLHttpRequest();

    DBQueries.xhr = xhr;

    xhr.open("POST", "src/requetes.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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
