/**
 * Class allowing to get the necessary information for the functioning of the game (MCQs, clues, etc...) but also to send some (score of the player)
 */
class DBQueries {
  constructor() {}
  /**
   * query sent to retrieve the text of the clue
   * @return {void}
   */
  sendClueRequest(clueId, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "src/requetes.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("clueID=" + clueId);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (typeof callback === "function") {
          var resp = xhr.responseText;
          callback(resp);
        }
      }
    };
  }

  /**
   * query sent to retrieve the scores from DB
   * @return {void}
   */

  sendScoresRequest(floor, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "src/requetes.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("floor=" + floor);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (typeof callback === "function") {
          var resp = xhr.responseText;
          callback(resp);
        }
      }
    };
  }

  /**
   * Send a request to the DB to get the question and answers texts of the current MCQ
   * @param {string} prefix
   * @return {void}
   */
  sendQuestionAnswersRequest(prefix, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "src/requetes.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("room=" + prefix);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        if (typeof callback === "function") {
          var resp = xhr.responseText;
          callback(resp);
        }
      }
    };
  }

  /**
   * Sends a request to the DB to insert the player's score in the DB
   * @return {void}
   */
  sendInsertScoreRequest(player, levelPrefix) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "src/requetes.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(
      "pseudo=" +
        player.pseudo +
        "&score=" +
        player.score +
        "&levelPrefix=" +
        levelPrefix
    );
  }
}
