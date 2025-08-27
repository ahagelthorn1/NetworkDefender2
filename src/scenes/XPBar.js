export class XPBar extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        if (!this.anims.exists('zero')) {
            this.anims.create({
                key: 'zero',
                frames: this.anims.generateFrameNumbers('XPBar', { start: 0, end: 0 }),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('sixteen')) {
            this.anims.create({
                key:'sixteen',
                frames: this.anims.generateFrameNumbers('XPBar', {start:1, end:1}),
                frameRate:10,
                repeat:0
            });
        }
        if (!this.anims.exits('thirtytwo')) {
            this.anims.create({
                key:'thirtytwo',
                frames: this.anims.generateFrameNumbers('XPBar,.
    }
}
