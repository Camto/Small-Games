function Keys_Setup(name, element) {
	
	name.keys = {};
	
	element.addEventListener("keydown", function(key) {
		
		name.keys[key.keyCode] = true;
		
	});
	
	element.addEventListener("keyup", function(key) {
		
		delete name.keys[key.keyCode];
		
	});
	
	name.pressing = function(key_name) {
		
		return name.keys[name.key_codes[key_name]];
		
	}
	
	name.key_codes = {
		
		up: 38,
		left: 37,
		down: 40,
		right: 39,
		
		w: 87,
		a: 65,
		s: 83,
		d: 68
		
	};
	
}