class Presentation extends Phaser.Scene {
  /**
   * Scene that displays the presentation, the context of the game.
   * @param {*} data Object containing data essential to the functioning of the game.
   */
  init(data) {
    this.data = data;
  }

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorPreload() {}

  /** @returns {void} */
  editorCreate() {
    const introTab = [
      "Bonjour, je m'appelle Mr Povrhr !",
      "Bienvenue sur notre jeu vidéo, Aix’ploration !\nCe jeu a été développé pour un projet (SAE) de 2ème année.",
      "L’objectif de ce jeu est de faire découvrir aux étudiants les différents débouchés professionnels disponibles à la sortie du BUT Informatique.",
      "Il sert aussi à découvrir les matières et les parcours disponibles durant cette période d’études, tout en ayant une immersion, la plus réaliste possible, au sein de notre IUT.",
      "Hé oui ! Nous avons modélisé notre IUT en 2D pour pouvoir se déplacer dedans dans le jeu !\nPour se déplacer, il vous faudra utiliser les flèches directionnelles.",
      "Tu peux aussi utiliser <Espace> pour interagir avec les objets et les personnages (et <Echap> pour fermer les interfaces).",
      "Il y a aussi possibilité d'ouvrir le plan de l'étage en appuyant sur <M>",
      "Chaque salle portera sur un sujet précis, et sera composée d'indices disséminés un peu partout dans la salle et d’un personnage bien visible qui vous posera des questions. Les indices sont indispensables pour répondre à ces questions.",
      "Ah, au fait ! Votre performance sera chronométrée et chaque mauvaise réponse augmentera votre temps à la fin de la partie. Si votre temps à la fin de la partie figure parmis les 10 plus bas, alors il sera affiché dans la partie “Highscore” dans l’écran d’accueil.",
    ];
    const introTabResponse = [
      "[Bonjour !]",
      "[Whoo trop stylé !]",
      "[C'est tout ?]",
      "[Au sein de l'IUT ?]",
      "[OK !]",
      "[OK j'ai compris.]",
      "[C'est très pratique, j'avais justement peur de me perdre]",
      "[Oki oki !]",
      "[Parfait ! Merci pour tout !]",
    ];

    this.introTab = introTab;
    var introIterator = 0;
    this.introIterator = introIterator;

    this.introTabResponse = introTabResponse;

    const msgIntro = this.add
      .text(400, 100, "INTRODUCTION", {})
      .setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      });

    const introText = this.add
      .text(100, 150, "", {})
      .setDepth(5)
      .setOrigin(0)
      .setStyle({
        fontFamily: "spacemono-regular",
        fontSize: "15px",
        color: "WHITE",
        wordWrap: { width: 600 },
      });
    this.introText = introText;

    const arrow = this.add
      .image(700, 100, "arrow_back")
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.introIterator = this.introTab.length - 1;
        this.nextText();
      });
    arrow.angle = 180;
    this.arrow = arrow;

    const skipText = this.add.text(700, 125, "", {});
    skipText.setOrigin(0.5, 0.5);
    skipText.text = "Tout passer";
    skipText.setStyle({
      fontFamily: "spacemono-regular",
      fontSize: "15px",
      color: "WHITE",
      wordWrap: { width: 600 },
    });

    const introTextResponse = this.add.text(400, 250, "", {});
    introTextResponse.setOrigin(0.5, 0.5);
    introTextResponse.text = "START";
    introTextResponse.setStyle({
      fontFamily: "spacemono-regular",
      fontSize: "15px",
      color: "WHITE",
      wordWrap: { width: 600 },
    });
    introTextResponse
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => introTextResponse.setStyle({ fill: "GRAY" }))
      .on("pointerout", () => introTextResponse.setStyle({ fill: "WHITE" }))
      .on("pointerdown", () => {
        this.nextText();
      });
    this.introTextResponse = introTextResponse;

    const textStart = this.add.text(400, 500, "", {});
    textStart.setOrigin(0.5, 0.5);
    textStart.text = "START";
    textStart.setStyle({
      fontFamily: "retro-computer",
      fontSize: "60px",
      color: "white",
    });
    this.textStart = textStart;
    this.textStart.visible = false;

    /// START GAME AND HIGHSCORE ///
    new TextColor(textStart, "Floor", this.data);
    this.nextText();

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }

  /**
   * Displays the following presentation text.
   * @return {void}
   */
  nextText() {
    if (this.introIterator + 1 < this.introTab.length) {
      this.introText.text = this.introTab[this.introIterator];
      this.introTextResponse.text = this.introTabResponse[this.introIterator];
      this.introIterator++;
    } else {
      this.introText.text = this.introTab[this.introIterator];
      this.introTextResponse.text = this.introTabResponse[this.introIterator];
      this.textStart.visible = true;
    }
  }
}
