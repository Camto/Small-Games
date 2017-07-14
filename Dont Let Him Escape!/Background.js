function Background(texture, x, y, w, h) {
	
	this.texture = texture;
	
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
}

Background.prototype = {
	
	draw: function(canvas) {
		
		canvas.sprite(this.x, this.y, this.w, this.h, this.texture);
		
	}
	
}