$(document).ready(function(){
    $("a.nav").click(function() {
        $("body").animate({
            scrollTop: ($($(this).attr("href")).offset().top - 53) + "px"
        }, {
            duration: 500
        });
        return false;
    });
});