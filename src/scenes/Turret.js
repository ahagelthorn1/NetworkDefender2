export class Turret extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture,BuildSign) {
        super(scene, x, y, texture);
        scene.add.existing(this);
    }
}
