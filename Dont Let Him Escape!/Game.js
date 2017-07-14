function Game() {
	
	thiefs[0].update();
	for(var count = 0; count < persons.length; count++) {
		persons[count].update();
	}
	for(count = 0; count < doors.length; count++) {
		doors[count].update(screen);
	}
	
	screen.clear_screen();
	for(count = 0; count < background.length; count++) {
		background[count].draw(screen);
	}
	for(count = 0; count < props.length; count++) {
		props[count].draw(screen);
	}
	for(count = 0; count < cameras.length; count++) {
		cameras[count].draw(screen);
	}
	for(count = 0; count < elevators.length; count++) {
		elevators[count].draw(screen);
	}
	for(count = 0; count < doors.length; count++) {
		doors[count].draw(screen);
	}
	thiefs[0].draw(screen);
	for(count = 0; count < persons.length; count++) {
		persons[count].draw(screen);
	}
	
	window.requestAnimationFrame(Game);
	
}