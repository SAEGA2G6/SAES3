class DBQueries {
  /**
   * query sent to retrieve the text of the clue
   * @return {void}
   */
  static sendClueRequest(that) {
    var xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Traitez la réponse ici
        var response = xhr.responseText;
        const MyJsonClue = JSON.parse(response);
        console.log(response);
        that.clue_text.text = MyJsonClue[0].CONTENUE;
      }
    };
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(
      "query=SELECT * FROM INDICE WHERE ID_INDICE = '" + that.clueId + "'"
    );
  }

  /**
   * query sent to retrieve the scores from DB
   * @return {void}
   */
  static sendScoresRequest(that) {
    var xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Traitez la réponse ici
        var response = xhr.responseText;
        const myJsonScores = JSON.parse(response);
        console.log(response);
        console.log(myJsonScores);
        for (let index = 0; index < myJsonScores.length; index++) {
          if (index == 0) {
            that.highscore_text.text +=
              "1ER  " +
              myJsonScores[index].ID_JOUEUR +
              "   " +
              myJsonScores[index].SCORE +
              " sec";
          } else {
            var place = index + 1;
            that.highscore_text.text +=
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
    };
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("query=SELECT * FROM SCORE ORDER BY score");
  }

  /**
   * query sent to the DB to get the lowest highscore
   * @return {void}
   */
  static sendMinScoreRequest(that) {
    var xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Traitez la réponse ici
        var response = xhr.responseText;
        const myJsonMinScore = JSON.parse(response);
        console.log(response);
        console.log(myJsonScores);
        DBQueries.minScore = myJsonMinScore[0].SCORE;
      }
    };
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("query=SELECT MAX(SCORE) FROM SCORE");
  }

  /**
   * query sent to the DB to get the lowest highscore
   * @return {void}
   */
  static sendScoreRowNbRequest(that) {
    var xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Traitez la réponse ici
        var response = xhr.responseText;
        const myJsonMinScore = JSON.parse(response);
        console.log(response);
        console.log(myJsonScores);
        DBQueries.minScore = myJsonMinScore[0].SCORE;
      }
    };
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("query=SELECT MAX(SCORE) FROM SCORE");
  }

  /**
   * Send a request to the DB to get the question and answers texts of the current MCQ
   * @param {string} prefix
   * @return {void}
   */
  static sendQuestionAnswersRequest(that, prefix) {
    var xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log("prefixe: " + prefix);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Traitez la réponse ici
        var response = xhr.responseText;
        console.log(response);
        InterfaceQCM.myJsonQA = JSON.parse(response);
        console.log(InterfaceQCM.myJsonQA[0].Enoncer);
        console.log(InterfaceQCM.myJsonQA[0].Reponse1);
        console.log(InterfaceQCM.myJsonQA[0].Reponse2);
        console.log(InterfaceQCM.myJsonQA[0].Reponse3);
        console.log(InterfaceQCM.myJsonQA[0].Reponse4);
        console.log(
          "--------------juste avant nextQuestion DBQUERIES--------------"
        );
        that.nextQuestion();
      }
    };
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("query=SELECT * FROM QUESTION where SALLE = '" + prefix + "'");
  }

  /**
   * Sends a request to the DB to insert the player's score in the DB
   * @return {void}
   */
  static sendInsertScoreRequest(that) {
    var xhr = new XMLHttpRequest();
    DBQueries.xhr = xhr;
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Traitez la réponse ici
        console.log("ajout du score dans la bd");
        var response = xhr.responseText;
      }
    };
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(
      "query=INSERT INTO SCORE VALUES ('" +
        that.player.pseudo +
        "'," +
        that.player.score +
        ", '" +
        that.levelPrefix +
        "')"
    );
  }
}
