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
        for(let i = 0; i < this.scene.activeCards.length; i++) {
            if (this.scene.activeCards[i].name == this.name) {
                this.scene.activeCards[i].level = this.level;
            }
        }
    }
}
