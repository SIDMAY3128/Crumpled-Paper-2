class Ball {
    constructor(x,y,radius){
        this.radius = radius

        var options = {
            restitution:0.5,
            density:1
        }
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)

        this.paperImage = loadImage("paper.png")
    }
    display(){
        fill ("grey")
        imageMode (CENTER)
        //circle(this.body.position.x,this.body.position.y,this.radius*2)
        image(this.paperImage,this.body.position.x,this.body.position.y,50,50)
    }
    
}