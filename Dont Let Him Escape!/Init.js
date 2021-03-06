function Init() {
	
	screen = new Canvas(640, 480);
	
	doors = [];
	elevators = [];
	cameras = [];
	props = [];
	background = [];
	walls = [];
	separators = [];
	persons = [];
	thiefs = [];
	
	screen.add_PICS("Brick BG", "Floor", "Stars", "Camera", "Person", "Window", "Elevator", "Left Chair", "Right Chair", "Small Table", "Large Table", "Door");
	add_Sounds("Footstep", "Open Door", "Close Door", "Night Sand");
	
	Night_Sand.loop = true;
	Night_Sand.play();
	// Make the map 4 blocks longer
	[
		[
			
			"                    ",
			"                    ",
			"                    ",
			"  [    @       L    ",
			"                    ",
			"     _            _ ",
			"                    ",
			"                    ",
			" @[   @   U  @  [   ",
			"                    ",
			"     _            _ ",
			"                    ",
			"                    ",
			" #    @   U  @  [   ",
			"                    "
			
		], [
			
			"                    ",
			"                    ",
			"                    ",
			"     L-             ",
			"                    ",
			"          U         ",
			"     W    U  W      ",
			"          U         ",
			"    L= /  U L= /    ",
			"                    ",
			"          U         ",
			"     W    U  W      ",
			"          U         ",
			"    L= /  U L= /    ",
			"                    "
			
		], [
			
			"********************",
			"********************",
			"********************",
			"********************",
			"$$$$$$$$$$$$$$$$$$$$",
			"####################",
			"####################",
			"####################",
			"####################",
			"$$$$$$$$$$$$$$$$$$$$",
			"####################",
			"####################",
			"####################",
			"####################",
			"$$$$$$$$$$$$$$$$$$$$"
			
		], [
			
			
			
		], [
			
			"|         #         |",
			"|         #         |",
			"|         #         |",
			"|         #         |",
			"/---------%---------|",
			"|         #         |",
			"|         #         |",
			"|         #         |",
			"|         #         |",
			"/---------%---------|",
			"|         #         |",
			"|         #         |",
			"|         #         |",
			"|         #         |",
			"-------------------- "
			
		], `
			
			
			
		`
		
	].level();
	
}