export class Health extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
        this.text = this.scene.add.text(this.x, this.y-16, "03", {
            fontFamily: "pixel",
            fontSize: "32px",
            color: "#ffffff"
        });
    }
    changeHealthValue(value) {
        this.healthValue -= 1;
        if (this.healthvalue == 3) {
            this.text.setText("03");
        } else if (this.healthValue == 2) {
            this.text.setText("02");
        } else if (this.healthValue == 1) {
            this.text.setText("01");
        } else {
            this.text.setText("00");
        }
    }
}
