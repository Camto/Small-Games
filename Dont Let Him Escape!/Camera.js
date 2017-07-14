function Camera(x, y) {
	
	this.x = x;
	this.y = y;
	this.w = 32;
	this.h = 16;
	
}

Camera.prototype = {
	
	draw: function(canvas) {
		
		canvas.sprite(this.x, this.y, this.w, this.h, "Camera");
		
	}
	
}