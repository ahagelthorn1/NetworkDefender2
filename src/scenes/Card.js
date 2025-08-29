export class Card extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture,level,name) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.level = level;
        this.name = name;
        this.setDepth(25);
        this.scale = 1.8;
        this.visible = false;
    }
}
