class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		var option={
			restitution:0.3,
			friction:5,
			density:1,
			
		}
		this.body=Bodies.circle(this.y,this.y, 150, option)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push();
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(this.x,this.y,125)
			pop();
	}

}

