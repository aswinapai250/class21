class Ground{
    constructor(x,y,w,h){
this.x = x
this.y = y
this.w = w
this.h = h,
this.color = "yellow"
var ground_option={
    isStatic:true
  }
  this.body =Bodies.rectangle(x,y,w,h,ground_option);
  World.add(world,this.body);
}
display(){
var pos = this.body.position;
rectMode(CENTER)
fill(this.color);
rect(pos.x,pos.y,this.w,this.h)
}

    
}