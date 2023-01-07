class Door extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture, isTop) {
    super(scene, x, y);
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
  }

  open() {
    this.setTexture("cadredoubleporte");
    this.disableCollide();
    this.setDepth(2);
  }

  disableCollide() {
    this.body.enable = false;
  }
}
