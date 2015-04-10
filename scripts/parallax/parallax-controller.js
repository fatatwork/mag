$(document).ready(function(){
	$(function() {
	    $("a.nav").click(function() {
	        $("body").animate({
	            scrollTop: ($($(this).attr("href")).offset().top - 57) + "px"
	        }, {
	            duration: 500
	        });
	        return false;
	    });
    });
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#title_actual').parallax("70%", 0.3, 40);
	$('#all-issues').parallax("50%", 0.3, 10);
	$('#title_about').parallax("50%", 0.1, 30);
	$('#title_separator').parallax("50%", 0.1, 30);
})
