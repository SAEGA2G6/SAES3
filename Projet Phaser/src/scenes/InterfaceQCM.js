class InterfaceQCM extends Phaser.Scene {
  constructor() {
    super("InterfaceQCM");

    //Boss of the current room
    this.currentBoss;

    //Request DB
    this.xhr;

    this.jsonQA;
    this.myJsonQA;
    this.currentQuestionNb = 0;
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    // Fond sur lequel seront affichées les questions
    const back_interface = this.add.image(0, 0, "interfaceQCM").setDepth(5);

    Phaser.Display.Align.In.Center(
      back_interface,
      this.add.zone(400, 300, 800, 600)
    );
    back_interface.setScale(2);
    back_interface.setOrigin(0.5, 0.5);
    this.back_interface = back_interface;

    // Question
    const question = this.add.text(0, 0, "", {}).setDepth(5);
    question.setOrigin(0.5, 0.5);
    question.setStyle({
      fontFamily: "roboto",
      fontSize: "25px",
      color: "white",
      wordWrap: { width: 400 },
    });
    Phaser.Display.Align.In.TopCenter(question, this.back_interface);
    question.y -= 80;
    this.question = question;

    // Questions test JSON

    const answer1 = new Answer(this);

    const answer2 = new Answer(this);

    const answer3 = new Answer(this);

    const answer4 = new Answer(this);

    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;

    Phaser.Display.Align.In.BottomLeft(this.answer1, this.back_interface);
    Phaser.Display.Align.In.BottomLeft(this.answer2, this.back_interface);
    Phaser.Display.Align.In.BottomLeft(this.answer3, this.back_interface);
    Phaser.Display.Align.In.BottomLeft(this.answer4, this.back_interface);

    this.answer1.y -= 250;
    this.answer2.y = this.answer1.y + 90;
    this.answer3.y = this.answer2.y + 90;
    this.answer4.y = this.answer3.y + 90;

    this.answerList = [this.answer1, this.answer2, this.answer3, this.answer4];

    //Prefix correspond to the actual floor (rc_, e1_, e2_) + the actual room number (1,2,3,4...)
    var prefix =
      this.currentBoss.scene.levelPrefix +
      "_r" +
      this.currentBoss.scene.currentNbRoom;
    //Request send to the DB to get the questions and answers that correspond to the actual boss
    DBQueries.sendQuestionAnswersRequest(this, prefix);

    //Creation of the events about the right and wrong answers
    this.emitter = new Phaser.Events.EventEmitter();
    this.emitter.on("right_answer", this.right_answer_handler, this);
    this.emitter.on("wrong_answer", this.wrong_answer_handler, this);

    this.events.emit("scene-awake");
  }

  Preload() {
    this.editorPreload();
  }

  create() {
    this.editorCreate();
  }

  update() {
    const KeyK = this.input.keyboard.addKey("k");
    const KeyESC = this.input.keyboard.addKey("esc");

    // TODO: RETIRER AVANT LA FIN DU PROJET
    if (KeyK.isDown) {
      const scene_level = this.game.scene.getScene("Level");
      scene_level.emitter.emit("open_doors");
      this.scene.switch("Level");
    }
    if (KeyESC.isDown) {
      this.scene.switch("Level");
    }
  }

  /**
   * Goes to next question
   * @return {void}
   */
  nextQuestion() {
    this.myJsonQA = InterfaceQCM.myJsonQA;

    this.resetRightAnswer();
    if (this.currentQuestionNb < this.myJsonQA.length) {
      console.log("question n°" + this.currentQuestionNb);

      //the question and answers are assigned to the respective texts that will be displayed
      this.question.text = this.myJsonQA[this.currentQuestionNb].Enoncer;
      this.answer1.text = this.myJsonQA[this.currentQuestionNb].Reponse1;
      this.answer2.text = this.myJsonQA[this.currentQuestionNb].Reponse2;
      this.answer3.text = this.myJsonQA[this.currentQuestionNb].Reponse3;
      this.answer4.text = this.myJsonQA[this.currentQuestionNb].Reponse4;

      //the property of the correct answer is changed so that it is considered correct
      this.answerList[
        this.myJsonQA[this.currentQuestionNb].BonneReponse - 1
      ].isRight = true;

      //the question number is incremented for the next
      this.currentQuestionNb++;
    } else {
      console.log(
        "end of questions: the player has answered the MCQ correctly"
      );
      //TODO: voir si utile ou non
      this.currentQuestionNb = 0;

      //the player is prevented from interacting with this boss again
      this.currentBoss.isEnable = false;

      //the doors to the next room open
      const scene_level = this.game.scene.getScene("Level");
      scene_level.emitter.emit("open_doors");

      //we go back to the game scene
      this.scene.switch("Level");

      //we stop this scene which is then reset
      this.scene.stop();
    }
  }

  /**
   * Is triggered when an answer is correct
   * @return {void}
   */
  right_answer_handler() {
    console.log("right answer");

    //the player is momentarily prevented from interacting with the answers
    this.changeInteractivity();

    //wait a second before moving on to the next question
    const timedEvent = this.time.delayedCall(
      1000,
      () => (
        this.changeInteractivity(),
        this.resetAnswersColor(),
        this.nextQuestion()
      ),
      [],
      this
    );
  }

  /**
   * Is triggered when an answer is wrong
   * @return {void}
   */
  wrong_answer_handler() {
    console.log("wrong answer");

    //the player is momentarily prevented from interacting with the answers
    this.changeInteractivity();
    const scene_level = this.game.scene.getScene("Level");

    //wait a second before returning to the game scene
    const timedEvent = this.time.delayedCall(
      1000,
      () => {
        this.changeInteractivity(),
          this.resetAnswersColor(),
          (this.currentQuestionNb = 0);
        this.nextQuestion();
        scene_level.emitter.emit("time_malus"), this.scene.switch("Level");
      },
      [],
      this
    );
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
      console.log("answers interactivity disable");
    } else {
      this.answer1.setInteractive();
      this.answer2.setInteractive();
      this.answer3.setInteractive();
      this.answer4.setInteractive();
      console.log("answers interactivity enable");
    }
  }

  /**
   * Reset the color of the answers (to white)
   * @return {void}
   */
  resetAnswersColor() {
    this.answer1.setStyle({ fill: "white" });
    this.answer2.setStyle({ fill: "white" });
    this.answer3.setStyle({ fill: "white" });
    this.answer4.setStyle({ fill: "white" });
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
}
