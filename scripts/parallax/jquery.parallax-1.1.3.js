/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, heightCorrect) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		getHeight = function(jqo) {
			return jqo.height();
		};
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || heightCorrect === null) heightCorrect = 0;

		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}
				var currentPos = Math.round(((((((firstTop - pos)) * speedFactor))/height)*100) + heightCorrect);
				
				if(currentPos < 0){
					$this.css('backgroundPosition', xpos + " " + 0 + "%");
				}
				else{
					if(currentPos > 100){
						$this.css('backgroundPosition', xpos + " " + 100 + "%");
					}
					else{
						$this.css('backgroundPosition', xpos + " " + currentPos + "%");
					}
				}
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
