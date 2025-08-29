import { BuildSign } from './BuildSign.js';
import { Malware } from './Malware.js';
import { Arrow } from './Arrow.js';
import { SetPiece } from './SetPiece.js';
import { Health } from './Health.js';
import { Gold } from './Gold.js';
import { LevelBar } from './LevelBar.js';
import { WaveBar } from './WaveBar.js';
import { XPBar } from './XPBar.js';
import { BeginWave } from './BeginWave.js';
import { Card } from './Card.js';

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
        this.load.spritesheet('Turret', 'assets/pngs/Turret.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Malware', 'assets/pngs/Malware.png', { frameHeight: 94, frameWidth: 62 });
        this.load.spritesheet('Arrow', 'assets/pngs/Arrow.png', { frameHeight: 82, frameWidth: 64 });
        this.load.spritesheet('HealthBar', 'assets/pngs/HealthBar.png', { frameHeight: 32, frameWidth: 64 });
        //Setpieces
        this.load.spritesheet('BigBush', 'assets/pngs/BigBush.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('BigRock', 'assets/pngs/BigRock.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Flowers1', 'assets/pngs/Flowers1.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Flowers2', 'assets/pngs/Flowers2.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Flowers3', 'assets/pngs/Flowers3.png',
            { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Flowers4', 'assets/pngs/Flowers4.png',
            { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Grass1', 'assets/pngs/Grass1.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Grass2', 'assets/pngs/Grass2.png',
            { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Grass3', 'assets/pngs/Grass3.png',
            { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Lily1', 'assets/pngs/Lily1.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Lily2', 'assets/pngs/Lily2.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Lily3', 'assets/pngs/Lily3.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Logs', 'assets/pngs/Logs.png',
            { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Reeds1', 'assets/pngs/Reeds1.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Reeds2', 'assets/pngs/Reeds2.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('RightRock', 'assets/pngs/RightRock.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('SlantLog', 'assets/pngs/SlantLog.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('SmallBush', 'assets/pngs/SmallBush.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('UpLog', 'assets/pngs/UpLog.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('VioletFlower', 'assets/pngs/VioletFlower.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('WhiteFlower', 'assets/pngs/WhiteFlower.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('YellowFlower', 'assets/pngs/YellowFlower.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Fence', 'assets/pngs/Fence.png', { frameHeight: 76, frameWidth: 230 });
        this.load.spritesheet('HugeRocks', 'assets/pngs/HugeRocks.png', { frameHeight: 202, frameWidth: 60 });
        this.load.spritesheet('LeftRock', 'assets/pngs/LeftRock.png',
            { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('WaterRock', 'assets/pngs/WaterRock.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Tree', 'assets/pngs/Tree.png', { frameHeight: 64, frameWidth: 64 });
        this.load.spritesheet('Health','assets/pngs/Health.png', {frameHeight:32,frameWidth:82});
        this.load.spritesheet('LevelBar','assets/pngs/LevelBar.png',{frameHeight:32,frameWidth:80});
        this.load.spritesheet('Gold','assets/pngs/Gold.png',{frameHeight:32,frameWidth:104});
        this.load.spritesheet('WaveBar','assets/pngs/WaveBar.png',{frameHeight:32,frameWidth:144});
        this.load.spritesheet('XPBar', 'assets/pngs/XPBar.png', {frameHeight:18, frameWidth:10});
        this.load.spritesheet('BeginWave', 'assets/pngs/BeginWave.png', {frameHeight:16, frameWidth:64});
        this.load.image('CardBackground', 'assets/pngs/CardBackground.png');
        this.load.spritesheet('Card', 'assets/pngs/Card.png', {frameHeight:186, frameWidth:153});

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
        let y_offset = 150;
        let last_l_y = 720;
        let last_r_y = 720;
        let tmp_malware;
        for (let i = 0; i < NUM_MALWARES; i++) {
            if (i % 2 == 0) {
                const x = 280
                tmp_malware = new Malware(this, x, last_l_y + y_offset, 'Malware');
                tmp_malware.type = "left";
                last_l_y = last_l_y + y_offset;
            } else {
                const x = 1100;
                tmp_malware = new Malware(this, x, last_r_y + y_offset, 'Malware');
                tmp_malware.type = "right";
                last_r_y = last_r_y + y_offset;
            }
            this.malwares.push(tmp_malware);
            tmp_malware.changeDirection("UP");
            tmp_malware.scale = .5;
        }
    }
    moveMalwares(speed) {
        for (let i = 0; i < this.malwares.length; i++) {
            this.malwares[i].move(speed);
        }
    }
    makeObj(x, y, texture) {
        return new SetPiece(this, x, y, texture);
    }
    makeSet(info) {
        let arra = [];
        for (let i = 0; i < info.length; i++) {
            arra.push(this.makeObj(info[i][0], info[i][1], info[i][2]));
        }
        return arra;
    }
    establishSetPieces() {
        //This all should have been JSON, too late
        const fence = new SetPiece(this, 475, 180, 'Fence');
        const uplog = new SetPiece(this, 920, 250, 'UpLog');
        uplog.setRotation(.25);
        //Waterplants
        this.waterPlantInfo = [
            [440, 160, 'Lily1'],
            [30, 70, 'Lily1'],
            [950, 160, 'Lily2'],
            [520, 100, 'Lily3'],
            [1260, 100, 'Reeds1'],
            [475, 160, 'Reeds1'],
            [30, 100, 'Reeds1'],
            [455, 120, 'Reeds2'],
            [1020, 100, 'Reeds2'],
            [890, 160, 'Reeds2']
        ];
        this.waterPlants = this.makeSet(this.waterPlantInfo);

        //Bushes
        this.bushInfo = [
            [1110, 260, 'SmallBush'],
            [850, 630, 'SmallBush'],
            [1170, 520, 'SmallBush'],
            [110, 610, 'SmallBush'],
            [210, 470, 'SmallBush'],
            [710, 620, 'BigBush'],
            [580, 690, 'BigBush'],
            [640, 410, 'BigBush'],
            [240, 170, 'BigBush'],
            [1130, 70, 'BigBush']
        ];
        this.bushes = this.makeSet(this.bushInfo);
        //Logs
        this.logInfo = [
            [830, 240, 'Logs'],
            [1260, 260, 'SlantLog'],
            [750, 590, 'SlantLog'],
            [30, 640, 'SlantLog'],
            [1190, 30, 'SlantLog']
        ];
        this.logs = this.makeSet(this.logInfo);
        this.logs.push(uplog);
        //Rocks
        const hugeRocks = new SetPiece(this, 1250, 620, 'HugeRocks');
        hugeRocks.flipX = true;
        this.rockInfo = [
            [1220, 290, 'LeftRock'],
            [270, 510, 'LeftRock'],
            [430, 310, 'LeftRock'],
            [580, 550, 'LeftRock'],
            [20, 700, 'LeftRock'],
            [1020, 370, 'BigRock'],
            [860, 570, 'BigRock'],
            [1170, 660, 'BigRock'],
            [330, 200, 'BigRock'],
            [1110, 30, 'BigRock'],
            [490, 80, 'WaterRock']
        ];
        this.rocks = this.makeSet(this.rockInfo);
        this.rocks.push(hugeRocks);
        //Grass
        this.grassInfo = [
            [1190,240,'Grass1'],
            [780,110,'Grass1'],
            [1000,210,'Grass1'],
            [1240, 170, 'Grass1'],
            [1100, 430, 'Grass1'],
            [900,600,'Grass1'],
            [660,500,'Grass1'],
            [60,610, 'Grass1'],
            [880,250,'Grass2'],
            [970,380, 'Grass2'],
            [150, 610, 'Grass2'],
            [60, 700, 'Grass2'],
            [200,430,'Grass2'],
            [160,280,'Grass2'],
            [260,200,'Grass2'],
            [1040,30,'Grass3'],
            [1240,30,'Grass3'],
            [920,280,'Grass3'],
            [1030,170,'Grass3'],
            [1250,220,'Grass3'],
            [1170,380,'Grass3'],
            [860,510, 'Grass3'],
            [880,700,'Grass3'],
            [1150,600,'Grass3'],
            [760,510, 'Grass3'],
            [770, 640, 'Grass3'],
            [530,640,'Grass3'],
            [440,690,'Grass3'],
            [630,400, 'Grass3'],
            [210, 640, 'Grass3'],
            [370,300,'Grass3'],
            [100,200,'Grass3']
        ];
        this.grasses = this.makeSet(this.grassInfo);
        //Flowers
        this.flowerInfo = [
            [1030,420,'VioletFlower'],
            [1020,590,'VioletFlower'],
            [670,610,'VioletFlower'],
            [360,690, 'VioletFlower'],
            [580,460,'VioletFlower'],
            [250,440, 'VioletFlower'],
            [350,270,'VioletFlower'],
            [1120,200,'YellowFlower'],
            [850,400,'YellowFlower'],
            [850,670,'YellowFlower'],
            [1120, 520,'YellowFlower'],
            [640,530,'YellowFlower'],
            [530,700,'YellowFlower'],
            [170,440, 'YellowFlower'],
            [170,440, 'YellowFlower'],
            [250,280, 'YellowFlower'],
            [1150,270,'WhiteFlower'],
            [800,450,'WhiteFlower'],
            [950,700,'WhiteFlower'],
            [1150,560,'WhiteFlower'],
            [650,650,'WhiteFlower'],
            [530,615,'WhiteFlower'],
            [580,420,'WhiteFlower'],
            [220,610,'WhiteFlower'],
            [290,470, 'WhiteFlower'],
            [140,300, 'WhiteFlower'],
            [980, 10, 'WhiteFlower'],
            [1220,240,'Flowers1'],
            [900,540,'Flowers1'],
            [700,560,'Flowers1'],
            [590,610,'Flowers1'],
            [120,690,'Flowers1'],
            [190,510, 'Flowers1'],
            [160,240,'Flowers1'],
            [1170,200,'Flowers2'],
            [1100,370,'Flowers2'],
            [900,650,'Flowers2'],
            [770,570,'Flowers2'],
            [490,610,'Flowers2'],
            [90,640,'Flowers2'],
            [240,240,'Flowers2'],
            [1160,50, 'Flowers2'],
            [1150,200,'Flowers3'],
            [900,370,'Flowers3'],
            [1050,590,'Flowers3'],
            [320,450,'Flowers3'],
            [420,670,'Flowers3'],
            [790,620,'Flowers3'],
            [630,610,'Flowers3'],
            [200, 590,'Flowers3'],
            [190,170, 'Flowers3'],
            [1070,200,'Flowers4'],
            [1050,400,'Flowers4'],
            [1040,570,'Flowers4'],
            [270,400,'Flowers4'],
            [700,470,'Flowers4'],
            [490,650,'Flowers4'],
            [590,440,'Flowers4'],
            [170,670,'Flowers4'],
            [140,170,'Flowers4'],
            [1090,50,'Flowers4']
        ];
        this.flowers = this.makeSet(this.flowerInfo);
        //Trees
        this.treeInfo = [
            [1050,-5,'Tree'],
            [1240,190,'Tree'],
            [960,230,'Tree'],
            [1280,380,'Tree'],
            [700,510,'Tree'],
            [0,430,'Tree'],
            [50,250,'Tree']
        ];
        this.trees = this.makeSet(this.treeInfo);
    }
    establishUI() {
        this.Health = new Health(this,50,50,'Health');
        this.Health.healthValue = 3;
        this.Gold = new Gold(this, 170,50, 'Gold');
        this.Gold.goldValue = 100;
        this.LevelBar = new LevelBar(this, 290,50,'LevelBar');
        this.LevelBar.levelValue = 1;
        this.WaveBar = new WaveBar(this, 90, 120, 'WaveBar');
        this.WaveBar.waveValue = 1;
        this.XPBar = new XPBar(this, 320, 50, 'XPBar');
        this.XPBar.XPValue = 0;
        this.Begin = new BeginWave(this, 720, 690, 'BeginWave');
        this.Begin.scale = 3;
    }
    getHealth() {
        return this.Health.healthValue;
    }
    setHealth(value) {
        this.Health.changeHealthValue(value);
    }
    getGold() {
        return this.Gold.goldValue;
    }
    setGold(value) {
        this.Gold.changeGold(value);
    }
    getWave() {
        return this.WaveBar.waveValue;
    }
    advanceWave() {
        this.WaveBar.advanceWave();
    }
    getXP() {
        return this.XPBar.XPValue;
    }
    setXP(value) {
        this.XPBar.setXP(value);
    }
    cardLookUp(name,level) {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].name == name) {
                if (this.cards[i].level == level) {
                    return this.cards[i]
                }
            }
        }
    }
    determinePossibleCards() {
        let out_arr = [];
        for (let i = 0; i < this.activeCards.length; i++) {
            if(this.activeCards[i].level != 4) {
                out_arr.push(this.cardLookUp(this.activeCards[i].name, this.activeCards[i].level + 1));
            }
        }
        return out_arr;
    }
    getThreeIndices(max) {
        const numbers = new Set();
        while (numbers.size < 3) {
            let num = Math.floor(Math.random() * (max + 1));
            numbers.add(num);
        }
        return [...numbers];
    }
    pickThreeCards() {
        let possibleCards = this.determinePossibleCards();
        let threeCards = [];
        let indices = this.getThreeIndices(possibleCards.length-1);
        threeCards = [possibleCards[indices[0]],possibleCards[indices[1]],possibleCards[indices[2]]]
        return threeCards;
    }
    fadeToBlack() {
        this.cardBackground = this.add.tileSprite(1280/2, 720 / 2, 1280,720, 'CardBackground');
        this.cardBackground.setDepth(20);
        this.cardBackground.setAlpha(.75);
    }
    generateCards(names) {
        let k = 0;
        let out_arr = [];
        let strin;
        let tmp_card;
        let card_shell;
        for (let i = 0; i < names.length; i++) {
            for (let j = 0; j < 5; j++) {
                strin = names[i] + j.toString();
                tmp_card = new Card(this,500,350,'Card',j,names[i]);
                tmp_card.setInteractive();
                tmp_card.anims.create({
                    key: strin,
                    frames: this.anims.generateFrameNumbers('Card', { start: k, end: k }),
                    frameRate: 10,
                    repeat: -1
                });
                tmp_card.play(strin);
                if (j == 0) {
                    card_shell = new Card(this,-100,-100,'Card',-1,names[i]);
                    card_shell.anims.create({
                        key: strin,
                        frames: this.anims.generateFrameNumbers('Card', { start: k, end: k }),
                        frameRate: 10,
                        repeat: -1
                    });
                    card_shell.play(strin);
                    this.activeCards.push(card_shell);
                }
                out_arr.push(tmp_card);
                k += 1;
            }
        }
        return out_arr;
    }
    create() {
        this.activeCards = [];
        const STARTING_GOLD = 120;
        const HouseX = 690;
        const HouseY = 205;
        const NUM_MALWARES = 50;
        this.setPieces = [];
        this.Map = this.add.tileSprite(1280 / 2, 720 / 2, 1280, 720, 'Map');
        this.InitializeStats(STARTING_GOLD);
        this.establishSetPieces();
        this.House = this.add.sprite(HouseX, HouseY, 'House');
        this.BuildSigns = this.defineBuildSigns();
        this.generateMalwares(NUM_MALWARES);
        this.establishUI();
        this.levelUp = false;
        this.names = ['PenetrationTesting','Anti-Malware','Encryption','Anti-Virus','SecurePasswords'];
        this.cards = this.generateCards(this.names);
    }
    showThreeCards(three_cards) {
        this.one = three_cards[0];
        this.two = three_cards[1];
        this.three = three_cards[2];
        this.one.setInteractive();
        this.one.visible = true;
        this.one.x = 400;
        this.two.setInteractive();
        this.two.visible = true;
        this.two.x = 700;
        this.three.setInteractive();
        this.three.visible = true;
        this.three.x = 1000;
    }
    checkLevelUp() {
        if(this.levelUp) {
            this.levelUp = false;
            this.WaveBar.waveInProgress = false;
            this.fadeToBlack();
            let three_cards = this.pickThreeCards();
            this.showThreeCards(three_cards);
        }
    }
    closeCardMenu() {
        this.cardBackground.destroy();
        this.one.visible = false;
        this.one.setInteractive(false);
        this.two.visible = false;
        this.two.setInteractive(false);
        this.three.visible = false;
        this.three.setInteractive(false);
        this.WaveBar.waveInProgress = true;
    }
    update(time, delta) {
        if (this.WaveBar.waveInProgress) {
            const speed = 50 * (delta / 1000);
            this.moveMalwares(speed);
            for (let i = 0; i < this.Turrets.length; i++) {
                this.Turrets[i].update(time, this.malwares);
            }
        }
        this.checkLevelUp();
    }

}
