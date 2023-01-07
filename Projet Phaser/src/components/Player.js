class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y);
    const baseVelocity = 160;
    this.baseVelocity = baseVelocity;
    this.velocity = 300;
    this.scene.physics.world.enable(this);
    this.setTexture(texture);
    this.setScale(0.8, 0.8);
    this.body.setSize(this.width * 0.6, this.height * 0.5).setOffset(6, 20);

    this.score;


    ///////////// ADD TO UPDATE LIST //////////
    this.scene.update_list.push(this);
    ///////////////////////////////////////////

    this.facing_direction;
    this.scene = scene;
    scene.add.existing(this);

    this.cursors = this.scene.input.keyboard.createCursorKeys();

    ///animations///

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
    }
  }
}
