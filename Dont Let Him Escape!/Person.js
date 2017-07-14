function Person(x, y) {
	
	this.x = x;
	this.y = y;
	this.w = 32;
	this.h = 64;
	
	this.box = new Polygon(this.x, this.y, this.x + this.w, this.y, this.x + this.w, this.y + this.h, this.x, this.y + this.h);
	
	this.speed = Math.random() * 2 - 1; // How fast the person is walking
	this.timer = Math.round(Math.random() * 90) + 30; // If timer is on and speed is nonzero, the person is walking, if the timer in on but the speed is zero, then the person's waiting
	this.walk_timer = 45; // Footstep timer
	
}

Person.prototype = {
	
	draw: function(canvas) {
		
		canvas.sprite(this.x, this.y, this.w, this.h, "Person");
		
	},
	
	update: function() {
		
		if(this.speed) { // Footsteps!
			
			this.walk_timer--;
			
			if(!this.walk_timer) { // Stepping time!
				
				Footstep.play();
				
				this.walk_timer = 45;
				
			}
			
		} else {
			
			this.walk_timer = 45;
			
		}
		
		if(this.timer) { // Timer and moving
			
			this.timer--;
			this.box.move(this.speed, 0);
			this.x += this.speed;
			
			var leaving = false;
			for(var count = 0; count < walls.length; count++) {
				
				if(this.box.collide(walls[count].box)) {
					
					leaving = true;
					
				}
				
			}
			for(count = 0; count < separators.length; count++) {
				
				if(this.box.collide(separators[count].box)) {
					
					leaving = true;
					
				}
				
			}
			
			if(leaving) { // If the person is trying to leave the room
				
				this.timer = 0;
				this.box.move(-this.speed, 0);
				this.x -= this.speed;
				
			}
			
		} else if(this.speed) { // Stop walking
			
			this.speed = 0;
			this.timer = Math.round(Math.random() * 90) + 30;
			
		} else { // Start walking
			
			this.speed = Math.random() * 2 - 1;
			this.timer = Math.round(Math.random() * 90) + 30;
			
		}
		
	}
	
}