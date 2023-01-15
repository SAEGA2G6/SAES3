class Player extends Phaser.Physics.Arcade.Sprite {
  /**
   *
   * @param {Phaser.Scene} scene Scene where the player will be placed
   * @param {number} x x coordinate
   * @param {number} y y coordinate
   * @param {string} texture Texture of the player
   * @param {string} pseudo Pseudo of the player
   */
  constructor(scene, x, y, texture, pseudo) {
    super(scene, x, y);
    const baseVelocity = 225;
    this.baseVelocity = baseVelocity;
    this.velocity = baseVelocity;
    scene.physics.world.enable(this);
    this.setTexture(texture);
    this.setScale(0.8, 0.8);
    this.body.setSize(this.width * 0.6, this.height * 0.5).setOffset(6, 20);

    ///////////////// SCORE MANAGER ////////////////
    this.pseudo = pseudo;
    this.score;
    ///////////////////////////////////////

    ///////////// ADD TO UPDATE LIST //////////
    scene.updateList.push(this);
    ///////////////////////////////////////////

    scene.add.existing(this);

    this.cursors = scene.input.keyboard.createCursorKeys();
    this.facingDirection;

    ///////////////// ANIMATIONS ////////////////
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers(texture, { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers(texture, { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers(texture, { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers(texture, { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    ///////////////////////////////////////////
  }

  /**
   * Sets the player's speed to 0.
   * @return {void}
   */
  stopSpeed() {
    this.velocity = 0;
  }

  /**
   * Sets the player's speed to the base velocity.
   * @return {void}
   */
  resetSpeed() {
    this.velocity = this.baseVelocity;
  }

  /**
   * Update the player (to manage moves).
   */
  update() {
    if (this.cursors.left.isDown) {
      this.setVelocityY(0);
      this.setVelocityX(-this.velocity);
      this.anims.play("left", true);
      this.facingDirection = "left";
    } else if (this.cursors.right.isDown) {
      this.setVelocityY(0);
      this.setVelocityX(this.velocity);
      this.anims.play("right", true);
      this.facingDirection = "right";
    } else if (this.cursors.up.isDown) {
      this.setVelocityX(0);
      this.setVelocityY(-this.velocity);
      this.anims.play("up", true);
      this.facingDirection = "up";
    } else if (this.cursors.down.isDown) {
      this.setVelocityX(0);
      this.setVelocityY(this.velocity);
      this.anims.play("down", true);
      this.facingDirection = "down";
    } else {
      if (this.facingDirection == "left") {
        this.anims.play("left");
      } else if (this.facingDirection == "right") {
        this.anims.play("right");
      } else if (this.facingDirection == "up") {
        this.anims.play("up");
      } else if (this.facingDirection == "down") {
        this.anims.play("down");
      }

      this.setVelocityX(0);
      this.setVelocityY(0);
    }
  }
}
