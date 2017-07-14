ordered_colours = ["#D4681D", "#CC641C", "#C25F1B", "#B55919", "#A85317", "#9C4D15", "#8B4513", "#7D3E11", "#6B350F", "#5E2F0D", "#52290B", "#4D260A", "#422109"];

random_colours = [];

for(var count = 0; count < 13; count++) {
	
	random_colours.push(ordered_colours.splice(Math.round(Math.random() * (ordered_colours.length - 1)), 1)[0]);
	
}

console.log(random_colours);

// random_colours = ["#D4681D", "#CC641C", "#C25F1B", "#B55919", "#A85317", "#9C4D15", "#8B4513", "#7D3E11", "#6B350F", "#5E2F0D", "#52290B", "#4D260A", "#422109"];