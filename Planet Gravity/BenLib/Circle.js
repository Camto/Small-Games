class Circle {
	
	constructor(x, y, r) {
		
		this.x = x;
		this.y = y;
		this.r = r;
		
	}
	
	collide(obj) {
		
		if(obj.constructor == "Circle") {
			
			var distance = Math.sqrt(((this.x - obj.x) * (this.x - obj.x)) + ((this.y - obj.y) * (this.y - obj.y)));
			
			if(distance < (this.radius + obj.radius)) {
				
				return true;
				
			} else {
				
				return false;
				
			}
			
		} else if(obj.constructor == "Polygon") {
			
			return obj.collide(this);
			
		}
		
	}
	
	get_walls(points) {
		
		var distances = points.map(function(point) {return point[0] * point[0] + point[1] * point[1];});
		var closest = Math.min.apply(Math, distances);
		
		var x = this.x - points[distances.indexOf(closest)][0];
		var y = this.y - points[distances.indexOf(closest)][1];
		
		return [[x, y].right().norm()];
		
	}
	
	project(wall) {
		
		var middle = wall.dot_prod([this.x, this.y]);
		
		var x1 = middle - this.r;
		var x2 = middle + this.r;
		
		return [x1, x2];
		
	}
	
	render(background, border, canvas) {
		
		var draw = canvas.draw;
		
		draw.beginPath();
		
		draw.strokeStyle = border[0];
		draw.lineWidth = border[1];
		
		canvas.circle(this.x, this.y, this.r, background);
		
		draw.stroke();
		
	}
	
}