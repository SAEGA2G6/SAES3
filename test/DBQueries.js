class DBQueries {
  constructor() {}

  static TEST_VALUES = {
    clues: [
      {
        CONTENUE: "Indice de test",
      },
    ],
    scores: [
      { ID_JOUEUR: "Joueur 1", SCORE: "100" },
      { ID_JOUEUR: "Joueur 2", SCORE: "50" },
    ],
    QA: [
      {
        Enoncer: "QUESTION 1",
        Reponse1: "reponse 1",
        Reponse2: "reponse 2",
        Reponse3: "reponse 3",
        BonneReponse: 1,
      },
      {
        Enoncer: "QUESTION 2",
        Reponse1: "reponse 1",
        Reponse2: "reponse 2",
        Reponse3: "reponse 3",
        Reponse4: "reponse 4",
        BonneReponse: 4,
      },
      {
        Enoncer: "QUESTION 3",
        Reponse1: "reponse 1",
        Reponse2: "reponse 2",
        Reponse3: "reponse 3",
        BonneReponse: 3,
      },
    ],
  };

  /**
   * query sent to retrieve the text of the clue
   * @return {void}
   */
  sendClueRequest(clueId, callback) {
    console.log("Récupération des indices");
    if (typeof callback === "function") {
      callback(JSON.stringify(DBQueries.TEST_VALUES.clues));
    }
  }

  /**
   * query sent to retrieve the scores from DB
   * @return {void}
   */

  sendScoresRequest(floor, callback) {
    console.log("Récupération des scores");
    if (typeof callback === "function") {
      callback(JSON.stringify(DBQueries.TEST_VALUES.scores));
    }
  }

  /**
   * Send a request to the DB to get the question and answers texts of the current MCQ
   * @param {string} prefix
   * @return {void}
   */
  sendQuestionAnswersRequest(prefix, callback) {
    console.log("Récupération des questions/réponses");
    if (typeof callback === "function") {
      callback(JSON.stringify(DBQueries.TEST_VALUES.QA));
    }
  }

  /**
   * Sends a request to the DB to insert the player's score in the DB
   * @return {void}
   */
  sendInsertScoreRequest(player, levelPrefix) {
    console.log("Score de " + player.pseudo + " à l'étage " + levelPrefix + " : " + player.score);
  }
}
