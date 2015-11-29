

	$(document).scroll(function() {
	    $('#nav-bar').toggle($(this).scrollTop() < 50);  // hides this div when scolling beyong 50
	      $('.nav-bar-updated').toggle($(this).scrollTop() > 50);  // hides this div when scolling beyong 50
    });



//http://codepen.io/440design/pen/iEztk
//somehow this is not working
$(function(){
	var ink, d, x, y;
	$(".ripplelink").click(function(e){
    if($(this).find(".ink").length === 0){
        $(this).prepend("<span class='ink'></span>");
    }
         
    ink = $(this).find(".ink");
    console.log (ink);	
    ink.removeClass("animate");
     
    if(!ink.height() && !ink.width()){
        d = Math.max($(this).outerWidth(), $(this).outerHeight());
        ink.css({height: d, width: d});
    }
     
    x = e.pageX - $(this).offset().left - ink.width()/2;
    y = e.pageY - $(this).offset().top - ink.height()/2;
     
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});
});

// If submit button is pressed show the next block
$(function(){
	$('.btn').on ('click', function () {
		$('#account-types').show();
	})
});
