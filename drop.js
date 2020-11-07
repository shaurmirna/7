class Drop{
    constructor(x,y){
        var options ={
            restitution: 0.8,
            isStatic : false,
            friction : 0.3,
            density : 10
        }
        this.body = Bodies.circle(x, y, 5, options);
      World.add(world, this.body);
    }
    update(){
if(this.body.position.y > height){
    Matter.Body.setPosition(this.body, {x:random(0,400) , y:random(0,400)})

}
    }
    display(){
        var pos =this.body.position;
        fill(18,2,130);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,4,4);  
    }

    
}