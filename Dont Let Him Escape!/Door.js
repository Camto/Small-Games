function Door(x, y) {
	
	this.x = x;
	this.y = y;
	this.w = 32;
	this.h = 64;
	
	var bx = x + 32;
	var by = y;
	var bh = 64;
	
	this.box = new Polygon(bx, by, bx, by + bh);
	
	this.status = false;
	
}

Door.prototype = {
	
	draw: function(canvas) {
		
		if(this.status) {
			
			canvas.sprite(this.x, this.y, this.w, this.h, "Door");
			
		}
		
	},
	
	update: function() {
		
		var new_status = false;
		if(this.box.collide(thiefs[0].box)) {
			
			new_status = true;
			
		}
		
		if(this.status != new_status) {
			
			if(new_status == true) {
				
				Open_Door.play();
				
			} else {
				
				Close_Door.play();
				
			}
			
		}
		
		this.status = new_status;
		
	}
	
}