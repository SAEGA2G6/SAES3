class DBQueries {
  /**
   * query sent to retrieve the text of the clue
   * @return {void}
   */
  static sendClueRequest(that) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Traitez la réponse ici
        console.log("on est dans la requete");
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
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Traitez la réponse ici
        console.log("on est dans la requete");
        var response = xhr.responseText;
        const myJsonScores = JSON.parse(response);
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

  /**
   * Send a request to the DB to get the question and answers texts of the current MCQ
   * @param {string} prefix
   * @return {void}
   */
  static sendQuestionAnswersRequest(that, prefix) {
    console.log("request");

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "src/mysql.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log("prefixe: " + prefix);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Traitez la réponse ici
        console.log("on est dans la requete");
        var response = xhr.responseText;
        console.log(response);
        InterfaceQCM.myJsonQA = JSON.parse(response);
        console.log(InterfaceQCM.myJsonQA[0].Enoncer);
        console.log(InterfaceQCM.myJsonQA[0].Reponse1);
        console.log(InterfaceQCM.myJsonQA[0].Reponse2);
        console.log(InterfaceQCM.myJsonQA[0].Reponse3);
        console.log(InterfaceQCM.myJsonQA[0].Reponse4);
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
      "query=INSERT INTO SCORE VALUES ('DANNATHOR'," +
        that.player.score +
        ", '" +
        that.levelPrefix +
        "')"
    );
    console.log(
      "query=INSERT INTO SCORE VALUES ('DANNATHOR'," +
        that.player.score +
        ", '" +
        that.levelPrefix +
        "')"
    );
  }
}
