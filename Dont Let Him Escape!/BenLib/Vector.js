Array.prototype.pol = function() { // return this vector as a polar value
	
	return [Math.sqrt(this[0] * this[0] + this[1] * this[1]), Math.atan2(this[1], this[0])];
	
}

Array.prototype.set_pol = function(r, d) { // use polar coordinates to set this vectors position
	
	this[0] = r * Math.cos(d);
	
	this[1] = r * Math.sin(d);
	
	return this;
	
}

Array.prototype.add = function(vector) { // add two vectors together
	
	return [this[0] + vector[0], this[1] + vector[1]];
	
}

Array.prototype.sub = function(vector) { // subtract a vector from another
	
	return [this[0] - vector[0], this[1] - vector[1]];
	
}

Array.prototype.norm = function() { // normalize a vector
	
	var total_length = Math.sqrt((this[0] * this[0]) + (this[1] * this[1]));
	
	this[0] /= total_length;
	this[1] /= total_length;
	
	return this;
	
}

Array.prototype.get_norm = function() { // see how a vector WOULD be normalized
	
	var total_length = Math.sqrt((this[0] * this[0]) + (this[1] * this[1]));
	
	return [this[0] / total_length, this[1] / total_length];
	
}

Array.prototype.dot_prod = function(vector) { // the dot product of two vectors
	
	return (this[0] * vector[0]) + (this[1] * vector[1]);
	
}

Array.prototype.proj = function(vector) { // project a vector onto another
	
	var pre = this.dot_prod(vector) / (vector[0] * vector[0] + vector[1] * vector[1]);
	
	return [pre * vector[0], pre * vector[1]];
	
}

Array.prototype.left = function() { // left hand normal
	
	return [this[1], -this[0]];
	
}

Array.prototype.right = function() { // right hand normal
	
	return [-this[1], this[0]];
	
}

Array.prototype.perprod = function(vector) { // perproduct of two vectors
	
	return this.dot_prod(vector.right());
	
}