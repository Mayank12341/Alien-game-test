class Car{
    constructor (weight,speed) {
    this.x=50;
    this.y=200;
    this.car=createSprite(this.x,this.y,30,30);
    this.weight=weight;
    this.speed=6;
    // a random velocity will be assigned to the car that will make o
    this.car.velocityX=this.speed;
    this.car.shapeColor=color(255);
    
    }
 }
