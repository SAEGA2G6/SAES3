class GroundFloor extends Floor {
  /**
   * Scene corresponding to the ground floor level.
   * @param {*} data Object containing data essential to the functioning of the level (player gender, player'nickname/pseudo).
   */
  init(data) {
    super.init(data);

    this.floorsConfig = this.cache.json.get("FloorsConfig");
    this.floorConfig = this.floorsConfig[data.chosenLevel];
    
    
    this.nbRooms = this.floorConfig["nbRooms"];

    this.levelPrefix = this.floorConfig["levelPrefix"];
    this.map = this.floorConfig["map"];
    this.imageMap = this.floorConfig["imageMap"];
  }

  /** @returns {void} */
  editorCreate() {
    super.createTemplateFloor();
    this.createGroundFloor();
    this.player.setPosition(this.floorConfig["posPlayer"].x, this.floorConfig["posPlayer"].y);
    this.events.emit("scene-awake");
  }

  createGroundFloor() {
    var colliderList = [];
    this.listAllDoors = [];
    ///////////// PROF/BOSS /////////////
    this.floorConfig["profs"].forEach(prof => {
      let currentProf = new DialogObject(this, prof["pos"].x, prof["pos"].y, prof["texture"], prof["displayText"], null, "mcq");
      currentProf.body.setSize(currentProf.width * 0.6, currentProf.height * 0.8, true);
      colliderList.push(currentProf);
    });

    ///////////// DOORS /////////////

    const doorRoom2_1 = new Door(this, 768, 417, "doubleporte", true);

    this.floorConfig["doors"].forEach(door => {
      let currentDoor = new Door(this, door["pos"].x, door["pos"].y, door["texture"], door["isTop"]);
      colliderList.push(currentDoor);
      this.listAllDoors.push(currentDoor);
    });

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
    /*const pcOn1Room2 = new DialogObject(
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
    );*/

    /*
    colliderList.push([
      binRoom2,
      binRoom3,
    ]);*/
    
    this.physics.add.collider(this.player, colliderList);
    /*this.listAllDoors = [
      [doorRoom2_1, doorRoom2_2],
      [doorRoom3_1, doorRoom3_2],
      [doorRoom4_1, doorRoom4_2],
    ];*/
  }

  ///////////// CREATE /////////////
  /** @returns {void} */
  create() {
    this.editorCreate();
  }
}
