import {Turret} from './Turret.js';
export class Button extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture,type,BuildHere) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.setInteractive();
        this.type = type;
        this.BuildHere = BuildHere;
        if (this.type == 'Yes') {
            this.on('pointerdown', () => {
                this.buildTurret();
            });
        } else {
            this.on('pointerdown', () => {
                this.closeMenu();
            });
        }
    }
    destroyBuildSign() {
        let index = this.scene.BuildSigns.indexOf(this.BuildHere.BuildSign);
        this.scene.BuildSigns.splice(index,1);
        this.BuildHere.BuildSign.destroy();
    }
    buildTurret() {
        let turret = new Turret(this.scene, this.BuildHere.x, this.BuildHere.y + this.scene.buildHereYOffset - 5,'Turret');
        this.scene.Turrets.push(turret);
        this.destroyBuildSign();
        this.scene.BuildHeres.splice(0,1);
        this.BuildHere.NoButton.destroy();
        this.BuildHere.destroy();
        this.destroy();
    }
    closeMenu() {
        this.BuildHere.YesButton.destroy();
        this.scene.BuildHeres.splice(0,1);
        this.BuildHere.destroy();
        this.destroy();
    }
}
