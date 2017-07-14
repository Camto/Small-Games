function Init() {
	
	screen = new Canvas(400, 400);
	
	player = new Polygon(0, -25, 25, 25, -25, 25);
	player.move(screen.width / 2, 25);
	player.xv = 0;
	player.yv = 0;
	player.rotation = 0.5 * Math.PI;
	
	planet = new Circle(screen.width / 2, screen.height / 2, 62.5);
	
	Keys_Setup(screen, document);
	
}