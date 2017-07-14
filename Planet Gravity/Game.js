function Game() {
	
	if(screen.pressing("left") || screen.pressing("a")) {
		
		player.xv -= 0.01;
		
	}
	
	if(screen.pressing("right") || screen.pressing("d")) {
		
		player.xv += 0.01;
		
	}
	
	player.xv *= 0.9;
	
	player.rotation += player.xv;
	player.rotate([screen.width / 2, screen.height / 2], player.xv);
	
	screen.clear_screen();
	
	player.render("blue", ["rgba(0, 0, 0, 0)", 0], screen);
	planet.render("brown", ["gray", 5], screen);
	
	
	
	player.move(Math.cos(player.rotation) * player.yv, Math.sin(player.rotation) * player.yv);
	
	if(player.collide(planet)) {
		
		player.move(-Math.cos(player.rotation) * player.yv, -Math.sin(player.rotation) * player.yv);
		player.yv = 0;
		
		player.move(Math.cos(player.rotation), Math.sin(player.rotation));
		
		if(player.collide(planet) && (screen.pressing("up") || screen.pressing("w"))) {
			
			
			player.yv = -12;
		}
		
		player.move(-Math.cos(player.rotation), -Math.sin(player.rotation));
		
	} else {
		
		player.yv += 0.5;
		
		if(player.yv > 12) {
			
			player.yv = 12;
			
		}
		
	}
	
	window.requestAnimationFrame(Game);
	
}