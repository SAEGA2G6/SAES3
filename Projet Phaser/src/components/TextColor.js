
// You can write more code here

/* START OF COMPILED CODE */

class TextColor extends UserComponent {

	constructor(gameObject, scene) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__TextColor"] = this;
        
		this.scene = scene;

    }

	/** @returns {TextColor} */
	static getComponent(gameObject) {
		return gameObject["__TextColor"];
	}

	/** @type {Phaser.GameObjects.Text} */
	gameObject;

	awake() {

		this.gameObject.setInteractive({ useHandCursor: true }).on("pointerdown", () => { this.gameObject.setStyle({fill: "purple"}), this.gameObject.scene.scene.start(this.scene)});
		this.gameObject.setInteractive({ useHandCursor: true }).on("pointerover", () => this.gameObject.setStyle({fill: "orange"}));
		this.gameObject.setInteractive({ useHandCursor: true }).on("pointerout", () => this.gameObject.setStyle({fill: "white"}));
		
		//new PushOnClick(this.gameObject);
	}
}