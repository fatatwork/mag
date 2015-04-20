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
	//speedFactor - speed to move relative to vertical scroll.
	//outerHeight - fix for image heigth. Default: 0.
	//speedRounded - math round for speed amount. Default: false.
	$('#title_actual').parallax("70%", 0.3);
	$('#all-issues').parallax("50%", 0.5, -50, true);
	$('#title_about').parallax("50%", 0.7, -300);
	$('#title_separator').parallax("50%", 0.7, -300, true);
})
