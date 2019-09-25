class Map{

    constructor(){
        this.tileImage = document.querySelector("#graveyard");
        this.layer1 = graveyard.layer1;
        this.layer2 = graveyard.layer2;
        this.backGroundColor = "#65845C";
    }

    getBackColor(){
        return this.backGroundColor;
    }

    getTileImage(){
        return this.tileImage;
    }

    getLayers(){
        return [this.layer1,this.layer2];
    }

    getMapSize(){
        return {x:this.layer1[0].length,y:this.layer1.length}
    }

    getLayer2(){
        return this.layer2;
    }
}