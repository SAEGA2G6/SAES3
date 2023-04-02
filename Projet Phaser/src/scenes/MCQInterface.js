/**
 * Class representing the scene where the question and answers are displayed
 */
class MCQInterface extends Phaser.Scene {
  /**
   * Scene that displays the MCQ.
   * @param {*} data Object containing data essential to the functioning of the MCQ (current scene).
   */
  init(data) {
    this.currentScene = data.currentScene;

    /// Boss of the current room ///
    this.currentBoss;

    this.QAjson;
    this.currentQuestionNb;

    this.txtcolor = "black";

    this.repo = new DBQueries();
  }

  /** @returns {void} */
  editorCreate() {
    this.currentScene.player.stopSpeed();
    this.currentQuestionNb = 0;
    // Fond sur lequel seront affichées les questions //
    const backInterface = this.add
      .image(0, 0, "interfaceQCM")
      .setDepth(5)
      .setScale(0.97)
      .setOrigin(0.5, 0.5);
    ////////////////////////////////

    Phaser.Display.Align.In.Center(
      backInterface,
      this.add.zone(400, 300, 800, 600)
    );

    backInterface.y += 59;
    this.backInterface = backInterface;

    // Question
    const question = this.add
      .text(0, 0, "", {})
      .setDepth(5)
      .setOrigin(0.5, 0)
      .setStyle({
        fontFamily: "comforta",
        fontSize: "25px",
        color: this.txtcolor,
        align: "center",
        wordWrap: { width: 600 },
      });
    Phaser.Display.Align.In.TopCenter(question, this.backInterface);
    question.y += 30;
    this.question = question;

    const answer1 = new Answer(this);
    this.answer1 = answer1;

    const answer2 = new Answer(this);
    this.answer2 = answer2;

    const answer3 = new Answer(this);
    this.answer3 = answer3;

    const answer4 = new Answer(this);
    this.answer4 = answer4;

    /// all answers are placed at the same coordinates at the beginning ///
    Phaser.Display.Align.In.BottomLeft(this.answer1, this.backInterface);
    Phaser.Display.Align.In.BottomLeft(this.answer2, this.backInterface);
    Phaser.Display.Align.In.BottomLeft(this.answer3, this.backInterface);
    Phaser.Display.Align.In.BottomLeft(this.answer4, this.backInterface);

    /// the coordinates of each answer are adjusted ///
    this.answer1.y -= 230;
    answer1.x += 140;
    this.answer2.y = this.answer1.y + 60;
    answer2.x += 140;
    this.answer3.y = this.answer2.y + 60;
    answer3.x += 140;
    this.answer4.y = this.answer3.y + 60;
    answer4.x += 140;

    this.answerList = [this.answer1, this.answer2, this.answer3, this.answer4];

    /// Prefix that corresponds to the actual floor (rc_, e1_, e2_) + the actual room number (1,2,3,4...) ///
    const prefix =
      this.currentBoss.scene.levelPrefix +
      "_r" +
      this.currentBoss.scene.currentRoomNumber;

    /// Request send to the DB to get the questions and answers that correspond to the actual boss/mcq ///
    this.repo.getQuestionAnswersJSON(prefix, (response) => {
      const parsedResponse = JSON.parse(response);
      this.QAjson = parsedResponse;
      this.nextQuestion();
    });

    /// Creation of the events about the right and wrong answers ///
    this.emitter = new Phaser.Events.EventEmitter();
    this.emitter.on("rightAnswer", this.rightAnswerHandler, this);
    this.emitter.on("wrongAnswer", this.wrongAnswerHandler, this);

    const KeyK = this.input.keyboard.addKey("k");
    this.KeyK = KeyK;
    const KeyESC = this.input.keyboard.addKey("esc");
    this.KeyESC = KeyESC;

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  createQA() {
    /// the question and answers are assigned to the respective texts that will be displayed ///
    this.question.text = this.QAjson[this.currentQuestionNb].Enonce;
    this.answer1.text = this.QAjson[this.currentQuestionNb].Reponse1;
    this.answer2.text = this.QAjson[this.currentQuestionNb].Reponse2;
    this.answer3.text = this.QAjson[this.currentQuestionNb].Reponse3;
    this.answer4.text = this.QAjson[this.currentQuestionNb].Reponse4;

    /// the property of the correct answer is changed so that it is considered correct ///
    this.answerList[
      this.QAjson[this.currentQuestionNb].BonneReponse - 1
    ].isRight = true;
  }

  /**
   * Goes to next question
   * @return {void}
   */
  nextQuestion() {
    //this.myJsonQA = MCQInterface.myJsonQA;

    this.resetRightAnswer();
    if (this.currentQuestionNb < this.QAjson.length) {
      this.createQA(this.QAjson);
      /// the question number is incremented for the next ///
      this.currentQuestionNb++;
    } else {
      /// the player is prevented from interacting with this boss again ///
      this.currentBoss.disable(true);

      /// the doors to the next room open ///
      const sceneLevel = this.game.scene.getScene(this.currentScene);
      sceneLevel.emitter.emit("openDoors");

      this.exitMCQ();
    }
  }

  /**
   * Is triggered when an answer is correct
   * @return {void}
   */
  rightAnswerHandler() {
    /// the player is momentarily prevented from interacting with the answers ///
    this.changeInteractivity();

    /// wait a second before moving on to the next question ///
    const timedEvent = this.time.delayedCall(
      1000,
      () => (
        this.changeInteractivity(),
        this.resetAnswersColor(),
        this.nextQuestion()
      )
    );
  }

  /**
   * Is triggered when an answer is wrong
   * @return {void}
   */
  wrongAnswerHandler() {
    /// the player is momentarily prevented from interacting with the answers ///
    this.changeInteractivity();
    const sceneLevel = this.game.scene.getScene(this.currentScene);

    /// wait a second before returning to the game scene ///
    const timedEvent = this.time.delayedCall(1000, () => {
      this.currentBoss.disable(false);
      sceneLevel.emitter.emit("timeMalus"), this.exitMCQ();
    });
  }

  /**
   * Check if the player can interact with the answers or not
   * @return {boolean} true if the player can interact with the answers and false otherwise
   */
  areInteractives() {
    if (
      this.answer1.input.enabled &&
      this.answer2.input.enabled &&
      this.answer3.input.enabled &&
      this.answer4.input.enabled
    ) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Change the interactivity of the answers (disable if interactive, enable if non-interactive)
   * @return {void}
   */
  changeInteractivity() {
    if (this.areInteractives() === true) {
      this.answer1.disableInteractive();
      this.answer2.disableInteractive();
      this.answer3.disableInteractive();
      this.answer4.disableInteractive();
    } else {
      this.answer1.setInteractive();
      this.answer2.setInteractive();
      this.answer3.setInteractive();
      this.answer4.setInteractive();
    }
  }

  /**
   * Reset the color of the answers (to white)
   * @return {void}
   */
  resetAnswersColor() {
    this.answer1.setStyle({ fill: this.txtcolor });
    this.answer2.setStyle({ fill: this.txtcolor });
    this.answer3.setStyle({ fill: this.txtcolor });
    this.answer4.setStyle({ fill: this.txtcolor });
  }

  /**
   * Reset all answers as false
   * @return {void}
   */
  resetRightAnswer() {
    this.answer1.isRight = false;
    this.answer2.isRight = false;
    this.answer3.isRight = false;
    this.answer4.isRight = false;
  }

  /**
   * Close the MCQ.
   * @return {void}
   */
  exitMCQ() {
    this.currentScene.player.resetSpeed();
    /// we stop this scene which is then reset ///
    this.scene.stop();
  }

  /**
   * Update the clue (to detect when the player wants to close the clue).
   * @return {void}
   */
  update() {
    if (this.KeyESC.isDown) {
      this.currentBoss.disable(false);
      this.exitMCQ();
    }
  }
}
