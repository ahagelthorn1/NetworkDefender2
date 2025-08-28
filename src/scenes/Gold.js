export class Gold extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.text = this.scene.add.text(this.x-16, this.y-16, "100", {
            fontFamily: "pixel",
            fontSize: "32px",
            color: "#ffffff"
        });
    }
    changeGold(value) {
        this.goldValue = value;
        this.text.setText(this.goldValue);
    }
}
