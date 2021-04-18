class Sherlock{

    constructor(x,y){
        var options = {
            restitution:1,
            density:0.5,
            friction:1
        }
        this.x=x
        this.y=y
        this.body=Bodies.rectangle(this.x, this.y, 40, 40, options)
        World.add(world, this.body)

    }

    display()
    {
        push()
        rectMode(CENTER)
        rect(this.x, this.y, 40, 40);
        pop();

    }

}