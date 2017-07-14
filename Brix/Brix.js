function Init() {
	
	screen = new Canvas(200, 200);
	
	you = new Player();
	
	ground = [];
	bricks = [];
	
	level = [
		
		"##########",
		"#        #",
		"#    *   #",
		"#        #",
		"#        #",
		"#        #",
		"#  ***   #",
		"#       *#",
		"#* @     #",
		"##########"
		
	];
	
	for(var y = 0; y < level.length; y++) { // row by row!
		
		for(var x = 0; x < level[y].length; x++) { // item #x of the current row.
			
			switch(level[y][x]) { // do stuff depending on what tile we're looking at.
				
				case " ": break; // if it's air, leave it alone.
				
				case "#": ground.push(new Floor((x * 20), (y * 20))); break; // add a floor tile at the position we're looking at.
				
				case "*": bricks.push(new Brick((x * 20), (y * 20))); break; // add a new brick!
				
				case "@": you.x = (x * 20) + 1; you.y = (y * 20) + 1; break; // teleport the player to his strating position.
				
			}
			
		}
		
	}
	
}

function frame() {
	
	screen.clear_screen();
	
	you.update();
	
	you.draw();
	for(var count = 0; count < ground.length; count++) {
		
		ground[count].draw();
		
	}
	for(count = 0; count < bricks.length; count++) {
		
		bricks[count].update();
		bricks[count].draw();
		
	}
	
	screen.text("By: www.ben.pr@gmail.com", screen.width / 2, screen.height / 4, "blue", 13, "Courier", "bold");
	
	window.requestAnimationFrame(frame);
	
}

function Begin() {
	
	Init();
	
	window.requestAnimationFrame(frame);
	
}

Begin();