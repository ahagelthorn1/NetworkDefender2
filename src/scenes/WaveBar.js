export class WaveBar extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.text = this.scene.add.text(this.x-64, this.y-16, "Wave 1/5", {
            fontFamily: "pixel",
            fontSize: "32px",
            color: "#ffffff"
        });
        this.waveInProgress = false;
    }
    advanceWave() {
        this.waveValue += 1;
        if (this.waveValue <= 5) {
            const str = "Wave " + this.waveValue.toString(); + "/5";
            this.text.setText(str);
        }
    }
}
