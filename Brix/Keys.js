keys = {};

document.addEventListener("keydown", function(key) {
	
	keys[key.keyCode] = true;
	
});

document.addEventListener("keyup", function(key) {
	
	delete keys[key.keyCode];
	
});

key_codes = {
	
	up: 38,
	left: 37,
	right: 39,
	
	w: 87,
	a: 65,
	d: 68
	
};