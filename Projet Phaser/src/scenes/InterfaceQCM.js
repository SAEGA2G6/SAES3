// You can write more code here

/* START OF COMPILED CODE */

class InterfaceQCM extends Phaser.Scene {
  constructor() {
    super("InterfaceQCM");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /** @returns {void} */
  editorPreload() {
    this.load.text('QA','questions_and_answers.json');
  }

  /** @returns {void} */
  editorCreate() {
    // fichier json contenant les questions et réponses
    const QA = JSON.parse(this.game.cache.getText('QA'));
    console.log(QA);

    // Fond sur lequel seront affiché les questions
    const back_interface = this.add.image(0, 0, "interfaceQCM").setDepth(5);
    Phaser.Display.Align.In.Center(
      back_interface,
      this.add.zone(400, 300, 800, 600)
    );
    back_interface.setScale(2);
    this.back_interface = back_interface;

    // Question
    const question = this.add.text(0, 0, "", {}).setDepth(5);
    question.setOrigin(0.5, 0.5);
    /*question.text =
      "2 : Quel est l’intrus parmi ces langages de programmation ?";*/
    question.text = QA.QCM1.question1;
    question.setStyle({
      fontFamily: "roboto",
      fontSize: "25px",
      color: "white",
    });
    Phaser.Display.Align.In.TopCenter(question, this.back_interface);
    this.question = question;

    const returned_message = this.add.text(0, 0, "", {}).setDepth(5);
    returned_message.setOrigin(0.5, 0.5);
    returned_message.setStyle({
      fontFamily: "roboto",
      fontSize: "25px",
    });
    returned_message.visible = false;
    Phaser.Display.Align.In.Center(returned_message, this.back_interface);
    this.returned_message = returned_message;

    const answer1 = new Answer(this, "A) Java", false);

    const answer2 = new Answer(this, "B) C++", false);

    const answer3 = new Answer(this, "C) Boa", true);

    const answer4 = new Answer(this, "D) Javascript", false);

    Phaser.Display.Align.In.BottomLeft(answer1, this.back_interface);
    Phaser.Display.Align.In.BottomRight(answer2, this.back_interface);
    Phaser.Display.Align.In.BottomLeft(answer3, this.back_interface);
    Phaser.Display.Align.In.BottomRight(answer4, this.back_interface);

    answer1.y -= 120;
    answer2.y -= 120;

    answer3.y -= 30;
    answer4.y -= 30;

    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;

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
    this.question;
    this.answer1;
    this.answer2;
    this.answer3;
    this.answer4;
  }

  right_answer_handler() {
    console.log("right");
    this.changeInteractivity();
    this.returned_message.visible = true;
    this.returned_message.text = "Bonne réponse !";
    this.returned_message.setStyle({ color: "green" });

    const timedEvent = this.time.delayedCall(
      1000,
      () => (
        this.changeInteractivity(), (this.returned_message.visible = false)
      ),
      [],
      this
    );
  }

  wrong_answer_handler() {
    console.log("wrong");
    this.changeInteractivity();
    this.returned_message.visible = true;
    this.returned_message.text = "Mauvaise réponse !";
    this.returned_message.setStyle({ color: "red" });
    const timedEvent = this.time.delayedCall(
      1000,
      () => {
        this.changeInteractivity(),
          (this.returned_message.visible = false),
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
  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
