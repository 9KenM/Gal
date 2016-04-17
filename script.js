//Main object container
var GAL = {};

$(window).load(function(){
	GAL.init();
});

GAL.init = function(){

	GAL.params = {
		stars: 1000, // stars per rotation
		scale: 100, //A
		sweep: 0.63, //B
		winding: 4, //N
		barWidth: 0, // bar width
		jitter: 10 // coordinate jitter
	}
	$('#controls #stars').val(GAL.params.stars);
	$('#controls #scale').val(GAL.params.scale);
	$('#controls #sweep').val(GAL.params.sweep);
	$('#controls #winding').val(GAL.params.winding);
	$('#controls #barWidth').val(GAL.params.barWidth);

	$('#play').click(function(e){

		var stars = $('#controls #stars').val();
		var scale = $('#controls #scale').val();
		var sweep = $('#controls #sweep').val();
		var winding = $('#controls #winding').val();
		var barWidth = $('#controls #barWidth').val();

		$('#galaxy').empty();

		var x = 0, xPrev = 0;
		var y = 0, yPrev = 0;
		var iteration = 0;
		while( x - xPrev < 1000 && y - yPrev < 1000 && iteration < 10000 ) {

			xPrev = x;
			yPrev = y;

			//find angle and radius
			var angle = (2 * Math.PI) / stars * iteration;
			var radius = GAL.spiral( angle, scale, sweep, winding );
//			var radius = GAL.ringSpiral( angle, scale, sweep, winding );
//			var radius = GAL.spiral2( angle, scale, sweep, winding );


			var jitterX = parseFloat(GAL.rand(-GAL.params.jitter, GAL.params.jitter));
			var jitterY = parseFloat(GAL.rand(-GAL.params.jitter, GAL.params.jitter));

			//convert to x/y coords
			var x = radius * Math.cos(angle) - barWidth + jitterX;
			var y = radius * Math.sin(angle) + jitterY;
			$('#galaxy').append('<div style="position:absolute;left:'+x+'px;top:'+y+'px;" class="star"></div>');

			var x2 = -radius * Math.cos(angle) + parseFloat(barWidth) + jitterX;
			var y2 = -radius * Math.sin(angle) + jitterY;
			$('#galaxy').append('<div style="position:absolute;left:'+x2+'px;top:'+y2+'px;" class="star"></div>');

			iteration++;

		}

		var x = 0;
		var iteration = 0;
		while( x < Math.abs(barWidth) ) {
			var x = x + 1;
			var y = GAL.rand(-GAL.params.jitter, GAL.params.jitter);
			$('#galaxy').append('<div style="position:absolute;left:'+x+'px;top:'+y+'px;" class="star bar"></div>');

			var y = GAL.rand(-GAL.params.jitter, GAL.params.jitter);
			$('#galaxy').append('<div style="position:absolute;left:'+-x+'px;top:'+y+'px;" class="star bar"></div>');
		}

		e.preventDefault();
	});


}

GAL.spiral = function(theta, scale, sweep, winding){
//	console.log( Math.log( sweep * Math.tan( theta / (2 * winding) ) ) )
	return scale / Math.log( sweep * Math.tan( theta / (2 * winding) ) );
}

GAL.ringSpiral = function(theta, scale, sweep, winding){
	return scale / Math.log( sweep * Math.tanh( theta / (2 * winding) ) );
}

GAL.spiral2 = function(theta, barRadius, phi, N) {
	return barRadius / ( 1 - phi * Math.tan(phi) * Math.log(theta / phi) );
//	return barRadius / ( 1 - phi * Math.sin(phi / N) * Math.tan(phi) * Math.log( Math.tan(theta / (2*N) ) / Math.tan(phi / (2*N) ) ) );
}

GAL.randomKey = function(object){
	var array = [];
	for (key in object) { array.push(key); }
	return GAL.randomEntry(array);
}

GAL.randomEntry = function(array){
	var index = Math.round(Math.random()*(array.length - 1));
	return array[index];
}

GAL.rand = function(mean, stDev){
	var rand = function(){return Math.random()*2-1}
	var norm = rand() + rand() + rand();
	return Math.round(norm*stDev+mean);
}