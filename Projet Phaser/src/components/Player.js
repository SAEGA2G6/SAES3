/* START OF COMPILED CODE */

class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    //this.velocity = 600;
    this.velocity = 160;
    this.scene.physics.world.enable(this);
    this.setTexture("player");
    this.setScale(0.8, 0.8);
    this.body.setSize(this.width * 0.6, this.height * 0.5).setOffset(6, 20);
    this.setDepth(1);

    this.facing_direction;
    this.scene = scene;
    scene.add.existing(this);

    this.cursors = this.scene.input.keyboard.createCursorKeys();

    ///animations///
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("player", { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update() {
    if (this.cursors.left.isDown) {
      this.setVelocityY(0);
      this.setVelocityX(-this.velocity);
      this.anims.play("left", true);
      this.facing_direction = "left";
    } else if (this.cursors.right.isDown) {
      this.setVelocityY(0);
      this.setVelocityX(this.velocity);
      this.anims.play("right", true);
      this.facing_direction = "right";
    } else if (this.cursors.up.isDown) {
      this.setVelocityX(0);
      this.setVelocityY(-this.velocity);
      this.anims.play("up", true);
      this.facing_direction = "up";
    } else if (this.cursors.down.isDown) {
      this.setVelocityX(0);
      this.setVelocityY(this.velocity);
      this.anims.play("down", true);
      this.facing_direction = "down";
    } else {
      if (this.facing_direction == "left") {
        console.log("a gauche");
        this.anims.play("left");
      } else if (this.facing_direction == "right") {
        this.anims.play("right");
      } else if (this.facing_direction == "up") {
        this.anims.play("up");
      } else if (this.facing_direction == "down") {
        this.anims.play("down");
      }
      this.setVelocityX(0);
      this.setVelocityY(0);
      var KeyK = this.scene.input.keyboard.addKey("k");
      if (KeyK.isDown) {
        console.log("kk");
        this.scene.emitter.emit('openDoors');
      }
    }
  }
}

/* END OF COMPILED CODE */

// You can write more code here
