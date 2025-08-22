import { BuildSign } from './BuildSign.js';
import { Malware } from './Malware.js';
import { Arrow } from './Arrow.js';
export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
        this.load.image('Map', 'assets/pngs/Level1.png');
        this.load.spritesheet('House', 'assets/pngs/House.png', { frameHeight: 164, frameWidth: 224 });
        this.load.spritesheet('BuildSign', 'assets/pngs/BuildSign.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('BuildHere', 'assets/pngs/BuildHere.png', { frameHeight: 84, frameWidth: 170 });
        this.load.spritesheet('YesButton', 'assets/pngs/YesButton.png', { frameHeight: 26, frameWidth: 26 });
        this.load.spritesheet('NoButton', 'assets/pngs/NoButton.png', { frameHeight: 26, frameWidth: 26 });
        this.load.spritesheet('Turret', 'assets/pngs/Turret.png', {frameHeight:64, frameWidth:64 });
        this.load.spritesheet('Malware', 'assets/pngs/Malware.png',{frameHeight:94,frameWidth:62});
        this.load.spritesheet('Arrow', 'assets/pngs/Arrow.png',{frameHeight:82, frameWidth:64});
    }
    defineBuildSigns() {
        const BuildSignCoordinates = [
            //Near the house
            [600, 375], [675, 375], [750, 375], [610, 280], [760, 280],
            //Left side
            [450, 360], [450, 500], [330, 500], [330, 380], [140, 380], [140, 500], [330, 590], [450, 590], [210, 680],
            //Right side
            [1000, 280], [1150, 410], [970, 410], [900, 500], [1030, 520], [1090, 590], [1030, 690]
        ];
        const BuildSigns = [];
        for (let i = 0; i < BuildSignCoordinates.length; i++) {
            let BuildSignX = BuildSignCoordinates[i][0];
            let BuildSignY = BuildSignCoordinates[i][1];
            let buildSign = new BuildSign(this, BuildSignX, BuildSignY, 'BuildSign');
            BuildSigns.push(buildSign);
        }
        return BuildSigns;
    }
    InitializeStats(STARTING_GOLD) {
        this.BuildHeres = [];
        this.Turrets = [];
        this.gold = STARTING_GOLD;
        this.buildHereYOffset = 50;
    }
    generateMalwares(NUM_MALWARES) {
        this.malwares = [];
        let y_offset = 280;
        let last_y = 720;
        for (let i = 0; i < NUM_MALWARES; i++) {
            let tmp_malware = new Malware(this, 280, last_y + y_offset, 'Malware');
            last_y = last_y + y_offset;
            this.malwares.push(tmp_malware);
            tmp_malware.changeDirection("UP");
            tmp_malware.scale = .5;
        }
    }
    moveMalwares(speed) {
        for (let i = 0; i < this.malwares.length; i++) {
            if (this.malwares[i].step1Done == false) {
                this.malwares[i].step1(speed);
            } else if (this.malwares[i].step2Done == false) {
                this.malwares[i].step2(speed);
            } else if (this.malwares[i].step3Done == false) {
                this.malwares[i].step3(speed);
            } else if (this.malwares[i].step4Done == false) {
                this.malwares[i].step4(speed);
            } else if (this.malwares[i].step5Done == false) {
                this.malwares[i].step5(speed);
            } else if (this.malwares[i].step6Done == false) {
                this.malwares[i].step6(speed);
            } else if (this.malwares[i].step7Done == false) {
                this.malwares[i].step7(speed);
            } else if (this.malwares[i].step8Done == false) {
                this.malwares[i].step8(speed);
            } else if (this.malwares[i].step9Done == false) {
                this.malwares[i].step9(speed);
            }
        }
    }
    create() {
        const STARTING_GOLD = 120;
        const HouseX = 690;
        const HouseY = 205;
        const NUM_MALWARES = 50;
        this.Map = this.add.tileSprite(1280 / 2, 720 / 2, 1280, 720, 'Map');
        this.House = this.add.sprite(HouseX, HouseY, 'House');
        this.BuildSigns = this.defineBuildSigns();
        this.InitializeStats(STARTING_GOLD);
        this.generateMalwares(NUM_MALWARES);
    }

    update(time, delta) {
        const speed = 50 * (delta / 1000);
        this.moveMalwares(speed);
        for (let i = 0; i < this.Turrets.length; i++) {
            this.Turrets[i].update(time,this.malwares);
        }
    }

}
