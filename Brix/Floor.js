class Floor {
	
	constructor(x, y) {
		
		this.x = x;
		this.y = y;
		this.w = 20;
		this.h = 20;
		
		this.collision = new Collision(this.x, this.y, this.w, this.h);
		
	}
	
	draw() {
		
		screen.rect(this.x, this.y, this.w, this.h, "green");
		
	}
	
}