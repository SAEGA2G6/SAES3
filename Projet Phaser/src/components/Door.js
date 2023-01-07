class Door extends Phaser.Physics.Arcade.Sprite {
  /**
   * The constructor for a door object, that prevents the player from entering a room until he has completed the MCQ of the previous room
   * @param {Phaser.Scene} scene Scene where the door will be placed
   * @param {number} x x coordinate
   * @param {number} y y coordinate
   * @param {string} texture Texture of the door
   * @param {boolean} isTop true if the door opens to a room above us and false otherwise
   */
  constructor(scene, x, y, texture, isTop) {
    super(scene, x, y);
    this.scene.physics.world.enable(this);
    this.setTexture(texture);
    this.body.setSize(this.width, this.height * 0.5).setOffset(0, 31);
    this.setImmovable();
    // Si porte d'un mur du haut alors baisser la profondeur du sprite
    if (isTop) this.setDepth(0);
    else this.setDepth(2);
    scene.add.existing(this);
  }

  /**
   * opens the door which allows the player to pass through it
   * @return {void}
   */
  open() {
    this.setTexture("cadredoubleporte");

    //disables collision of the door
    this.body.enable = false;
    this.setDepth(2);
  }
}
