function Wall(x, y, w, h, c) {
	
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	
	this.box = new Polygon(this.x, this.y, this.x + this.w, this.y + this.h);
	
	if(c) {
		
		this.colour = c;
		
	}
	
}

Wall.prototype = {
	
	draw: function(canvas) {
		
		canvas.rect(this.x - 2, this.y - 2, this.w + 4, this.h + 4, this.colour);
		
	}
	
}