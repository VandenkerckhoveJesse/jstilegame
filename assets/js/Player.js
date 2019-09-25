const directions = {
    DOWN: 0,
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
};
class Player{
    constructor(location,username,direction){
        this.location = location;
        this.username = username;
        this.direction = direction;
    }

    getDirection(){
        return this.direction;
    }

    setDirection(direction){
        this.direction = direction;
    }

    getLocation(){
        return this.location;
    }

    setLocation(location){
        this.location = location;
    }

    getUsername(){
        return this.username;
    }

    moveUp(){
        this.location.y -= 1;
        this.direction = 'up';
    }
    moveDown(){
        this.location.y += 1;
        this.direction = 'down';
    }
    moveLeft(){
        this.location.x -= 1;
        this.direction = 'left';
    }
    moveRight(){
        this.location.x += 1;
        this.direction = 'right';
    }
}