function text(x, y, canvas, data, show_req) {
	
	this.x = x * canvas.width;
	this.y = y * canvas.height;
	
	this.text = data[0];
	this.size = data[1];
	this.font = data[2];
	if(data[3]) {
		
		this.extras = data[3];
		
	} else {
		
		this.extras = false;
		
	}
	
	this.show_req = show_req || function() {return true;};
	
}

text.prototype.render = function(pencil) {
	
	if(this.show_req()) {
		
		if(this.extras) {
			
			pencil.font = this.extras + " " + this.size + "px " + this.font;
			
		} else {
			
			pencil.font = this.size + "px " + this.font;
			
		}
		
		pencil.fillText(this.text, this.x, this.y + this.size / 4);
		
	}
	
}

function button(x, y, w, h, canvas, click, show_req) {
	
	this.x = x * canvas.width - w / 2;
	this.y = y * canvas.height - h / 2;
	this.w = w;
	this.h = h;
	
	this.click = click;
	
	this.show_req = show_req || function() {return true;};
	
}

button.prototype = {
	
	render: function(pencil) {
		
		if(this.show_req()) {
			
			pencil.fillRect(this.x, this.y, this.w, this.h);
			
		}
		
	},
	
	hover: function(mouse_x, mouse_y) {
		
		return ((this.x < (mouse_x)) && ((this.x + this.w) > mouse_x) && (this.y < (mouse_y)) && ((this.y + this.h) > mouse_y));
		
	}
	
}