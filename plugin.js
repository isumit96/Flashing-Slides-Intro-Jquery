/*
 *  jQuery Slideshow Plugin v1.0.0
 *
 *  Copyright (c) 2014 Sumit Raj
 *  http://www.sumitraj.com
 *
 *  Licensed under MIT
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
		
		
		/*
		$(this).children('div').each(function () {
			
			
			i++;
			alert(i);
			
			var direction = opt.direction;
			var speed = opt.speed;
			var slowdowndist = opt.slowdowndist;
			var slowdownSpeed = opt.slowdownSpeed;
			var autoSpeed = opt.autoSpeed;
			
			// alert($(this).attr("id"));
		
			var element = $(this);
			
			if(element.attr("direction")){
			
				// alert(element.attr("direction"));
				
				var direction = element.attr("direction");
			
			}
			
			if(element.attr("speed")){
			
				// alert(element.attr("speed"));
				
				var speed = element.attr("speed");
			
			}
			
			if(element.attr("slowdowndist")){
			
				// alert(element.attr("slowdowndist"));
				
				var slowdowndist = element.attr("slowdowndist");
			
			}
			
			if(element.attr("slowdownSpeed")){
			
				// alert(element.attr("slowdownSpeed"));
				
				var slowdownSpeed = element.attr("slowdownSpeed");
			
			}
			
			if(element.attr("autoSpeed")){
			
				// alert(element.attr("autoSpeed"));
				
				var autoSpeed = element.attr("autoSpeed");
			
			}
			
			
			$(this).animate({  top: slowdowndist,opacity:"1" }, 10000 ).animate({ top: "-0%" }, 10000,function(){
			
				$(this).fadeOut(1000);
			
			});
			
			
			
			
		});
		*/
		
		
		
		
		
		
		this.each(function() {       
			if (options) { 
				$.extend(opt, options);
			}
					
		});
		
	};
	})(jQuery);
	
	
	
	
	
	
	
/*
	function int() {

		$( ".ye-lo" ).animate({  top: '-30%',opacity:"1" }, 1000 ).animate({ top: "-0%" }, 3000,function(){

		$( ".ye-bl" ).animate({  bottom: '-20%',opacity:"1" }, 1000 ).animate({ bottom: "-0%" }, 2500,function(){

			$( ".ye-re" ).animate({  right: '-20%',opacity:"1" }, 1000 )
					
				.animate({ right: "-0%" }, 3000)
				.animate({ left: "-100%",opacity:"0" }, 1000 );
					
		}).animate({ right: "-100%",opacity:"0" }, 2000 ,function(){
	 
			$('.intro_whole').fadeOut(4000,function(){
		
				$('.thing_specific').animate({
					left: '0px',
				}, 500, function() {
				
					$('.in_body').animate({
					right: '0px',
					}, 1500);
				
				});
	 
			});
		

			});

		})
			
		.animate({ left: "-100%",opacity:"0" }, 1000);

	}
*/
