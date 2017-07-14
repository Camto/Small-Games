function thinmg(x, y, r) {
	
	this.x = x;
	this.y = y;
	this.r = r;
	
}

thinmg.prototype = {
	
	collide: function(thinmg2) {
		
		var distance = Math.sqrt(((this.x - thinmg2.x) * (this.x - thinmg2.x)) + ((this.y - thinmg2.y) * (this.y - thinmg2.y)));
		
		return distance < (this.r + thinmg2.r);
		
	},
	
	render: function(x_offset, y_offset, pencil, filled, border) {
		
		if(!filled) {
			
			pencil.lineWidth = border;
			
		}
		
		pencil.beginPath();
		pencil.arc(this.x - x_offset, this.y - y_offset, this.r, 0, 2 * Math.PI);
		
		if(filled) {
			
			pencil.fill();
			
		} else {
			
			pencil.stroke();
			
		}
		
	}
	
}