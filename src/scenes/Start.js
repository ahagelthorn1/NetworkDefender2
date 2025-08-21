import { BuildSign } from './BuildSign.js';
export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    preload() {
        this.load.image('Map', 'assets/pngs/Level1.png');
        this.load.spritesheet('House', 'assets/pngs/House.png', {frameHeight: 164, frameWidth: 224});
        this.load.spritesheet('BuildSign', 'assets/pngs/BuildSign.png', {frameHeight:64, frameWidth:64});
        this.load.spritesheet('BuildHere', 'assets/pngs/BuildHere.png', {frameHeight:84, frameWidth:170});
        this.load.spritesheet('YesButton', 'assets/pngs/YesButton.png',{frameHeight:26,frameWidth:26});
        this.load.spritesheet('NoButton', 'assets/pngs/NoButton.png',{frameHeight:26,frameWidth:26});
    }
    defineBuildSigns() {
        const BuildSignCoordinates = [
            //Near the house
            [600,375], [675,375], [750,375], [610,280], [760,280],
            //Left side
            [450,360], [450,500], [330,500], [330,380], [140,380], [140,500], [330,590], [450,590], [210,680],
            //Right side
            [1000,280],[1150,410],[970,410], [900, 500], [1030,520], [1090,590], [1030,690]
        ];
        const BuildSigns = [];
        for (let i = 0; i < BuildSignCoordinates.length; i++) {
            let BuildSignX = BuildSignCoordinates[i][0];
            let BuildSignY = BuildSignCoordinates[i][1];
            let buildSign = new BuildSign(this,BuildSignX,BuildSignY,'BuildSign');
            BuildSigns.push(buildSign);
        }
        return BuildSigns;
    }
    create() {
        const HouseX = 690;
        const HouseY = 205;
        const BuildSignX = 600;
        const BuildSignY = 375;
        this.Map = this.add.tileSprite(1280/2, 720/2, 1280, 720, 'Map');
        this.House = this.add.sprite(HouseX,HouseY,'House');
        this.BuildSigns = this.defineBuildSigns();
        this.BuildHeres = [];
    }

    update() {
        console.log(this.BuildHeres.length);
    }

}
