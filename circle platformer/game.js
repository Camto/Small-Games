function Init() {
	
	screen = document.createElement("canvas");
	screen.width = 400;
	screen.height = 400;
	draw = screen.getContext("2d");
	
	draw.globalCompositeOperation = "xor";
	draw.textAlign = "center";
	
	screen.style.position = "absolute";
	screen.style.margin = "auto";
	screen.style.top = "0px";
	screen.style.left = "0px";
	screen.style.bottom = "0px";
	screen.style.right = "0px";
	
	document.body.appendChild(screen);
	
	mouse_x = screen.width / 2;
	mouse_y = screen.height / 2;
	mouse_down = false;
	last_mouse = false;
	clicking = false;
	released = false;
	
	screen.addEventListener("mousemove", function(event) {
		
		var bounds = screen.getBoundingClientRect();
		
		mouse_x = ((event.clientX - bounds.left) / (bounds.right - bounds.left)) * screen.width;
		mouse_y = ((event.clientY - bounds.top) / (bounds.bottom - bounds.top)) * screen.height;
		
		if(event.which == 1) {
			
			mouse_down = true;
			
		} else {
			
			mouse_down = false;
			
		}
		
	});
	
	screen.addEventListener("mousedown", function(event) {
		
		if(event.which == 1) {
			
			mouse_down = true;
			
		} else {
			
			mouse_down = false;
			
		}
		
	});
	
	screen.addEventListener("mouseup", function(event) {
		
		screen.mouse_down = false;
		
	});
	
	menu = new interface([
		
		new text(1/2, 17/64, screen, ["circle", 50, "courier", "bold"]),
		new text(1/2, 23/64, screen, ["platformer", 50, "courier", "bold"]),
		new text(1/2, 2/3, screen, ["play", 35, "courier", "bold"])
		
	], [
		
		new button(1/2, 2/3, 175, 75, screen, function() {
			
			if(localStorage.getItem("level") > 1) {
				
				return "level_select";
				
			} else {
				
				localStorage.setItem("level", 1);
				load_level(levels[0]);
				return "none";
				
			}
			
		})
		
	], false);
	
	level_select = new interface([
		
		new text( 3/18, 1/3, screen, ["1", 65, "courier"]),
		new text( 7/18, 1/3, screen, ["2", 65, "courier"], function() {return (localStorage.getItem("level") >= 2 ? true : false);}),
		new text(11/18, 1/3, screen, ["3", 65, "courier"], function() {return (localStorage.getItem("level") >= 3 ? true : false);}),
		new text(15/18, 1/3, screen, ["4", 65, "courier"], function() {return (localStorage.getItem("level") >= 4 ? true : false);}),
		new text( 3/18, 2/3, screen, ["5", 65, "courier"], function() {return (localStorage.getItem("level") >= 5 ? true : false);}),
		new text( 7/18, 2/3, screen, ["6", 65, "courier"], function() {return (localStorage.getItem("level") >= 6 ? true : false);}),
		new text(11/18, 2/3, screen, ["7", 65, "courier"], function() {return (localStorage.getItem("level") >= 7 ? true : false);}),
		new text(15/18, 2/3, screen, ["8", 65, "courier"], function() {return (localStorage.getItem("level") >= 8 ? true : false);})
		
	], [
		
		new button( 3/18, 1/3, 75, 75, screen, function() {load_level(levels[0]); return "none";}),
		new button( 7/18, 1/3, 75, 75, screen, function() {load_level(levels[1]); return "none";}, function() {return (localStorage.getItem("level") >= 2 ? true : false);}),
		new button(11/18, 1/3, 75, 75, screen, function() {load_level(levels[2]); return "none";}, function() {return (localStorage.getItem("level") >= 3 ? true : false);}),
		new button(15/18, 1/3, 75, 75, screen, function() {load_level(levels[3]); return "none";}, function() {return (localStorage.getItem("level") >= 4 ? true : false);}),
		new button( 3/18, 2/3, 75, 75, screen, function() {load_level(levels[4]); return "none";}, function() {return (localStorage.getItem("level") >= 5 ? true : false);}),
		new button( 7/18, 2/3, 75, 75, screen, function() {load_level(levels[5]); return "none";}, function() {return (localStorage.getItem("level") >= 6 ? true : false);}),
		new button(11/18, 2/3, 75, 75, screen, function() {load_level(levels[6]); return "none";}, function() {return (localStorage.getItem("level") >= 7 ? true : false);}),
		new button(15/18, 2/3, 75, 75, screen, function() {load_level(levels[7]); return "none";}, function() {return (localStorage.getItem("level") == 8 ? true : false);})
		
	], false);
	
	pause = new interface([
		
		new text(1/2, 1/4, screen, ["paused", 45, "courier"]),
		new text(1/2, 1/2, screen, ["continue", 20, "courier", "italic"]),
		new text(1/2, 3/4, screen, ["level select", 20, "courier", "italic"])
		
	], [
		
		new button(1/2, 1/2, 125, 37.5, screen, function() {return "none";}),
		new button(1/2, 3/4, 165, 37.5, screen, function() {return "level_select";})
		
	], true);
	
	pause_button = new interface([], [
		
		new button(7/8, 1/8, 50, 50, screen, function() {return "pause";}),
		new button(109/128, 1/8, 7.5, 30, screen, function() {return false;}),
		new button(115/128, 1/8, 7.5, 30, screen, function() {return false;})
		
	], true);
	
	current_interface = menu;
	
}

function Game() {
	
	var mouse = mouse_down;
	var x = mouse_x;
	var y = mouse_y;
	
	if(!last_mouse && mouse) {
		
		clicking = true;
		
	} else {
		
		clicking = false;
		
	}
	
	if(last_mouse && !mouse) {
		
		released = true;
		
	} else {
		
		released = false;
		
	}
	
	draw.clearRect(0, 0, screen.width, screen.height);
	
	if(!current_interface) {
		
		you.update(x, y, mouse, released, screen);
		
		for(var count = 0; count < rings.length; count++) {
			
			rings[count].update();
			
		}
		
		you.render(cam_x, cam_y, draw, true);
		
		for(count = 0; count < rings.length; count++) {
			
			rings[count].render(cam_x, cam_y, draw, false, 5);
			
			if(rings[count].gone) {
				
				rings.splice(count, 1);
				count--;
				
			}
			
		}
		
		for(count = 0; count < ground.length; count++) {
			
			ground[count].render(cam_x, cam_y, draw, true);
			
		}
		
		pause_button.draw(screen, draw);
		
		let switch_i = pause_button.update(x, y, clicking);
		
		if(switch_i) {
			
			current_interface = window[switch_i];
			
		}
		
	} else {
		
		let switch_i = current_interface.update(x, y, clicking);
		
		draw.fillRect(0, 0, screen.width, screen.height);
		
		current_interface.draw(screen, draw);
		
		if(current_interface.show_game) {
			
			you.render(cam_x, cam_y, draw, true);
			
			for(count = 0; count < rings.length; count++) {
				
				rings[count].render(cam_x, cam_y, draw, false, 5);
				
			}
			
			for(var count = 0; count < ground.length; count++) {
				
				ground[count].render(cam_x, cam_y, draw, true);
				
			}
			
		}
		
		if(switch_i) {
			
			if(switch_i != "none") {
				
				current_interface = window[switch_i];
				
			} else {
				
				current_interface = false;
				
			}
			
		}
		
	}
	
	last_mouse = mouse;
	
	requestAnimationFrame(Game);
	
}

function Begin() {
	
	Init();
	
	requestAnimationFrame(Game);
	
}