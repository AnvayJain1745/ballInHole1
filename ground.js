class Ground{
    constructor( x,y,width,height) {
        var options = {
            isStatic:true,
            restitution:0.7,
            friction:1.0,
            density:1.2
        }
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.width=width;
        this.height=height
        

        World.add(world, this.body);
       
      }
      display(){
       var pos=this.body.position;
       var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
       rect(this.x,this.y,width,height);
       
        pop();
      }
}