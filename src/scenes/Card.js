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
        console.log(this.name);
        if (this.name == "PenetrationTesting") {
            if (this.level == 0) {
                this.scene.FIRE_RATE_CONSTANT = 500;
                this.scene.ATTACK_SPEED_CONSTANT = 600;
            } else if (this.level == 1) {
                this.scene.FIRE_RATE_CONSTANT = 400;
                this.scene.ATTACK_SPEED_CONSTANT = 900;
            } else if (this.level == 2) {
                this.scene.FIRE_RATE_CONSTANT = 300;
                this.scene.ATTACK_SPEED_CONSTANT = 1200;
            } else if (this.level == 3) {
                this.scene.FIRE_RATE_CONSTANT = 200;
                this.scene.ATTACK_SPEED_CONSTANT = 1500;
            } else if (this.level == 4) {
                this.scene.FIRE_RATE_CONSTANT = 100;
                this.scene.ATTACK_SPEED_CONSTANT = 3000;
            }
        }
        for(let i = 0; i < this.scene.activeCards.length; i++) {
            if (this.scene.activeCards[i].name == this.name) {
                this.scene.activeCards[i].level = this.level;
            }
        }
    }
}
