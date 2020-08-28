class Ball{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            restitution:0.7,
            friction:1.0,
            density:0.5
        }
        this.body = Bodies.circle(200,600, radius, options);
        this.radius = radius;
        World.add(world, this.body);
       
      }
      display(){
       var pos=this.body.position;
       var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
       ellipse(0,0,this.radius,this.radius);
        pop();
      }
}