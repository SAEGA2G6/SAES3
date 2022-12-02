// You can write more code here

/* START OF COMPILED CODE */

class Door extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, isTop) {
    super(scene, x, y);
    /* START-USER-CTR-CODE */
    this.scene.physics.world.enable(this);
    this.setTexture(texture);
    this.body.setSize(this.width,this.height*0.5).setOffset(0,31);
    this.setImmovable();
    // Si porte d'un mur du haut alors baisser la profondeur du sprite
    if(isTop)
      this.setDepth(0);
    else
      this.setDepth(2);
    scene.add.existing(this);

    /* END-USER-CTR-CODE */
  }

  open() {
    this.setTexture("cadredoubleporte");
  }

  disableCollide() {
    this.body.enable = false;
  }

  /* START-USER-CODE */

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
