class Ball{
    constructor(x,y,width){
        var options={
            isStatic:true
        };
        this.body=Bodies.circle(x,y,width,options);
        this.width=width;
        this.height=width;
        
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
       ellipse(0,0,this.width,this.width);
        pop();
    }
}