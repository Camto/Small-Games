function Init() {
	
	screen = new Canvas(600/* window.innerWidth - 10 */, 400/* window.innerHeight - 10 */);
	screen_top = new Polygon(0, 0, screen.width, 0);
	screen_right = new Polygon(screen.width, 0, screen.width, screen.height);
	screen_bottom = new Polygon(screen.width, screen.height, 0, screen.height);
	screen_left = new Polygon(0, screen.height, 0, 0);
	
	poly1 = new Polygon(40, 40, 80, 100, 60, 150, 20, 160);
	poly1.move(screen.width / 10, screen.height / (20/3));
	poly2 = new Polygon(-20, -20, 0, 30, 70, 20);
	poly2.xv = 0;
	poly2.yv = 0;
	poly2.move(screen.width / 2, screen.height / 2);
	poly3 = new Polygon(0, 0, 50, 10, 40, 70, 10, 100, -20, 40);
	poly3.move(screen.width / (4/3), screen.height / 1.8181818181818181);
	
}

function Begin() {
	
	Init();
	
	window.requestAnimationFrame(Game);
	
}

function Game() {
	
	if((is_pressing("w") || is_pressing("up")) && !(is_pressing("s") || is_pressing("down"))) {
		
		poly2.yv -= 0.8;
		
	} else if((is_pressing("s") || is_pressing("down")) && !(is_pressing("w") || is_pressing("up"))) {
		
		poly2.yv += 0.8;
		
	}
	poly2.yv *= 0.87;
	poly2.move(0, poly2.yv);
	if(poly2.collide(poly1) || poly2.collide(poly3) || poly2.collide(screen_top) || poly2.collide(screen_bottom)) {
		
		poly2.move(0, -poly2.yv);
		poly2.yv = 0;
		
	}
	
	if((is_pressing("a") || is_pressing("left")) && !(is_pressing("d") || is_pressing("right"))) {
		
		poly2.xv -= 0.8;
		
	} else if((is_pressing("d") || is_pressing("right")) && !(is_pressing("a") || is_pressing("left"))) {
		
		poly2.xv += 0.8;
		
	}
	poly2.xv *= 0.87;
	poly2.move(poly2.xv, 0);
	if(poly2.collide(poly1) || poly2.collide(poly3) || poly2.collide(screen_right) || poly2.collide(screen_left)) {
		
		poly2.move(-poly2.xv, 0);
		poly2.xv = 0;
		
	}
	
	screen.clear_screen();
	poly1.render("green", ["black", 3], screen);
	poly2.render("blue", ["black", 3], screen);
	poly3.render("yellow", ["black", 3], screen);
	
	window.requestAnimationFrame(Game);
	
}

Begin();