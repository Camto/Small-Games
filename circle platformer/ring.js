function ring(x, y) {
	
	thinmg.call(this, x, y, 2);
	this.gone = false;
	
}

ring.prototype = Object.create(thinmg.prototype);
ring.prototype.constructor = ring;

ring.prototype.update = function() {
	
	this.r += 0.75;
	
	if(this.r >= Math.max(level_width, level_height)) {
		
		this.gone = true;
		
	}
	
}