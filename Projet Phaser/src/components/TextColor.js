
// You can write more code here

/* START OF COMPILED CODE */

class TextColor extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__TextColor"] = this;
        

    }

	/** @returns {TextColor} */
	static getComponent(gameObject) {
		return gameObject["__TextColor"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	awake() {

		this.gameObject.setInteractive().on("pointerdown", () => {

			this.scene.add.tween({
				targets: this.gameObject,
				scaleX: "*=0.8",
				scaleY: "*=0.8",
				duration: 80,
				yoyo: true
			});
		});
	}
}