class GroundFloor extends Floor {
  /**
   * Scene corresponding to the ground floor level.
   * @param {*} data Object containing data essential to the functioning of the level (player gender, player'nickname/pseudo).
   */
  init(data) {
    super.init(data);
    this.pos = { x: 352, y: 918 };

    this.nbRooms = 4;

    this.levelPrefix = "rc";
    this.map = "map";
    this.imageMap = "rcimg";
  }

  /** @returns {void} */
  editorCreate() {
    super.createTemplateFloor();
    this.createGroundFloor();
    this.player.setPosition(this.pos.x, this.pos.y);
    this.events.emit("scene-awake");
  }

  createGroundFloor() {
    ///////////// PROF/BOSS /////////////
    const prof1 = new DialogObject(
      this,
      480,
      340,
      "prof1",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    prof1.body.setSize(prof1.width * 0.6, prof1.height * 0.8, true);
    this.prof1 = prof1;

    const prof2 = new DialogObject(
      this,
      900,
      340,
      "prof2",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    const prof3 = new DialogObject(
      this,
      1760,
      340,
      "prof3",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );
    prof3.body.setSize(prof3.width * 0.6, prof3.height * 0.8, true);
    this.prof3 = prof3;

    const prof4 = new DialogObject(
      this,
      1938,
      725,
      "prof4",
      "Appuyer sur ESPACE pour commencer le QCM !",
      null,
      "mcq"
    );

    ///////////// DOORS /////////////

    const doorRoom2_1 = new Door(this, 768, 417, "doubleporte", true);

    const doorRoom2_2 = new Door(this, 1024, 417, "doubleporte", true);

    const doorRoom3_1 = new Door(this, 1632, 417, "doubleporte", true);

    const doorRoom3_2 = new Door(this, 1888, 417, "doubleporte", true);

    const doorRoom4_1 = new Door(this, 1632, 545, "doubleporte", false);

    const doorRoom4_2 = new Door(this, 1888, 545, "doubleporte", false);

    const doorOffice1 = new Door(this, 1216, 417, "doubleporte", true);

    const doorOffice2 = new Door(this, 1440, 417, "doubleporte", true);

    const doorOffice3 = new Door(this, 1216, 545, "doubleporte", false);

    const doorOffice4 = new Door(this, 1440, 545, "doubleporte", false);

    const doorSecretariat = new Door(this, 928, 673, "doubleporte", false);

    const doorBoss = new Door(this, 752, 673, "simpleporte", false);

    ///////////// CLUES /////////////

    ///////////// ROOM 1 /////////////
    const pcOn1Room1 = new DialogObject(
      this,
      495,
      240,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "rc_r1_1",
      "clue"
    );
    pcOn1Room1.flipX = true;

    const pcOn2Room1 = new DialogObject(
      this,
      625,
      110,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "rc_r1_2",
      "clue"
    );

    const papersRoom1 = new DialogObject(
      this,
      305,
      80,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "rc_r1_3",
      "clue"
    );

    ///////////// ROOM 2 /////////////
    const pcOn1Room2 = new DialogObject(
      this,
      1040,
      240,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "rc_r2_1",
      "clue"
    );

    const pcOn2Room2 = new DialogObject(
      this,
      750,
      146,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "rc_r2_2",
      "clue"
    );
    pcOn2Room2.flipX = true;

    const binRoom2 = new DialogObject(
      this,
      1075,
      400,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "rc_r2_3",
      "clue"
    );

    ///////////// ROOM 3 /////////////

    const pcOnRoom3 = new DialogObject(
      this,
      1775,
      112,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "rc_r3_1",
      "clue"
    );
    pcOnRoom3.flipX = true;

    const binRoom3 = new DialogObject(
      this,
      1580,
      400,
      "poubelleSprite",
      "Appuyer sur ESPACE pour fouiller la poubelle",
      "rc_r3_2",
      "clue"
    );

    const papersRoom3 = new DialogObject(
      this,
      1937,
      262,
      "papiers",
      "Appuyer sur ESPACE pour regarder les notes...",
      "rc_r3_3",
      "clue"
    );

    ///////////// ROOM 4 /////////////

    const pcOnRoom4 = new DialogObject(
      this,
      1810,
      623,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "rc_r4_1",
      "clue"
    );

    const pcOn2Room4 = new DialogObject(
      this,
      1905,
      912,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "rc_r4_2",
      "clue"
    );

    const pcOn3Room4 = new DialogObject(
      this,
      1776,
      815,
      "pcAllume",
      "Appuyer sur ESPACE pour regarder l'ordinateur...",
      "rc_r4_3",
      "clue"
    );

    const colliderList = [
      prof1,
      prof2,
      prof3,
      prof4,
      doorRoom2_1,
      doorRoom2_2,
      doorRoom3_1,
      doorRoom3_2,
      doorRoom4_1,
      doorRoom4_2,
      doorOffice1,
      doorOffice2,
      doorOffice3,
      doorOffice4,
      doorSecretariat,
      doorBoss,
      binRoom2,
      binRoom3,
    ];
    this.physics.add.collider(this.player, colliderList);
    this.listAllDoors = [
      [doorRoom2_1, doorRoom2_2],
      [doorRoom3_1, doorRoom3_2],
      [doorRoom4_1, doorRoom4_2],
    ];
  }

  ///////////// CREATE /////////////
  /** @returns {void} */
  create() {
    this.editorCreate();
  }
}
