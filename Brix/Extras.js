if (!window.requestAnimationFrame) {
	
	window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element ) {window.setTimeout(callback, 50/3)}
	
}