keys = {};

document.addEventListener("keydown", function(key) {
	
	keys[key.keyCode] = true;
	
});

document.addEventListener("keyup", function(key) {
	
	delete keys[key.keyCode];
	
});

function is_pressing(key_name) {
	
	return keys[key_codes[key_name]];
	
}

key_codes = {
	
	up: 38,
	left: 37,
	down: 40,
	right: 39,
	
	w: 87,
	a: 65,
	s: 83,
	d: 68
	
};