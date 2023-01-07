class SecondFloor extends Phaser.Scene {
    constructor() {
      super("SecondFloor");
    }
  
    /** @returns {void} */
    editorCreate() {
      ///////////// UPDATE /////////////
      this.update_list = [];
      ///////////// MAP /////////////

      // TODO: ajouter la map du 2ème étage
      var carte = this.make.tilemap({ key: "map2" });
      var tileset1 = carte.addTilesetImage("couloir", "couloir");
      var tileset2 = carte.addTilesetImage("escaliers", "escaliers");
      var tileset3 = carte.addTilesetImage("meuble1", "meuble1");
      var tileset4 = carte.addTilesetImage("mur", "mur");
      var tileset5 = carte.addTilesetImage("pc", "pc");
      var tileset6 = carte.addTilesetImage("portes", "portes");
      var tileset7 = carte.addTilesetImage("poubelle", "poubelle");
      var tileset8 = carte.addTilesetImage("toiletsBureau", "toiletsBureau");
  
      var tilesets_list = [
        tileset1,
        tileset2,
        tileset3,
        tileset4,
        tileset5,
        tileset6,
        tileset7,
        tileset8,
      ];
  
      ///////////// LAYERS /////////////
      //Calque 1,2 et 3 (profondeur à 0 pour le sol et pour le mobilier, profondeur à 1 pour le joueur, profondeur à 2 pour les objets et ce q)
  
      var calque1 = carte
        .createLayer("Calque de Tuiles 1", tilesets_list, 0, 0)
        .setDepth(0);
  
      var calque2 = carte
        .createLayer("Calque de Tuiles 2", tilesets_list, 0, 0)
        .setDepth(0);
  
      var calque3 = carte
        .createLayer("Calque de Tuiles 3", tilesets_list, 0, 0)
        .setDepth(2);
  
      ///////////// PLAYER /////////////
  
      const player = new Player(this, 400, 218).setDepth(1);
      this.player = player;
  
      ///////////// PROF/BOSS /////////////
      
      //TODO//
  
      ///////////// DOORS /////////////
      
      //TODO//
  
      ///////////// INDICES /////////////
      
      //TODO//
  
      ///////////// COLLISIONS /////////////
  
      calque1.setCollisionByProperty({ estSolide: true });
      calque2.setCollisionByProperty({ estSolide: true });
      calque3.setCollisionByProperty({ estSolide: true });
  
      const collider_list = [
        calque1,
        calque2,
        calque3
      ];
      this.physics.add.collider(player, collider_list);
  
      ///////////// CAMERA /////////////
      this.cameras.main.setBounds(0, 0, carte.displayWidth, carte.displayHeight);
      this.cameras.main.startFollow(player);
      this.cameras.main.zoom = 1.2;
  
  
      ///////////// EVENTS /////////////
      this.emitter = new Phaser.Events.EventEmitter();
      this.emitter.on("open_doors", this.open_doors_handler, this);
      this.emitter.on("time_malus", this.malusChrono, this);
  
      ///////////// CHRONOMETER /////////////
      /// txt chrono
  
      const back_chrono = this.add.image(125, 100, "back_chrono").setDepth(4);
      back_chrono.setOrigin(0.5, 0.48);
      back_chrono.setScrollFactor(0);
      back_chrono.setScale(0.17);
  
      const chrono_txt = this.add.text(0, 0, "", {}).setDepth(5);
      chrono_txt.setOrigin(0.5, 0.5);
      chrono_txt.setStyle({
        fontFamily: "roboto",
        fontSize: "20px",
        color: "black",
      });
      chrono_txt.setScrollFactor(0);
      Phaser.Display.Align.In.Center(chrono_txt, back_chrono);
      this.chrono_txt = chrono_txt;
  
      /// txt malus chrono
      const time_malus_txt = this.add
        .text(chrono_txt.x, chrono_txt.y + 25, "+30", {})
        .setDepth(5);
      time_malus_txt.setOrigin(0.5, 0.5);
      time_malus_txt.setStyle({
        fontFamily: "roboto",
        fontSize: "15px",
        color: "red",
      });
      time_malus_txt.setScrollFactor(0);
      time_malus_txt.visible = false;
      this.time_malus_txt = time_malus_txt;
  
      /// Chrono start at 0
      this.chrono = 0;
  
      /// Every second, the chrono increment of 1
      const chrono = this.time.addEvent({
        delay: 1000,
        callback: () => (this.chrono += 1),
        callbackScope: this,
        loop: true,
      });
  
      this.events.emit("scene-awake");
    }
  
    ///////////// EVENTS HANDLERS /////////////
    /////////////// TODO: ajouter les portes dans list_doors depuis InterfaceQCM /////////////
    open_doors_handler() {
      for (var i = 0; i < this.list_doors.length; i++) {
        this.list_doors[i].open();
      }
    }
  
    malusChrono() {
      this.time_malus_txt.visible = true;
      const timedEvent = this.time.delayedCall(
        3000,
        () => {
          (this.time_malus_txt.visible = false), (this.chrono += 30);
        },
        [],
        this
      );
    }
  
    ///////////// UPDATE /////////////
    updateChrono() {
      /// CHRONOMETER
      var min = Math.floor(this.chrono / 60);
      var sec = this.chrono % 60;
      var min_txt;
      var sec_txt;
      if (min < 10) {
        min_txt = "0" + min;
      } else {
        min_txt = min;
      }
      if (sec < 10) {
        sec_txt = "0" + sec;
      } else {
        sec_txt = sec;
      }
      this.chrono_txt.text = min_txt + " : " + sec_txt;
    }
  
    create() {
      this.editorCreate();
    }
  
    update() {
      ///LIST TO UPDATE DIALOG OBJECTS (BOSS, CLUES)
      for (var i = 0; i < this.update_list.length; i++) {
        this.update_list[i].update();
      }
  
      ///TO UPDATE CHRONOMETER
      this.updateChrono();
  
      /////TEST
      const KeyK = this.input.keyboard.addKey("k");
      if (KeyK.isDown) {
        this.scene.restart("Level");
      }
    }
  }
  