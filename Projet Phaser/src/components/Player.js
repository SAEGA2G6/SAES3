/**
 * Class representing a player
 */
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

    /////// MINIMAP //////
    const minimap = this.scene.add.image(400, 300, this.scene.imageMap);
    minimap.setScale(0.3);
    minimap.setScrollFactor(0);
    minimap.setDepth(3);
    minimap.setVisible(false);
    this.minimap = minimap;
    this.openedMap = 0;
    this.isProcessing = false;

    ///////////////// SCORE MANAGER ////////////////
    this.pseudo = pseudo;
    this.score;
    ///////////////////////////////////////

    ///////////// ADD TO UPDATE LIST //////////
    scene.updateList.push(this);
    ///////////////////////////////////////////

    scene.add.existing(this);

    this.cursors = scene.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.Z,
      left: Phaser.Input.Keyboard.KeyCodes.Q,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
    this.cursorsAlt = scene.input.keyboard.createCursorKeys();
    this.facingDirection;

    const KeyESC = scene.input.keyboard.addKey("esc");
    this.KeyESC = KeyESC;

    const KeyM = scene.input.keyboard.addKey("m");
    this.KeyM = KeyM;

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
    if (this.cursors.left.isDown || this.cursorsAlt.left.isDown) {
      this.setVelocityY(0);
      this.setVelocityX(-this.velocity);
      this.anims.play("left", true);
      this.facingDirection = "left";
    } else if (this.cursors.right.isDown || this.cursorsAlt.right.isDown) {
      this.setVelocityY(0);
      this.setVelocityX(this.velocity);
      this.anims.play("right", true);
      this.facingDirection = "right";
    } else if (this.cursors.up.isDown || this.cursorsAlt.up.isDown) {
      this.setVelocityX(0);
      this.setVelocityY(-this.velocity);
      this.anims.play("up", true);
      this.facingDirection = "up";
    } else if (this.cursors.down.isDown || this.cursorsAlt.down.isDown) {
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

    if (this.KeyM.isDown && !this.isProcessing) {
      this.isProcessing = true;
      if (this.openedMap == 0) {
        this.minimap.setVisible(true);
        this.openedMap = 1;
        this.stopSpeed();
      } else if (this.openedMap == 1) {
        this.minimap.setVisible(false);
        this.openedMap = 0;
        this.resetSpeed();
      }
      this.scene.time.delayedCall(500, () => {
        this.isProcessing = false;
      });
    } else if (this.KeyESC.isDown && this.openedMap == 1) {
      this.minimap.setVisible(false);
      this.resetSpeed();
    }
  }
}
