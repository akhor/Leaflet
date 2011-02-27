/*
 * L.Point represents a point with x and y coordinates.
 */

L.Point = function(/*Number*/ x, /*Number*/ y, /*Boolean*/ round) {
	this.x = (round ? Math.round(x) : x);
	this.y = (round ? Math.round(y) : y);
};

L.Point.prototype = {
	add: function(point) {
		return new L.Point(this.x + point.x, this.y + point.y);
	},
		
	subtract: function(point) {
		return this.clone()._subtract(point);
	},
	
	// destructive subtract (faster)
	_subtract: function(point) {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	},
	
	divideBy: function(num, round) {
		return new L.Point(this.x/num, this.y/num, round);
	},
	
	multiplyBy: function(num) {
		return new L.Point(this.x * num, this.y * num);
	},
	
	distanceTo: function(point) {
		var x = point.x - this.x,
			y = point.y - this.y;
		return Math.sqrt(x*x + y*y);
	},
	
	round: function() {
		return new L.Point(Math.round(this.x), Math.round(this.y));
	},
	
	clone: function() {
		return new L.Point(this.x, this.y);
	},
	
	toString: function() {
		return 'Point(' + 
				L.Util.formatNum(this.x) + ', ' + 
				L.Util.formatNum(this.y) + ')'; 
	}
};