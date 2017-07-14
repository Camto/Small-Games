const levels = [
	
	[
		
		"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
		"OOOOOOOO]               [OOOOOOOOO",
		"OOO]                          [OOO",
		"O]                              [O",
		"O                                O",
		"O                                O",
		"O         ^ {O} X {O} X {O}      O",
		"O#   {OOOOOOOOOOOOOOOOOOOOO}     O",
		"O}  {OOOOOOOOOOOOOOOOOOOOOOO}   {O",
		"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
		
	]
	
];

function load_level(level_data) {
	
	level_width = level_data[0].length * 40;
	level_height = level_data.length * 40;
	
	ground = [];
	spikes = [];
	monsters = [];
	
	rings = [];
	
	for(var y = 0; y < level_data.length; y++) {
		
		for(var x = 0; x < level_data[y].length; x++) {
			
			switch(level_data[y][x]) {
				
				case "O": ground.push(new thinmg(x * 40 + 20, y * 40 + 20, 20)); break;
				
				case "{": ground.push(new thinmg(x * 40 + 40, y * 40 + 40, 20)); break;
				
				case "}": ground.push(new thinmg(x * 40     , y * 40 + 40, 20)); break;
				
				case "[": ground.push(new thinmg(x * 40 + 40, y * 40     , 20)); break;
				
				case "]": ground.push(new thinmg(x * 40     , y * 40     , 20)); break;
				
				case "#": you = new player(x * 40 + 20, y * 40 + 20); break;
				
				case "X": spikes.push(new thinmg(x * 40 + 20, y * 40 + 20, 20)); break;
				
				case "^": monsters.push(new thinmg(x * 40 + 20, y * 40 + 20, 20)); break;
				
			}
			
		}
		
	}
	
}