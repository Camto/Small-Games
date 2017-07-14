String.prototype.wrap = function() {
	
	var commands = this.split("|");
	commands.pop();
	
	for(var count = 0; count < commands.length; count++) {
		
		this.run(commands[count]);
		
	}
	
}

String.prototype.run = function(command) {
	
	command = command.replace(/\s/g, "");
	
	if(command == "") {
		
		return 0;
		
	}
	
	var found_pair = false;
	
	for(var count1 = 0; count1 < command.length; count1++) {
		
		if(command[count1] == "@") {
			
			found_pair = true;
			break;
			
		}
		
	}
	
	if(found_pair) {
		
		var entity_type = command.substr(0, count1).replace(/\d/g, "");
		var index = command.substr(0, count1).replace(/\D/g, "");
		
		if(entity_type == "" || index == "") {
			
			return 0;
			
		}
		
	} else {
		
		return 0;
		
	}
	
	var found_attribute = false;
	
	for(var count2 = count1; count2 < command.length; count2++) {
		
		if(command[count2] == ":") {
			
			found_attribute = true;
			break;
			
		}
		
	}
	
	if(found_attribute) {
		
		var attribute = command.substr(count1 + 1, count2 - count1 - 1);
		
		if(attribute == "") {
			
			return "(at char " + count2 + " in attribute parsing routine) Error: no attribute, must cancel command."; 
			
		}
		
		debug("Found attribute: \"" + attribute + "\".");
		
	} else {
		
		return "(at char " + count2 + " in attribute parsing routine) Error: could not find a attribute, must cancel current command.";
		
	}
	
	var parens_nums = [];
	var current_num = 0;
	var current_parens_num = [];
	
	var in_parens_num = false;
	var got_num = false;
	
	var current_letter = " ";
	
	for(var count3 = count2 + 1; count3 < command.length; count3++) {
		
		current_letter = command[count3];
		
		if(!in_parens_num) {
			
			if(current_letter == "(") {
				
				in_parens_num = true;
				
				got_num = false;
				
			} else {
				
				return 0;
				
			}
			
		} else {
			
			if(!isNaN(parseInt(current_letter))) {
				
				current_num *= 10;
				current_num += parseInt(current_letter);
				
				got_num = true;
				
			} else {
				
				if(got_num) {
					
					if(current_letter == ",") {
						
						current_parens_num.push(current_num);
						current_num = 0;
						
						got_num = false;
						
					} else {
						
						if(current_letter == ")") {
							
							current_parens_num.push(current_num);
							current_num = 0;
							
							parens_nums.push(current_parens_num);
							current_parens_num = [];
							
							in_parens_num = false;
							
						} else {
							
							return 0;
							
						}
						
					}
					
				} else {
					
					return 0;
					
				}
				
			}
			
		}
		
	}
	
	if(current_letter != ")") {
		
		return 0;
		
	}
	
	var parens_nums_string = "";
	
	for(count1 = 0; count1 < parens_nums.length; count1++) {
		
		parens_nums_string += "("
		
		for(count2 = 0; count2 < parens_nums[count1].length; count2++) {
			
			parens_nums_string += parens_nums[count1][count2].toString();
			
			if(count2 < parens_nums[count1].length - 1) {
				
				parens_nums_string += ", ";
				
			}
			
		}
		
		parens_nums_string += ")"
		
		if(count1 < parens_nums.length - 1) {
			
			parens_nums_string += " ";
			
		}
		
	}
	
	window[entity_type.toLowerCase() + "s"][index].modify_attribute(attribute, parens_nums, parens_nums_string);
	
	return 1;
	
}