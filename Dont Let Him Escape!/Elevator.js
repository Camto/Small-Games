function Elevator(x, y) {
	
	this.x = x;
	this.y = y;
	this.w = 64;
	this.h = 96;
	
}

Elevator.prototype = {
	
	draw: function(canvas) {
		
		canvas.sprite(this.x, this.y, this.w, this.h, "Elevator");
		
	}
	
}