/* START OF COMPILED CODE */

class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    const baseVelocity = 160;
    this.baseVelocity = baseVelocity;
    this.velocity = 300; //160;
    this.scene.physics.world.enable(this);
    this.setTexture("player");
    this.setScale(0.8, 0.8);
    this.body.setSize(this.width * 0.6, this.height * 0.5).setOffset(6, 20);


    ///////////// ADD TO UPDATE LIST //////////
    this.scene.update_list.push(this);
    ///////////////////////////////////////////


    ////////////////////////////////// PARTIE PROVISOIRE //////////////////////////////////
    /*
    this.score = 0;

    const text_dialog = this.scene.add.text(0, 0, "", {}).setDepth(5);
    text_dialog.setOrigin(0.5, 0.5);
    text_dialog.text = "Appuyer sur ESPACE pour commencer le QCM";
    text_dialog.setStyle({
      fontFamily: "Roboto",
      fontSize: "10px",
      color: "black",
      backgroundColor: "grey",
    });

    this.text_dialog = text_dialog;
    this.text_dialog.visible = false;
    */
    /////////////////////////////////////////////////////////////////////////////////////

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
    ////////////////////////////////// PARTIE PROVISOIRE //////////////////////////////////
    /*var KeySpace = this.scene.input.keyboard.addKey("SPACE");

    if (
      Phaser.Math.Distance.Between(
        this.x,
        this.y,
        this.scene.prof1.x,
        this.scene.prof1.y
      ) < 40
    ) {
      Phaser.Display.Align.In.BottomCenter(this.text_dialog, this.scene.prof1);
      this.text_dialog.y += 5;
      this.text_dialog.visible = true;
      if (KeySpace.isDown) {
        this.scene.scene.switch("InterfaceQCM");
      }
    } else {
      this.text_dialog.visible = false;
    }
    if (this.score === 10) {
      this.scene.emitter.emit("openDoors");
    }*/
    //////////////////////////////////////////////////////////////////////////////////////
  }
}

/* END OF COMPILED CODE */

// You can write more code here
