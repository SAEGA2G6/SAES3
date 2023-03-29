class FirstFloor extends Floor {
  /**
   * Scene corresponding to the 1st floor level.
   * @param {*} data Object containing data essential to the functioning of the level (player gender, player'nickname/pseudo).
   */
  init(data) {
    super.init(data);
    this.pos = { x: 160, y: 600 };

    this.nbRooms = 5;
    console.log("niveau:" + data.chosenLevel);
    this.levelPrefix = "e1";
    this.map = "map1";
    this.imageMap = "e1img";
  }

  /** @returns {void} */
  editorCreate() {
    super.createTemplateFloor();
    this.createFirstFloor();
    this.player.setPosition(this.pos.x, this.pos.y);
    this.events.emit("scene-awake");
  }

  /** @returns {void} */
  createFirstFloor() {
    ///////////// PROF/BOSS /////////////

    const prof5 = new DialogObject(
      this,
      660,
      240,
      "prof5",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    const prof6 = new DialogObject(
      this,
      1472,
      580,
      "prof6",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    const prof7 = new DialogObject(
      this,
      1120,
      580,
      "prof7",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    const prof8 = new DialogObject(
      this,
      1824,
      580,
      "prof8",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    const prof9 = new DialogObject(
      this,
      1900,
      250,
      "prof9",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    ///////////// DOORS /////////////

    const doorRoom2_1 = new Door(this, 1504, 417, "doubleporte", true);
    const doorRoom2_2 = new Door(this, 1888, 417, "doubleporte", true);

    const doorRoom3_1 = new Door(this, 1024, 545, "doubleporte", false);
    const doorRoom3_2 = new Door(this, 1216, 545, "doubleporte", false);

    const doorRoom4_1 = new Door(this, 1376, 545, "doubleporte", false);
    const doorRoom4_2 = new Door(this, 1568, 545, "doubleporte", false);

    const doorRoom5_1 = new Door(this, 1728, 545, "doubleporte", false);
    const doorRoom5_2 = new Door(this, 1920, 545, "doubleporte", false);

    ///////////// CLUES /////////////

    /////////////// ROOM 1 /////////////

    const pcOn1Room1 = new DialogObject(
      this,
      399,
      368,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "e1_r1_1",
      "clue"
    );

    const pcOn2Room1 = new DialogObject(
      this,
      559,
      48,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "e1_r1_2",
      "clue"
    );
    pcOn2Room1.flipX = true;

    //const papersRoom1 = 
    new DialogObject(
      this,
      305,
      190,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e1_r1_3",
      "clue"
    );

    /////////////// ROOM 2 /////////////

    //const pcOn1Room2 = 
    new DialogObject(
      this,
      1905,
      73,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "e1_r2_1",
      "clue"
    ).flipX = true;
    //pcOn1Room2.flipX = true;

    //const papersRoom2 = 
    new DialogObject(
      this,
      1505,
      60,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e1_r2_2",
      "clue"
    );

    const binRoom2 = new DialogObject(
      this,
      1937,
      400,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "e1_r2_3",
      "clue"
    );

    /////////////// ROOM 3 /////////////

    const binRoom3 = new DialogObject(
      this,
      976,
      590,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "e1_r3_1",
      "clue"
    );

    //const papersRoom3 = 
    new DialogObject(
      this,
      1260,
      768,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e1_r3_2",
      "clue"
    );

    const eleveRoom3 = new DialogObject(
      this,
      976,
      975,
      "eleve1",
      "Appuyer sur ESPACE pour parler à l'élève",
      "e1_r3_3",
      "clue"
    );

    /////////////// ROOM 4 /////////////

    //const papers1Room4 = 
    new DialogObject(
      this,
      1328,
      720,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e1_r4_1",
      "clue"
    );

    //const papers2Room4 = 
    new DialogObject(
      this,
      1500,
      926,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e1_r4_2",
      "clue"
    );

    const binRoom4 = new DialogObject(
      this,
      1616,
      590,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "e1_r4_3",
      "clue"
    );

    /////////////// ROOM 5 /////////////

    //const papersRoom5 = 
    new DialogObject(
      this,
      1780,
      830,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "e1_r5_1",
      "clue"
    );

    const eleve1Room5 = new DialogObject(
      this,
      1970,
      930,
      "eleve1",
      "Appuyer sur ESPACE pour parler à l'élève",
      "e1_r5_2",
      "clue"
    ).flipX = true;
    //eleve1Room5.flipX = true;

    const eleve2Room5 = new DialogObject(
      this,
      1710,
      930,
      "eleve2",
      "Appuyer sur ESPACE pour parler à l'élève",
      "e1_r5_3",
      "clue"
    );

    const colliderList = [
      prof5,
      prof6,
      prof7,
      prof8,
      prof9,
      doorRoom2_1,
      doorRoom2_2,
      doorRoom3_1,
      doorRoom3_2,
      doorRoom4_1,
      doorRoom4_2,
      doorRoom5_1,
      doorRoom5_2,
      binRoom2,
      binRoom3,
      binRoom4,
      eleveRoom3,
      eleve1Room5,
      eleve2Room5,
    ];
    this.physics.add.collider(this.player, colliderList);
    ///////////// DOOR OPENING SYSTEM /////////////
    this.listAllDoors = [
      [doorRoom2_1, doorRoom2_2],
      [doorRoom3_1, doorRoom3_2],
      [doorRoom4_1, doorRoom4_2],
      [doorRoom5_1, doorRoom5_2],
    ];
  }

  /** @returns {void} */
  create() {
    this.editorCreate();
  }
}
