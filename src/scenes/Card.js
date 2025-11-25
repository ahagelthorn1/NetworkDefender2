export class Card extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture,level,name) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.level = level;
        this.name = name;
        this.setDepth(25);
        this.scale = 1.8;
        this.visible = false;
        this.on('pointerdown', () => {
            this.scene.closeCardMenu();
            this.addEffect();
        });
    }
    addEffect() {
        if (this.name == "PenetrationTesting") {
            if (this.level == 1) {
                this.scene.FIRE_RATE_CONSTANT = 2000;
            } else if (this.level == 2) {
                this.scene.FIRE_RATE_CONSTANT = 3000;
            } else if (this.level == 3) {
                this.scene.FIRE_RATE_CONSTANT = 4000;
            } else if (this.level == 4) {
                this.scene.FIRE_RATE_CONSTANT = 5000;
            } else if (this.level == 5) {
                this.scene.FIRE_RATE_CONSTANT = 10000;
            }
        }
        for(let i = 0; i < this.scene.activeCards.length; i++) {
            if (this.scene.activeCards[i].name == this.name) {
                this.scene.activeCards[i].level = this.level;
            }
        }
    }
}
