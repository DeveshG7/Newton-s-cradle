class Rope {

constructor(bodyA, pointB){
  var options= {
   bodyA : bodyA,
   pointB : pointB,
   stiffnes : 0.04,
   lenght : 10
  }

this.pointB=pointB

this.rope = Constraint.create(options);

World.add(world, this.rope)

}

display(){

    var pointA = this.rope.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(3.5);
    line(pointA.x, pointA.y, pointB.x, pointB.y);

}

}