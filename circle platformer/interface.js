function interface(text, buttons, show_game) {
	
	this.text = text;
	this.buttons = buttons;
	
	this.show_game = show_game;
	
}

interface.prototype = {
	
	update: function(mouse_x, mouse_y, clicking) {
		
		if(clicking) {
			
			for(var count = 0; count < this.buttons.length; count++) {
				
				if(this.buttons[count].hover(mouse_x, mouse_y) && this.buttons[count].show_req()) {
					
					return this.buttons[count].click();
					
				}
				
			}
			
		}
		
		return false;
		
	},
	
	draw: function(canvas, pencil) {
		
		for(var count = 0; count < this.text.length; count++) {
			
			this.text[count].render(pencil);
			
		}
		
		for(count = 0; count < this.buttons.length; count++) {
			
			this.buttons[count].render(pencil);
			
		}
		
	}
	
}