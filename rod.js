class rod {
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,bodyB:bodyB,
            stiffness:0.02,
            length:10
        }
        this.rod=Constraint.create(options);
        World.add(world,this.rod)
    }
    display(){
       var pointA=this.rod.bodyA.position;
       var pointB=this.rod.bodyB.position;
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y); 
    }
}