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
        if (!this.anims.exists('thirtytwo')) {
            this.anims.create({
                key:'thirtytwo',
                frames: this.anims.generateFrameNumbers('XPBar', {start:2,end:2}),
                frameRate:10,
                repeat:0
            });
        }
        if (!this.anims.exists('fortyeight')) {
            this.anims.create({
                key:'fortyeight',
                frames:this.anims.generateFrameNumbers('XPBar',{start:3,end:3}),
                frameRate:10,
                repeat:0
            });
        }
        if (!this.anims.exists('sixtyfour')) {
            this.anims.create({
                key:'sixtyfour',
                frames:this.anims.generateFrameNumbers('XPBar',{start:4,end:4}),
                frameRate:10,
                repeat:0
            });
        }
        if (!this.anims.exists('eighty')) {
            this.anims.create({
                key:'eighty',
                frames:this.anims.generateFrameNumbers('XPBar',{start:5,end:5}),
                frameRate:10,
                repeat:0
            });
        }
        if (!this.anims.exists('ninety')) {
            this.anims.create({
                key:'ninety',
                frames:this.anims.generateFrameNumbers('XPBar',{start:6,end:6}),
                frameRate:10,
                repeat:0
            });
        }
        if (!this.anims.exists('hundred')) {
            this.anims.create({
                key:'hundred',
                frames:this.anims.generateFrameNumbers('XPBar',{start:7,end:7}),
                frameRate:10,
                repeat:0
            });
        }
    }
    setXP(value) {
        this.XPValue = value;
        if (this.XPValue < 16) {
            this.play('zero');
        } else if (this.XPValue < 32) {
            this.play('sixteen');
        } else if (this.XPValue < 48) {
            this.play('thirtytwo');
        } else if (this.XPValue < 64) {
            this.play('fortyeight');
        } else if (this.XPValue < 80) {
            this.play('sixtyfour');
        } else if (this.XPValue < 90) {
            this.play('eighty');
        } else if (this.XPValue < 100) {
            this.play('ninety');
        } else {
            this.play('hundred');
            this.scene.levelUp = true;
        }
    }
}
