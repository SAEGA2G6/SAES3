class Presentation extends Phaser.Scene {
    init(data) {
      this.data = data;
    }
  
    /** @returns {void} */
    editorPreload() {}
  
    /** @returns {void} */
    editorCreate() {
      const introTab = 
      [
        "Bonjour et bienvenue surs notre jeu vidéo, Aix’ploration, développé pour la SAE de 2ème année.\nL’objectif de ce jeu est de faire découvrir aux étudiants les différentes débouchées professionnelles disponibles à la sortie du BUT Informatique, mais aussi les matières et les parcours disponibles durant cette période d’étude, tout en ayant une immersion, la plus réaliste possible, au sein de notre IUT.\nPour se déplacer, il vous faudra utiliser les flèches directionnelles, et utiliser espace pour interagir avec les objets ou PNJ (échap pour fermer les interfaces).\nChaque salle portera sur un sujet précis, et sera composée d''indices disséminés un peu partout dans la salle et d’un PNJ bien visible qui vous posera des questions. Les indices sont indispensables pour répondre à celles-ci.\nVotre performance sera chronométrée et chaque mauvaise réponse augmentera votre temps à la fin de la partie. Si votre résultat figure parmi les 10 meilleurs, alors il sera affiché dans la partie “Highscore” dans l’écran d’accueil.\n",
       "Le BUT Informatique est un diplôme national dont l’objectif est de former des informaticiens généralistes.\nCeux-ci participent à la réalisation , la conception et la mise en oeuvre de solutions informatiques diverses et variées.\nLes informaticiens issus de cette formation possèdent des compétences à la fois théoriques et pratiques leur permettant d’envisager une insertion professionnelle immédiate ou une poursuite d’études.\nLes cours seront dispensés en 3 volets distincts : les CM (cours magistraux se déroulant dans les amphis), les TD (se déroulant en salle de classe ou salle machine) et les TP (se déroulant en demi-groupe, principalement en salle machine)."
      ]
      this.introTab = introTab;
      var introIterator = 0;
      this.introIterator = introIterator;

      const msgIntro = this.add.text(400, 100, "INTRODUCTION", {}).setDepth(5)
      .setOrigin(0.5)
      .setStyle({
        fontFamily: "retro-computer",
        fontSize: "40px",
        color: "WHITE",
      });
      
      const introText = this.add.text(100, 150, "", {}).setDepth(5)
      .setOrigin(0)
      .setStyle({
        fontFamily: "spacemono-regular",
        fontSize: "15px",
        color: "WHITE",
        wordWrap: { width: 600 },
      });
      this.introText = introText;

      const arrow = this.add.image(750, 300, "arrow_back")
      .setInteractive({ useHandCursor: true }).on("pointerdown", () => {
        this.nextText();
      });
      this.arrow = arrow;

      const textStart = this.add.text(400, 500, "", {});
      textStart.setOrigin(0.5, 0.5);
      textStart.text = "START";
      textStart.setStyle({
        fontFamily: "retro-computer",
        fontSize: "60px",
        color: "white",
      });
      this.textStart = textStart;
  
      // START GAME AND HIGHSCORE 
      new TextColor(textStart, this.data.chosenLevel, this.data);
      this.nextText();

      this.events.emit("scene-awake");
    }
  
    create() {
      this.editorCreate();
    }

    nextText() {
      if(this.introIterator + 1 < this.introTab.length) {
        this.arrow.angle = 180;
        this.arrow.x = 750;
        this.introText.text = this.introTab[this.introIterator];
        this.introIterator++;
      }
      else {
        this.arrow.x = 50;
        this.arrow.angle = 0;
        this.introText.text = this.introTab[this.introIterator];
        this.introIterator = 0;
      }
    }
  }
  