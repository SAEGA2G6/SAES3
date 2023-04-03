/**
 * Class representing a door
 */
class Door extends Phaser.Physics.Arcade.Sprite {
  /**
   * The constructor for a door object, that prevents the player from entering a room until he has completed the MCQ of the previous room
   * @param {Phaser.Scene} scene Scene where the door will be placed
   * @param {number} x x coordinate
   * @param {number} y y coordinate
   * @param {string} texture Texture of the door
   * @param {boolean} isTop true if the door opens to a room above the player and false otherwise (so that the player is not rendered as through the door)
   */
  constructor(scene, x, y, texture, isTop) {
    super(scene, x, y);
    /// activation of door collisions ///
    this.scene.physics.world.enable(this);

    this.setTexture(texture);
    /// redefinition of the size of the door ///
    this.body.setSize(this.width, this.height * 0.5).setOffset(0, 31);
    /// the door can't move ///
    this.setImmovable();
    /// avoids visual bugs ///
    if (isTop) {
      this.setDepth(0);
    } else this.setDepth(2);

    scene.add.existing(this);
  }

  /**
   * opens the door, which allows the player to pass through it
   * @return {void}
   */
  open() {
    /// texture of the open door is set ///
    this.setTexture("cadredoubleporte");
    /// disables collision of the door ///
    this.body.enable = false;
    /// changes the depth of the door (to avoid player display problems)///
    this.setDepth(2);
  }
}
