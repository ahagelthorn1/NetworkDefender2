export class Arrow extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, angle, target,speed,turret) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.angle = angle;
        this.target = target;
        this.scale = .3;
        this.speed = speed;
        this.turret = turret;
        this.damage = 100;
        this.scene.physics.add.existing(this);
        this.scene.physics.add.overlap(this, this.target, () => {
            this.target.changeHealth(this.damage);
            if (this.target.health <= 0) {
                this.turret.target = null;
                this.scene.malwares.splice(this.scene.malwares.indexOf(this.target),1);
                this.target.eliminate();
                this.target = null;
            }
            this.eliminate();
        });

    }
    eliminate() {
        this.turret.arrows.splice(this.turret.arrows.indexOf(this),1);
        this.destroy();
    }
    update() {
        const dir = Phaser.Math.Angle.Between(this.x,this.y, this.target.x, this.target.y);
        this.setRotation(dir + Math.PI / 2);
        this.scene.physics.velocityFromRotation(dir, this.speed, this.body.velocity);
        if (!this.target.active) {
            this.eliminate();
        }
    }
}
