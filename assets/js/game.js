document.addEventListener("DOMContentLoaded",init);
let gameCanvas;
function init() {
    username = "jesse";
    gameCanvas = new Canvas(document.querySelector("#canvas"));

    gameCanvas.update();

    document.addEventListener("keydown", keyDown);
}

function keyDown(e){
    player = gameCanvas.getPlayer();
    map = gameCanvas.getMap();
    switch (e.keyCode){
        case 90:

            player.moveUp();
            if (collides(player, map)) {
                player.moveDown();
                player.setDirection('up');
            }
            gameCanvas.update();
            break;
        case 83:
            player.moveDown();
            if (collides(player, map)) {
                player.moveUp();
                player.setDirection('down');
            }
            gameCanvas.update();
            break;
        case 81:
            player.moveLeft();
            if (collides(player, map)) {
                player.moveRight();
                player.setDirection('left');
            }
            gameCanvas.update();
            break;
        case 68:
            player.moveRight();
            if (collides(player, map)) {
                player.moveLeft();
                player.setDirection('right');
            }
            gameCanvas.update();
            break;
    }
}

function collides(player, map){
    let inMap = checkIfInMap(player.getLocation(),map.getMapSize());
    if(!inMap){
        return true;
    }
    let collides = map.getLayer2()[player.getLocation().y][player.getLocation().x] >= 40;



    return (collides||!inMap);

}

function checkIfInMap(playerPosition, mapsize){
    if(playerPosition.x<0||playerPosition.y<0){
        return false;
    }
    if(playerPosition.x>mapsize.x-1|| playerPosition.y>mapsize.y-1){
        return false;
    }
    return true;
}

