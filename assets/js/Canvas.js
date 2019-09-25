class Canvas{

    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.context.scale(20,20);
        this.context.imageSmoothingEnabled = false;

        this.map = new Map();
        this.player = new Player({x:20, y:20},"jesse",'left');

    }

    update(){
        let drawLocation = this.getDrawLocation(this.player);
        this.drawMap(this.map,drawLocation);
        this.drawPlayer(this.player,drawLocation, this.player.getDirection());
    }

    getDrawLocation(player){
        let location = player.getLocation();
        location = {x:location.x,y:location.y};
        location.x -= 7;
        location.y -= 3;
        this.correctLocation(location);
        return location;
    }

    correctLocation(location){
        let mapSize = this.map.getMapSize();
        if(location.x < 0){
            location.x = 0;
        }
        if(location.y< 0){
            location.y = 0;
        }
        if(location.x+15 > mapSize.x){
            location.x = mapSize.x-15;
        }
        if(location.y+8 > mapSize.y){
            location.y = mapSize.y -8;
        }

    }

    drawPlayers(players,drawLocation){
        for(let i = 0; i< players.length ;i++){
            let player = players[i];
            if(this.isPlayerInScreen(player.getLocation(),this.getDrawLocation(player))){
                this.drawPlayer(player,drawLocation, player.getDirection());
            }
        }
    }

    drawPlayer(player,drawLocation,direction){
        let offset = this.getOffset(player.getLocation(),drawLocation);
        let tilenumber;
        switch (direction){
            case 'down':
                tilenumber = 0;
                break;
            case 'left':
                tilenumber = 1;
                break;
            case 'right':
                tilenumber = 2;
                break;
            case 'up':
                tilenumber = 3;
                break;
        }
        this.printImage(offset.x,offset.y,tilenumber,document.querySelector("#knight"))
    }


    isPlayerInScreen(playerLocation,displayLocation){
        if(playerLocation.x>=displayLocation.x){
            if(playerLocation.y>=displayLocation.y){
                if(playerLocation.x<=(displayLocation.x+15)){
                    if(playerLocation.y<=(displayLocation.y+8)){
                        return true;
                    }
                }
            }
        }
        return false;
    }

    getOffset(playerLocation, displayLocation){
        let offset = {x:0,y:0};
        offset.x = playerLocation.x - displayLocation.x;
        offset.y = playerLocation.y - displayLocation.y;
        return offset;
    }

    drawMap(map,location){
        this.drawBackground(map.getBackColor());
        let layers = map.getLayers();
        for(let i =0; i<layers.length; i++){
            let layer = layers[i];
            this.drawLayer(layer, map.getTileImage(),location);
        }
        /*
        map.getLayers().forEach((layer)=>{
            this.drawLayer(layer,map.getTileImage(),location);
        })*/

    }

    drawLayer(layer,image,location){
        let matrix = layer;
        for(let canvasy=0; canvasy<8;canvasy++) {
            for (let canvasx = 0; canvasx < 15; canvasx++) {
                let value = matrix[canvasy+location.y][canvasx +location.x];
                if (value !== 0) {
                    this.printImage(canvasx, canvasy, value-1,image);
                }
            }

            /*this.matrix.forEach((row,canvasy) => {
                row.forEach((value,canvasx) => {


                    }
                })
            })*/
        }
    }
    printImage(locationx,locationy,tilenumber,image){
        let tilex = 0;
        let tiley = 0;
        tilex = tilenumber%10;
        tiley = (tilenumber-tilex)/10;
        tilex = tilex*16;
        tiley = tiley*16;
        this.context.drawImage(image,tilex,tiley,16,16,locationx,locationy,1,1);
        //this.context.drawImage(this.image,32, 0, 16, 16, 0, 0, 16, 16)
    }

    drawBackground(color){
        this.context.fillStyle = color;
        this.context.fillRect(0,0,this.canvas.width,this.canvas.height);
    }

    getPlayer(){
        return this.player;
    }

    isUsername(username1, username2){
        return username1 === username2;
    }

    getMap(){
        return this.map;
    }




}
/*for(let y=0; y<8;y++){
    for(let x=0; x<16;x++){
        this.context.drawImage(this.image,0,16,16,16,x,y,1,1);
    }
}*/