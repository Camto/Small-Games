function add_Sounds() {
	
	for(var count = 0; count < arguments.length; count++) {
		
		window[arguments[count].replace(/ /g, "_")] = new Audio("Sounds/" + arguments[count] + ".wav");
		
	}
	
}