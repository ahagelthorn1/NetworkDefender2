export class LevelBar extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.text = this.scene.add.text(this.x-38, this.y-12, "LVL.01", {
            fontFamily: "pixel",
            fontSize: "20px",
            color: "#ffffff"
        });
    }
    upLevel() {
        let strin = "LVL.";
        strin = strin + this.levelValue;
        this.text.destroy();
        this.text = this.scene.add.text(this.x-38, this.y-12, strin, {
            fontFamily: "pixel",
            fontSize: "20px",
            color: "#ffffff"
        });
    }
}
