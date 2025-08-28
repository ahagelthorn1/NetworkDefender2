export class BeginWave extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.text = this.scene.add.text(this.x-80, this.y-16, "Begin Wave", {
            fontFamily: "pixel",
            fontSize: "32px",
            color: "#ffffff"
        });
        this.setInteractive();
        this.on('pointerdown', () => {
            this.beginWave();
            this.text.destroy();
            this.destroy();
        });
    }
    beginWave() {
        this.scene.WaveBar.waveInProgress = true;
    }
}
