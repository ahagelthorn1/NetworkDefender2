import {BuildHere} from './BuildHere.js';
export class BuildSign extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.setInteractive();
        this.on('pointerdown', () => {
            this.BuildHereUI();
        });
    }
    DestroyOtherBuildHereMenus() {
        if (this.scene.BuildHeres.length > 0) {
            let toDestroy = this.scene.BuildHeres[0];
            toDestroy.YesButton.destroy();
            toDestroy.NoButton.destroy();
            this.scene.BuildHeres.splice(0,1);
            toDestroy.destroy();
        }
    }
    BuildHereUI() {
        this.DestroyOtherBuildHereMenus();
        this.buildHere = new BuildHere(this.scene, this.x, this.y - this.scene.buildHereYOffset, 'BuildHere',this);
    }
}
