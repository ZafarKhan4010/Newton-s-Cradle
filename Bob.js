class Bob {

constructor(x, y) {


var options = {
    isStatic:false,
    restitution:1,
    friction:0.02,
    density:20
}


this.body = Bodies.circle(x, y, 39, options);

this.width = 78;

this.height = 78;



World.add(world, this.body);

}



display() {

var angle = this.body.angle;


push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
imageMode(CENTER);
ellipse(0,0, this.radius,this.radius);
pop();


}


};