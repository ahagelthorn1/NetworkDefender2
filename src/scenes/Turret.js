import { Arrow } from './Arrow.js';
export class Turret extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture,BuildSign) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.range = 200;
        this.fireRate = 1000;
        this.speed = 300;
        this.lastFired = 0;
        this.arrows = [];
        if (!this.anims.exists('down')) {
            this.anims.create({
                key: 'down',
                frames: this.anims.generateFrameNumbers('Turret', { start: 3, end: 3 }),
                frameRate: 10,
                repeat: -1
            });
        }
        if (!this.anims.exists('down_shoot')) {
            this.anims.create({
                key: 'down_shoot',
                frames: this.anims.generateFrameNumbers('Turret', {start: 3,end: 5}),
                frameRate:10,
                repeat: 0
            });
        }
        if (!this.anims.exists('up')) {
            this.anims.create({
                key: 'up',
                frames: this.anims.generateFrameNumbers('Turret', { start: 9,
                end: 9 }),
                frameRate: 10,
                repeat: -1
                });
        }
        if (!this.anims.exists('up_shoot')) {
            this.anims.create({
                key: 'up_shoot',
                frames: this.anims.generateFrameNumbers('Turret', {start: 9, end:11}),
                frameRate: 10,
                repeat: 0
            });
        }
        if (!this.anims.exists('left')) {
            this.anims.create({
                key: 'left',
                frames: this.anims.generateFrameNumbers('Turret', { start: 12, end:12 }),
                frameRate: 10,
                repeat: -1
            });
        }
        if (!this.anims.exists('left_shoot')) {
            this.anims.create({
                key: 'left_shoot',
                frames: this.anims.generateFrameNumbers('Turret', {start: 12,
                    end:14 }),
                    frameRate:10,
                    repeat:0
            });
        }
        if (!this.anims.exists('right')) {
            this.anims.create({
                key: 'right',
                frames: this.anims.generateFrameNumbers('Turret', { start:6, end:6 }),
                frameRate:10,
                repeat: -1
            });
        }
        if (!this.anims.exists('right_shoot')) {
            this.anims.create({
                key: 'right_shoot',
                frames: this.anims.generateFrameNumbers('Turret', {start:6, end:8 }),
                frameRate:10,
                repeat: 0
            });
        }
        this.shootingKeys = ['up_shoot','left_shoot','right_shoot','down_shoot'];
        this.changeDirection('DOWN');
    }
    isCurrentlyShooting() {
        if (this.anims.isPlaying) {
            if(this.shootingKeys.includes(this.anims.currentAnim.key)) {
                return true;
            }
        }
        return false;
    }
    changeDirection(direction) {
        if(!this.isCurrentlyShooting()) {
            if (direction == "UP" && this.direction != "UP") {
                this.anims.play('up');
            } else if (direction == "DOWN" && this.direction != "DOWN") {
                this.anims.play('down');
            } else if (direction == "LEFT" && this.direction != "LEFT") {
                this.anims.play('left');
            } else if (direction == "RIGHT" && this.direction != "RIGHT") {
                this.anims.play('right');
            }
            this.direction = direction;
        }
    }
    shoot(target) {
        if (this.direction == "UP") {
            this.anims.play('up_shoot');
        } else if (this.direction == "LEFT") {
            this.anims.play('left_shoot');
        } else if (this.direction == "RIGHT") {
            this.anims.play('right_shoot');
        } else if (this.direction == "DOWN") {
            this.anims.play('down_shoot');
        }
        const angle = Phaser.Math.Angle.Between(this.x,this.y, target.x, target.y);
        const arrow = new Arrow(this.scene,this.x,this.y,'Arrow',angle,target,this.speed,this);
        this.arrows.push(arrow);
        arrow.update();
    }
    update(time,enemies) {
        let target = null;
        let closestDist = this.range;
        for(let i = 0; i < enemies.length; i++) {
            let enemy = enemies[i];
            const dist = Phaser.Math.Distance.Between(
                this.x, this.y, enemy.x, enemy.y
            );

            if (dist < closestDist) {
                closestDist = dist;
                target = enemy;
            }
        }
        if (target && time > this.lastFired + this.fireRate) {
                this.shoot(target);
                this.lastFired = time;
        }
        if (target) {
            const angle = Phaser.Math.Angle.Between(
                this.x, this.y,
                target.x, target.y
            );
            const deg = Phaser.Math.RadToDeg(angle);
            if (deg > -45 && deg <= 45) {
                this.changeDirection('RIGHT');
            } else if (deg > 45 && deg <= 135) {
                this.changeDirection('DOWN');
            } else if (deg <= -45 && deg > -135) {
                this.changeDirection('UP');
            } else {
                this.changeDirection('LEFT');
            }
        }
        if (this.arrows.length > 0) {
            for (let i = 0; i < this.arrows.length; i++) {
                this.arrows[i].update();
            }
        }
    }
}
