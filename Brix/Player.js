class Player {
	
	constructor() {
		
		this.x = 0;
		this.y = 0;
		this.xv = 0;
		this.yv = 0;
		this.w = 18; // the player has to be smaller than a block, for he must be able to fit under.
		this.h = 18;
		
		this.collision = new Collision(this.x, this.y, this.w, this.h);
		
	}
	
	update() { // physics!
		
		if(keys[key_codes.left] || keys[key_codes.a]) {
			
			this.xv -= 1;
			
		}
		
		if(keys[key_codes.right] || keys[key_codes.d]) {
			
			this.xv += 1;
			
		}
		
		this.xv *= 0.8;
		
		this.x += this.xv;
		
		var touching_world = false;
		this.collision = new Collision(this.x, this.y, this.w, this.h);
		
		for(var count = 0; count < ground.length; count++) {
			
			if(this.collision.collide(ground[count].collision)) {
				
				touching_world = true;
				
			}
			
		}
		
		for(count = 0; count < bricks.length; count++) {
			
			if(this.collision.collide(bricks[count].collision)) {
				
				touching_world = true;
				
			}
			
		}
		
		if(touching_world) {
			
			this.x -= this.xv;
			this.xv = 0;
			
		}
		
		this.y += this.yv;
		
		touching_world = false;
		this.collision = new Collision(this.x, this.y, this.w, this.h);
		this.collision_top = new Collision(this.x, this.y, this.w, 0);
		
		for(count = 0; count < ground.length; count++) {
			
			if(this.collision.collide(ground[count].collision)) {
				
				touching_world = true;
				
			}
			
		}
		
		for(count = 0; count < bricks.length; count++) {
			
			if(this.collision_top.collide(bricks[count].collision)) {
				
				if(!bricks[count].bump()) {
					
					touching_world = true;
					
				}
				
				while(this.collision.collide(bricks[count].collision)) {
					
					this.y++;
					this.collision.y++;
					
				}
				
			} else if(this.collision.collide(bricks[count].collision)) {
				
				touching_world = true;
				
			}
			
		}
		
		if(touching_world) {
			
			this.y -= this.yv;
			
			this.yv = 0;
			
			this.y++; // lower player one pixel (lower him so that if he was touching the ceiling he isn't anymore and if he was touching the floor let him go back in the floor so he can jump)
			
			// if the player's still touching the world, it means he's in the floor
			
			this.collision = new Collision(this.x, this.y, 18, 18);
			touching_world = false;
			
			for(count = 0; count < ground.length; count++) {
				
				if(this.collision.collide(ground[count].collision)) {
					
					touching_world = true;
					
				}
				
			}
			
			for(count = 0; count < bricks.length; count++) {
				
				if(this.collision.collide(bricks[count].collision)) {
					
					touching_world = true;
					
				}
				
			}
			
			if((keys[key_codes.up] || keys[key_codes.w]) && touching_world) {
				
				this.yv = -5; // jump!
				
			}
			
			this.y--;
      
		} else {
			
			this.yv += 0.25; // gravity rules!
			
			if(this.yv > 6) { // maximum fall speed
				
				this.yv = 6;
				
			}
			
		}
		
	}
	
	draw() {
		
		screen.rect(this.x, this.y, this.w, this.h, "black"); // draw a black rectangle at the player's pos.
		
	}
	
}
