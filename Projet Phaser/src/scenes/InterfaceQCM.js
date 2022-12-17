// You can write more code here

/* START OF COMPILED CODE */

class InterfaceQCM extends Phaser.Scene {
  constructor() {
    super("InterfaceQCM");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */

    this.currentBoss;

    this.jsonQA =
      '[{ "question": "Q1","reponse1": "mauvaise réponse","reponse2": "mauvaise réponse","reponse3": "bonne réponse","reponse4": "mauvaise réponse", "correct": 3},' +
      '{ "question": "Q2","reponse1": "mauvaise réponse","reponse2": "bonne réponse","reponse3": "mauvaise réponse","reponse4": "mauvaise réponse", "correct" : 2},' +
      '{ "question": "Q3","reponse1": "mauvaise réponse","reponse2": "mauvaise réponse","reponse3": "mauvaise réponse","reponse4": "bonne réponse", "correct" : 4}]';

    //this.jsonQA = require('./assets/question/QA.json');
    this.myJsonQA = JSON.parse(this.jsonQA);
    this.currentQuestion = 0;
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
    //question.text =
    //  "2 : Quel est l’intrus parmi ces langages de programmation ?";
    question.text = this.myJsonQA[this.currentQuestion].question;
    question.setStyle({
      fontFamily: "roboto",
      fontSize: "25px",
      color: "white",
    });
    Phaser.Display.Align.In.TopCenter(question, this.back_interface);
    this.question = question;

    // Questions test
    /*
    const answer1 = new Answer(this, "A) Java", false);

    const answer2 = new Answer(this, "B) C++", false);

    const answer3 = new Answer(this, "C) Boa", true);

    const answer4 = new Answer(this, "D) Javascript", false);
    */

    // Questions test JSON

    const answer1 = new Answer(this);

    const answer2 = new Answer(this);

    const answer3 = new Answer(this);

    const answer4 = new Answer(this);

    /*Phaser.Display.Align.In.BottomLeft(answer1, this.back_interface);
    Phaser.Display.Align.In.BottomRight(answer2, this.back_interface);
    Phaser.Display.Align.In.BottomLeft(answer3, this.back_interface);
    Phaser.Display.Align.In.BottomRight(answer4, this.back_interface);
    
    answer1.y -= 120;
    answer2.y -= 120;

    answer3.y -= 30;
    answer4.y -= 30;*/

    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;

    Phaser.Display.Align.In.BottomLeft(this.answer1, this.back_interface);
    Phaser.Display.Align.In.BottomRight(this.answer2, this.back_interface);
    Phaser.Display.Align.In.BottomLeft(this.answer3, this.back_interface);
    Phaser.Display.Align.In.BottomRight(this.answer4, this.back_interface);
    
    this.answer1.y -= 120;
    this.answer2.y -= 120;

    this.answer3.y -= 30;
    this.answer4.y -= 30;

    this.answerList = [this.answer1, this.answer2, this.answer3, this.answer4];


    this.nextQuestion();

    this.emitter = new Phaser.Events.EventEmitter();
    this.emitter.on("right_answer", this.right_answer_handler, this);

    this.emitter.on("wrong_answer", this.wrong_answer_handler, this);

    /* END-USER-CTR-CODE */
    this.events.emit("scene-awake");
  }

  /* START-USER-CODE */

  // Write your code here

  Preload() {
    this.editorPreload();
  }

  create() {
    this.editorCreate();
  }

  update() {


    const KeyK = this.input.keyboard.addKey("k");
    const KeyESC = this.input.keyboard.addKey("esc");

    if (KeyK.isDown) {
      const scene_level = this.game.scene.getScene("Level");
      scene_level.emitter.emit("open_doors");
      this.scene.switch("Level");
    }
    if (KeyESC.isDown) {
      this.scene.switch("Level");
    }
  }

  nextQuestion() {
    this.resetRightAnswer();
    if (this.currentQuestion < this.myJsonQA.length) {
      console.log("changement question");

      this.question.text = this.myJsonQA[this.currentQuestion].question;
      this.answer1.text = this.myJsonQA[this.currentQuestion].reponse1;
      this.answer2.text = this.myJsonQA[this.currentQuestion].reponse2;
      this.answer3.text = this.myJsonQA[this.currentQuestion].reponse3;
      this.answer4.text = this.myJsonQA[this.currentQuestion].reponse4;

      this.answerList[this.myJsonQA[this.currentQuestion].correct - 1].isRight = true;
      
      this.currentQuestion++;
    }
    else {
      console.log("end of questions");
      this.currentQuestion = 0;
      this.currentBoss.isEnable = false;
      this.scene.switch("Level");
    }
  }



  right_answer_handler() {
    console.log("right");
    this.changeInteractivity();

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

  wrong_answer_handler() {
    console.log("wrong");
    this.changeInteractivity();
    const scene_level = this.game.scene.getScene("Level");
    const timedEvent = this.time.delayedCall(
      1000,
      () => {
        this.changeInteractivity(),
          this.resetAnswersColor(),
          this.currentQuestion = 0;
          this.nextQuestion();
          scene_level.emitter.emit("time_malus"),
          this.scene.switch("Level");
      },
      [],
      this
    );
  }
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

  changeInteractivity() {
    if (this.areInteractives() === true) {
      this.answer1.disableInteractive();
      this.answer2.disableInteractive();
      this.answer3.disableInteractive();
      this.answer4.disableInteractive();
      console.log("disable");
    } else {
      this.answer1.setInteractive();
      this.answer2.setInteractive();
      this.answer3.setInteractive();
      this.answer4.setInteractive();
      console.log("enable");
    }
  }

  resetAnswersColor() {
    this.answer1.setStyle({ fill: "white" });
    this.answer2.setStyle({ fill: "white" });
    this.answer3.setStyle({ fill: "white" });
    this.answer4.setStyle({ fill: "white" });
  }

  resetRightAnswer() {
    this.answer1.isRight = false;
    this.answer2.isRight = false;
    this.answer3.isRight = false;
    this.answer4.isRight = false;
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
