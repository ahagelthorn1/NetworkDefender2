import { Button } from './Button.js';
export class BuildHere extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture,BuildSign) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.BuildSign = BuildSign;
        this.YesButton = new Button(this.scene,this.x-80,this.y+40,'YesButton','Yes',this);
        this.NoButton = new Button(this.scene, this.x+80,this.y+40,'NoButton','No',this);
        this.scene.BuildHeres.push(this);
    }
}
