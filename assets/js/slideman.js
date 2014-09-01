/*
 *  jQuery Slideman Plugin v1.0.0
 *
 *  Copyright (c) 2014 Sumit Raj
 *  http://www.sumitraj.com
 *	isumit96@gmail.com
 *
 *  Licensed under MIT
 *
 */

 
	(function($){ $.fn.slideman = function(options) {  	
	
		// Declaring the default values.
	
		var opt = {
			
			'direction': 'random', // Can be top, bottom or right
			'slowdowndist':  '-30%', // Distance from where the slide slows down.
			'autospeed': 4000, // Speed before slowing down.
			'slowdownSpeed': 2000 // Speed after slowing down.
			
		};
		
		if (options) { 
			
			$.extend(opt, options);
			
		}
		
		// Declaring the default variables.
		
		var direction = opt.direction;
		var speed = opt.speed;
		var slowdowndist = opt.slowdowndist;
		var slowdownSpeed = opt.slowdownSpeed;
		var autospeed = opt.autospeed;
		
		var children = []; // Declaring an array to put the elements inside.
		
		$(this).children().each(function() {
				
			children.push(this); // Pushing out each child element inside the div.
						
		});
			
		function fadeThemOut(children) {
				
			if (children.length > 0) {
				
				var currentChild = children.shift();
						
				if (opt.direction == "random") { // Checking to see if there's a direction specified.
				
					var directions = ["top", "bottom", "right"]; // Putting directions into an array.
					var direc = directions[Math.floor(Math.random() * directions.length)]; // Randomizing the direction.
				
				} else {
				
					var direc = opt.direction; // Selection the default direction.
				
				}
					
				$("body").css("overflow", "hidden"); // Disabling the scroll bars.
					
				switch (direc) {
					
					case "top" :	var css_at = {"top":"-100%","display":"block"};
									
									$(currentChild).css(css_at); // Applying css based on transition direction.
									 
									var ani_aa = {top:slowdowndist,opacity:"1"};
									var ani_ab = {top: "-0%"};
									
									$(currentChild).animate(ani_aa, autospeed ).animate(ani_ab, slowdownSpeed,function(){
						
										$(this).animate({ left: "-100%",opacity:"0"},500,function(){
				
											fadeThemOut(children); // Calling in the function.
				
										});
				
									});
										
									break;
								 
					case "bottom" : var css_bt = {"bottom":"-100%","right":"0px","display":"block"};
									
									$(currentChild).css(css_bt); // Applying css based on transition direction.
									
									var ani_ba = {bottom:slowdowndist,opacity:"1"};
									var ani_bb = {bottom: "-0%"};
									 
									$(currentChild).animate(ani_ba, autospeed ).animate(ani_bb, slowdownSpeed,function(){
						
										$(this).animate({ left: "-100%",opacity:"0"},500,function(){
				
											fadeThemOut(children); // Calling in the function.
				
										});
				
									});
										
									break;
								 
					case "right"  : var css_ct = {"right":"-100%","top":"0px","bottom":"0px","display":"block"};
									
									$(currentChild).css(css_ct); // Applying css based on transition direction.
									
									var ani_ca = {right:slowdowndist,opacity:"1"};
									var ani_cb = {right: "-0%"};
						
										
									$(currentChild).animate(ani_ca, autospeed ).animate(ani_cb, slowdownSpeed,function(){
						
										$(this).animate({ left: "-100%",opacity:"0"},500,function(){
				
											fadeThemOut(children); // Calling in the function.
				
										});
				
									});
										
									break;
									
				} 
			}
		}

			fadeThemOut(children);
			
	};
	})(jQuery);
	