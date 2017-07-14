function player(x, y) {
	
	thinmg.call(this, x + 1, y + 1, 18);
	cam_x = this.x;
	cam_y = this.y;
	
	this.yv = 0;
	this.ring_timer = 15;
	
}

player.prototype = Object.create(thinmg.prototype);
player.prototype.constructor = player;

player.prototype.update = function(mouse_x, mouse_y, mouse, released, canvas) {
	
	if(mouse) {
		
		let rel_x = mouse_x + cam_x - this.x;
		this.x += (rel_x ? rel_x/Math.abs(rel_x) : 0) * 2;
		
		let collided = false;
		for(let count = 0; count < ground.length; count++) {
			
			if(this.collide(ground[count])) {
				
				collided = true;
				this.y--;
				break;
				
			}
			
		}
		
		if(collided) {
			
			let collided = false;
			for(let count = 0; count < ground.length; count++) {
				
				if(this.collide(ground[count])) {
					
					collided = true;
					this.y--;
					break;
					
				}
				
			}
			
			if(collided) {
				
				let collided = false;
				for(let count = 0; count < ground.length; count++) {
					
					if(this.collide(ground[count])) {
						
						collided = true;
						this.y--;
						break;
						
					}
					
				}
				
				if(collided) {
					
					let collided = false;
					for(let count = 0; count < ground.length; count++) {
						
						if(this.collide(ground[count])) {
							
							collided = true;
							this.y--;
							break;
							
						}
						
					}
					
					if(collided) {
						
						let collided = false;
						for(let count = 0; count < ground.length; count++) {
							
							if(this.collide(ground[count])) {
								
								collided = true;
								this.y--;
								break;
								
							}
							
						}
						
						if(collided) {
							
							this.y += 5;
							this.x -= (rel_x ? rel_x/Math.abs(rel_x) : 0) * 2;
							
						}
						
					}
					
				}
				
			}
			
		}
		
	}
	
	this.yv += 0.25;
	this.y += this.yv;
	
	collided = false;
	for(let count = 0; count < ground.length; count++) {
		
		if(this.collide(ground[count])) {
			
			collided = true;
			this.y -= this.yv;
			this.yv = 0;
			break;
			
		}
		
	}
	
	cam_x = this.x - canvas.width / 2;
	cam_y = this.y - canvas.height / 2;
	
	cam_x = Math.max(Math.min(cam_x, level_width - canvas.width), 0);
	cam_y = Math.max(Math.min(cam_y, level_height - canvas.height), 0);
	
	this.ring_timer--;
	this.ring_timer = Math.max(this.ring_timer, 0);
	
	if(released && !this.ring_timer) {
		
		rings.push(new ring(this.x, this.y));
		this.ring_timer = 180;
		
	}
	
}