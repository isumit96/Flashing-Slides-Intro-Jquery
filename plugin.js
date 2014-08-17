/*
 *  jQuery Slideshow Introduction Plugin v1.0.0
 *
 *  Authored by 2014 Sumit Raj
 *  http://www.sumitraj.com
 *
 */

 
	(function($){ 
	$.fn.slideman = function(options) {  	
	
		var opt = {
			'direction': 'random', // 
			'speed': 1000, //
			'slowdowndist':  '-30%', // 
			'slowdownSpeed': 2000, // 
			'autoSpeed': 4000 //
		};
		
		
		var childs = $(this).children();
		
		if (options) { 
				$.extend(opt, options);
		}
		
		var i = 0;
		
		var g = $(this).children('div');
		
			var direction = opt.direction;
			var speed = opt.speed;
			var slowdowndist = opt.slowdowndist;
			var slowdownSpeed = opt.slowdownSpeed;
			var autoSpeed = opt.autoSpeed;
		
		var children = [];
		
			$(this).children().each(function() {
				
				children.push(this);
						
				
			});
                               
			function fadeThemOut(children) {
				
				if (children.length > 0) {
				
					var currentChild = children.shift();
						
						
					$(currentChild).animate({  top:slowdowndist,opacity:"1" }, autoSpeed ).animate({ top: "-0%" }, slowdownSpeed,function(){
					
						$(this).animate({ left: "-100%",opacity:"0"},500,function(){
				
							fadeThemOut(children);
				
						});
				
					});
					
				}
				
		}

		
		fadeThemOut(children);
		
		
	};
	})(jQuery);
	

