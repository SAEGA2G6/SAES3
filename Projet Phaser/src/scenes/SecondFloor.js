class SecondFloor extends Floor {
  /**
   * Scene corresponding to the 2nd floor level.
   * @param {*} data Object containing data essential to the functioning of the level (player gender, player'nickname/pseudo).
   */
  init(data) {
    super.init(data);
    this.pos = { x: 160, y: 600 };

    this.nbRooms = 6;

    this.levelPrefix = "e2";
    this.map = "map2";
    this.imageMap = "e2img";
  }

  /** @returns {void} */
  editorCreate() {
    super.createTemplateFloor();
    this.createSecondFloor();
    this.player.setPosition(this.pos.x, this.pos.y);
    this.events.emit("scene-awake");
  }

  /** @returns {void} */
  createSecondFloor() {
    ///////////// PROF/BOSS /////////////

    const prof10 = new DialogObject(
      this,
      788,
      400,
      "prof10",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    const prof11 = new DialogObject(
      this,
      1870,
      200,
      "prof1",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    const prof12 = new DialogObject(
      this,
      1010,
      609,
      "prof9",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    const prof13 = new DialogObject(
      this,
      1232,
      580,
      "prof8",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    const prof14 = new DialogObject(
      this,
      1552,
      580,
      "prof11",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    const prof15 = new DialogObject(
      this,
      1872,
      580,
      "prof6",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    ///////////// DOORS /////////////

    const doorRoom2 = new Door(this, 1888, 417, "doubleporte", true);

    const doorRoom3 = new Door(this, 800, 545, "doubleporte", false);

    const doorRoom4 = new Door(this, 1120, 545, "doubleporte", false);

    const doorRoom5 = new Door(this, 1440, 545, "doubleporte", false);

    const doorRoom6 = new Door(this, 1760, 545, "doubleporte", false);

    ///////////// INDICES /////////////

    /////////////// BDE ////////////////

    const bde = new DialogObject(
      this,
      400,
      80,
      "bde",
      "Appuyer sur ESPACE pour intéragir avec le BDE",
      "e2_r0_1",
      "clue"
    );

    /////////////// ROOM 1 /////////////

    const binRoom1 = new DialogObject(
      this,
      620,
      400,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "e2_r1_1",
      "clue"
    );

    const papersRoom1 = new DialogObject(
      this,
      755,
      225,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e2_r1_2",
      "clue"
    );

    const eleveRoom1 = new DialogObject(
      this,
      656,
      108,
      "eleve3",
      "Appuyer sur ESPACE pour parler à l'élève",
      "e2_r1_3",
      "clue"
    );

    /////////////// ROOM 2 /////////////

    const pcOn1Room2 = new DialogObject(
      this,
      1743,
      238,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "e2_r2_1",
      "clue"
    );

    const papersRoom2 = new DialogObject(
      this,
      1840,
      310,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e2_r2_2",
      "clue"
    );

    const eleveRoom2 = new DialogObject(
      this,
      1872,
      45,
      "eleve2",
      "Appuyer sur ESPACE pour parler à l'élève",
      "e2_r2_3",
      "clue"
    );

    /////////////// ROOM 3 /////////////

    const binRoom3 = new DialogObject(
      this,
      750,
      590,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "e2_r3_3",
      "clue"
    );

    const papersRoom3 = new DialogObject(
      this,
      782,
      792,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e2_r3_2",
      "clue"
    );

    const papers2Room3 = new DialogObject(
      this,
      910,
      920,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e2_r3_2",
      "clue"
    );

    /////////////// ROOM 4 ////////////

    const eleveRoom4 = new DialogObject(
      this,
      1070,
      710,
      "eleve1",
      "Appuyer sur ESPACE pour parler à l'élève",
      "e2_r4_1",
      "clue"
    );

    const papersRoom4 = new DialogObject(
      this,
      1326,
      656,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e2_r4_2",
      "clue"
    );

    const papers2Room4 = new DialogObject(
      this,
      1298,
      920,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e2_r4_3",
      "clue"
    );

    /////////////// ROOM 5 /////////////

    const binRoom5 = new DialogObject(
      this,
      1390,
      590,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "e2_r5_1",
      "clue"
    );

    const papersRoom5 = new DialogObject(
      this,
      1522,
      796,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e2_r5_2",
      "clue"
    );

    const eleveRoom5 = new DialogObject(
      this,
      1390,
      710,
      "eleve2",
      "Appuyer sur ESPACE pour parler à l'élève",
      "e2_r5_3",
      "clue"
    );

    /////////////// ROOM 6 /////////////

    const papersRoom6 = new DialogObject(
      this,
      1965,
      930,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e2_r6_1",
      "clue"
    );

    const binRoom6 = new DialogObject(
      this,
      1710,
      590,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "e2_r6_2",
      "clue"
    );

    const eleveRoom6 = new DialogObject(
      this,
      1904,
      902,
      "eleve3",
      "Appuyer sur ESPACE pour parler à l'élève",
      "e2_r6_3",
      "clue"
    );

    const colliderList = [
      doorRoom2,
      doorRoom3,
      doorRoom4,
      doorRoom5,
      doorRoom6,
      prof10,
      prof11,
      prof12,
      prof13,
      prof14,
      prof15,
      binRoom1,
      eleveRoom1,
      eleveRoom2,
      binRoom3,
      eleveRoom4,
      binRoom5,
      eleveRoom5,
      binRoom6,
      eleveRoom6,
      bde,
    ];
    this.physics.add.collider(this.player, colliderList);
    this.listAllDoors = [
      [doorRoom2],
      [doorRoom3],
      [doorRoom4],
      [doorRoom5],
      [doorRoom6],
    ];
  }

  /** @returns {void} */
  create() {
    this.editorCreate();
  }
}
