export class HealthBar extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        if (!this.anims.exists('one_hundred')) {
            this.anims.create({
                key: 'one_hundred',
                frames: this.anims.generateFrameNumbers('HealthBar', { start: 0, end: 0 }),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('ninety')) {
            this.anims.create({
                key: 'ninety',
                frames: this.anims.generateFrameNumbers('HealthBar', { start: 1, end: 1 }),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('eighty')) {
            this.anims.create({
                key: 'eighty',
                frames: this.anims.generateFrameNumbers('HealthBar', { start: 2, end: 2 }),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('seventy')) {
            this.anims.create({
                key: 'seventy',
                frames: this.anims.generateFrameNumbers('HealthBar', {
                    start: 3,
                    end: 3
                }),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('sixty')) {
            this.anims.create({
                key: 'sixty',
                frames: this.anims.generateFrameNumbers('HealthBar', { start: 4, end: 4 }),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('fifty')) {
            this.anims.create({
                key: 'fifty',
                frames: this.anims.generateFrameNumbers('HealthBar', { start: 5, end: 5 }),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('forty')) {
            this.anims.create({
                key: 'forty',
                frames: this.anims.generateFrameNumbers('HealthBar', { start: 6, end: 6 }),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('thirty')) {
            this.anims.create({
                key: 'thirty',
                frames: this.anims.generateFrameNumbers('HealthBar', { start: 7, end: 7 }),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('twenty')) {
            this.anims.create({
                key: 'twenty',
                frames: this.anims.generateFrameNumbers('HealthBar', { start: 8, end: 8 }),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('ten')) {
            this.anims.create({
                key: 'ten',
                frames: this.anims.generateFrameNumbers('HealthBar', { start: 9, end: 9 }),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('zero')) {
            this.anims.create({
                key: 'zero',
                frames: this.anims.generateFrameNumbers('HealthBar', { start: 10, end: 10 }),
                frameRate: 10,
                repeat: 0
            });
        }
    }
}
