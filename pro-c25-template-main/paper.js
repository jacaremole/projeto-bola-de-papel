class Paper{
    constructor(x,y){
        this.x=x;
		this.y=y;
        this.image=loadImage("paper.png")
        var options={
         isstatic:false,
         restitution:0.3,
        friction:0,
        density:1.2
      }
      World.add(world, this.body);
    }
}
display()
{
var posX =this.positionX;
var posY= this.positionY;
image(this.image);


}