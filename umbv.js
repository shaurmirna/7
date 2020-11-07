class Ground {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,options);
      this.image=loadImage("images/walking_1.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
      image(this.image, 0, 0);
    }
  };