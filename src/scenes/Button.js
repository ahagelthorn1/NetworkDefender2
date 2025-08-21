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
    buildTurret() {
        console.log('Yes');
    }
    closeMenu() {
        this.BuildHere.YesButton.destroy();
        this.scene.BuildHeres.splice(0,1);
        this.BuildHere.destroy();
        this.destroy();
    }
}
