$(document).ready(function(){
	//testing 123
	$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
    });
	
	var $window = $(window);
	var $elem = $("#aboutpage");
	var $at1 = $("#about-text1");
	var $at2 = $("#about-text2");
	var $at3 = $("#about-text3");
	
	$at1.hide();
	$at2.hide();
	$at3.hide();
	
	function isScrolledIntoView($elem, $window){
		var docViewTop = $window.scrollTop();
		var docViewBottom = docViewTop + $window.height();
		
		var elemTop = $elem.offset().top;
		var elemBottom = elemTop + $elem.height();
		
		return((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}
	
	$(document).on("scroll", function(){
		if(isScrolledIntoView($elem, $window)){
			$at1.show();
			$at2.delay(2400).fadeIn();
			$at3.delay(5200).fadeIn();
		}
		else{
			return false;
		}
	});
});