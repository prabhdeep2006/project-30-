class ground {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
    this.body = Bodies.retangle(x,y,width,height);
    this.width=width;
    this.height=height;

    }
    display(){
        var y= this.body.position;
        push();
        rectMode(CENTER);
        rect(y.x,y.y,this.width,this.height);
        pop();
    }
}