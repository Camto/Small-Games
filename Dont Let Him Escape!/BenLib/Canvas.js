class Canvas {
	
	constructor(width, height) {
		
		this.canvas = document.createElement("canvas");
		this.canvas.width = this.width = width;
		this.canvas.height = this.height = height;
		this.draw = this.canvas.getContext("2d");
		this.PICS = {};
		
		this.draw.imageSmoothingEnabled = false; // Good for pixel-art!
		
		this.canvas.style.position = "absolute";
		this.canvas.style.margin = "auto";
		this.canvas.style.top = "0px";
		this.canvas.style.left = "0px";
		this.canvas.style.bottom = "0px";
		this.canvas.style.right = "0px";
		// this.canvas.style.border = "5px solid black"; // Not necessary, but looks good.
		// this.canvas.style.backgroundColor = "black"; // Optional.
		// this.canvas.style.cursor = "none"; // Also optional.
		
		
		document.body.appendChild(this.canvas);
		
	}
	
	rect(x, y, width, height, colour) {
		
		this.draw.fillStyle = colour;
		this.draw.fillRect(x, y, width, height);
		
	}
	
	circle(x, y, radius, colour) {
		
		this.draw.beginPath();
		this.draw.fillStyle = colour;		
		this.draw.arc(x, y, radius, 0, 2 * Math.PI);
		this.draw.fill();
		this.draw.closePath();
		
	}
	
	text(text, x, y, colour, size, font, extras) {
		
		if(extras != undefined) {
			
			this.draw.font = extras + " " + size + "px " + font;
			
		} else {
			
			this.draw.font = size + "px " + font;
			
		}
		
		this.draw.fillStyle = colour;
		this.draw.textAlign = "center";
		this.draw.fillText(text, x, y + (size / 2));
		
	}
	
	add_PICS() {
		
		for(var count = 0; count < arguments.length; count++) {
			
			this.PICS[arguments[count].replace(/ /g, "_")] = new Image();
			this.PICS[arguments[count].replace(/ /g, "_")].src = "PICS/" + arguments[count] + ".png";
			
		}
		
	}
	
	sprite(x, y, width, height, sprite) {
		
		this.draw.drawImage(this.PICS[sprite], x, y, width, height);
		
	}
	
	sfs(sprite_x, sprite_y, sprite_width, sprite_height, x, y, width, height, sprite_sheet) {
		
		this.draw.drawImage(this.PICS[sprite_sheet], (sprite_x - 1) * sprite_width, (sprite_y - 1) * sprite_height, sprite_width, sprite_height, x, y, width, height);
		
	}
	
	clear_screen() {
		
		this.draw.clearRect(0, 0, this.width, this.height);
		
	}
	
}