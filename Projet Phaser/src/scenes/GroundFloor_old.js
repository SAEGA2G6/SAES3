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
    this.createFloor();
    this.player.setPosition(
      this.floorConfig["posPlayer"].x,
      this.floorConfig["posPlayer"].y
    );
    this.events.emit("scene-awake");
  }

  createFloor() {
    var colliderList = [];
    this.listAllDoors = [];
    ///////////// PROF/BOSS /////////////
    this.floorConfig["profs"].forEach((prof) => {
      let currentProf = new DialogObject(
        this,
        prof["pos"].x,
        prof["pos"].y,
        prof["texture"],
        prof["displayText"],
        null,
        "mcq"
      );
      currentProf.body.setSize(
        currentProf.width * 0.6,
        currentProf.height * 0.8,
        true
      );
      colliderList.push(currentProf);
    });

    ///////////// DOORS /////////////

    this.floorConfig["doors"].forEach((door) => {
      let currentDoor = new Door(
        this,
        door["pos"].x,
        door["pos"].y,
        door["texture"],
        door["isTop"]
      );
      colliderList.push(currentDoor);
      this.listAllDoors.push(currentDoor);
    });

    ///////////// CLUES /////////////
    this.floorConfig["clues"].forEach((clue) => {
      let currentClue = new DialogObject(
        this,
        clue["pos"].x,
        clue["pos"].y,
        clue["texture"],
        clue["displayText"],
        clue["clueId"],
        "clue"
      );
      if (currentClue.texture === "poubelleSprite") {
        colliderList.push(currentClue);
      }
      if (clue["isFlipX"] === true) {
        currentClue.flipX = true;
      }
    });
    

    this.physics.add.collider(this.player, colliderList);
  }

  ///////////// CREATE /////////////
  /** @returns {void} */
  create() {
    this.editorCreate();
  }
}
