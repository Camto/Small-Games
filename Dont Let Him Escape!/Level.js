Array.prototype.level = function() {
	
	for(var y = 0; y < this[0].length; y++) {
		
		for(let x = 0; x < this[0][y].length; x++) {
			
			switch(this[0][y][x]) {
				
				case "_": cameras.push(new Camera(x * 32, y * 32)); break;
				
				case "@": persons.push(new Person(x * 32, y * 32 - 32)); break;
				
				case "#": thiefs.push(new Thief(x * 32, y * 32 - 32)); break;
				
				case "[": elevators.push(new Elevator(x * 32, y * 32 - 64)); break;
				
				case "U": doors.push(new Door(x * 32 - 32, y * 32 - 32)); break;
				
			}
			
		}
		
	}
	
	for(var y = 0; y < this[1].length; y++) {
		
		for(let x = 0; x < this[1][y].length; x++) {
			
			switch(this[1][y][x]) {
				
				case "L": props.push(new Background("Left_Chair", x * 32 + 4, y * 32 - 24, 24, 56)); break;
				
				case "/": props.push(new Background("Right_Chair", x * 32 + 4, y * 32 - 24, 24, 56)); break;
				
				case "-": props.push(new Background("Small_Table", x * 32, y * 32, 32, 32)); break;
				
				case "=": props.push(new Background("Large_Table", x * 32, y * 32, 64, 32)); break;
				
				case "W": props.push(new Background("Window", x * 32, y * 32, 64, 64)); break;
				
				case "U": props.push(new Wall(x * 32 - 1, y * 32, 2, 32, "#7d3e11")); break;
				
			}
			
		}
		
	}
	
	for(var y = 0; y < this[2].length; y++) {
		
		for(let x = 0; x < this[2][y].length; x++) {
			
			switch(this[2][y][x]) {
				
				case "#": background.push(new Background("Brick_BG", x * 32, y * 32, 32, 32)); break;
				
				case "$": background.push(new Background("Floor", x * 32, y * 32, 32, 32)); break;
				
				case "*": background.push(new Background("Stars", x * 32, y * 32, 32, 32)); break;
				
			}
			
		}
		
	}
	
	for(var y = 0; y < this[4].length; y++) {
		
		for(let x = 0; x < this[4][y].length; x++) {
			
			switch(this[4][y][x]) {
				
				case "-": walls.push(new Wall(x * 32, y * 32, 32, 0)); break;
				
				case "|": walls.push(new Wall(x * 32, y * 32, 0, 32)); break;
				
				case "/": walls.push(new Wall(x * 32, y * 32, 32, 0)); walls.push(new Wall(x * 32, y * 32, 0, 32)); break;
				
				case "#": separators.push(new Wall(x * 32, y * 32, 0, 32)); break;
				
				case "%": walls.push(new Wall(x * 32, y * 32, 32, 0)); separators.push(new Wall(x * 32, y * 32, 0, 32)); break;
				
			}
			
		}
		
	}
	
	this[5].wrap();
	
}