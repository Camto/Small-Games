class Brick {
	
	constructor(x, y) {
		
		this.x = x;
		this.max_y = y - 20; // how high you can bump it.
		this.orig_y = y; // starting y pos.
		this.y = y; // current y pos.
		this.w = 20;
		this.h = 20;
		
		this.collision = new Collision(this.x, this.y, this.w, this.h);
		
	}
	
	update() {
		
		this.collision = new Collision(this.x, this.y, this.w, this.h);
		
		if(this.y < this.orig_y && !this.collision.collide(you.collision)) { // make the brick go down if it's too high.
			
			this.y += 1; // boop!
			
		}
		
	}
	
	draw() {
		
		screen.rect(this.x, this.y, this.w, this.h, "red"); // draw a red rectangle.
		
	}
	
	bump() {
		
		if(this.y > this.max_y) {
			
			this.y -= 3; // bump it up a little.
			return true; // bump successfull!
			
		} else {
			
			return false; // couldn't bump heighter!
			
		}
		
	}
	
}