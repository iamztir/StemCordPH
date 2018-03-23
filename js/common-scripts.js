$(document).ready(function() {
	
/*------------------------------------HEADER-JS----------------------------------------------*/
   var header = $("#header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
		var bluelogo = $('.bluelogo').attr('src');
		var whitelogo = $('.whitelogo').attr('src');

        if (scroll >= 100) {
            header.addClass("lightheader");
			$('.logo img').attr('src', bluelogo);
			
        } else {
            header.removeClass("lightheader");
			$('.logo img').attr('src', whitelogo);
        }
    });
/*
if (window.location.hash != null && window.location.hash != '' ) {
	var elem = window.location.hash;
	console.log(elem);
	$("body, html").animate({ 
		scrollTop: eval($(elem).offset().top - 100 )
	}, 1000);
}

*/

$(".home-nav li.customlink a.first-anchor").on("click", function( e ) {

	e.preventDefault();

	$("body, html").animate({ 
		scrollTop: eval($( $(this).attr('href') ).offset().top -100 )
	}, 1500);

});

$('.nav-book, #book a').click(function(){
		$('#book-popup').modal();
});


var divID = window.location.hash;
var page = window.location.pathname;
	
/*if (page == '/'){*/

	if (divID != ''){
	function scrollDIV(){
		$("body, html").animate({ 
			scrollTop: eval($(divID).offset().top -200 )
		}, 1000);
	}

	 window.setTimeout( scrollDIV, 2000 );

	}
/*}

var jump=function(e)
{
   if (e){
       e.preventDefault();
       var target = $(this).attr("href");
   }else{
       var target = location.hash;
   }

   $('html,body').animate(
   {
       scrollTop: $(target).offset().top
   },2000,function()
   {
       location.hash = target;
   });

}

$('html, body').hide();


    $('a[href^=#]').bind("click", jump);

    if (location.hash){
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
    }else{
        $('html, body').show();
    }

*/

	$("#navigation li.first-level").hover(function(){
      if($(this).hasClass("active")){
        $(this).removeClass("active");
          $(this).find('.submenu').fadeOut();
      }else{
			$(this).addClass("active");
          $(this).find('.submenu').show();
      }
    });
	
	
	//<i class="fa fa-caret-down" aria-hidden="true"></i>
		
	$('#mobile-nav li a.first').each(function(){
		if($(this).next('.sub-nav').length > 0){
			$(this).addClass('drop-anchor');
			$(this).append('<i class="fa fa-caret-down" aria-hidden="true"></i>');
		}
	});
	
	$('#mobile-nav li a.drop-anchor').click(function () {
		$(this).next('.sub-nav').slideToggle(10);
		if( jQuery(this).hasClass('active') ){

			$('#mobile-nav li a').removeClass('active');
		
		} else {
			$('#mobile-nav li a').removeClass('active');
			$(this).addClass("active");
		}
		
		 
		$(this).parent().siblings().children().next().slideUp(10);
		return false;
	
});

/*--------------------------------------PAGE-JS--------------------------------------------------------*/
	
	$('#home-page-slider').slick({
			dots: true,
			autoplay: true,
			infinite: true,
			speed: 700,
			autoplaySpeed: 9000,
			slidesToShow: 1,
			slidesToScroll: 1
		});
		
	
	$('#client-slider').slick({
			dots: true,
			autoplay: true,
			infinite: true,
			speed: 700,
			autoplaySpeed: 9000,
			  slidesToShow: 3,
				slidesToScroll: 1,
			   responsive: [
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				  }
				}
			]
		});
			
$('.mt-content-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.mt-content-nav'
});


$('.mt-content-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.mt-content-slider',
  dots: false,
  centerMode: true,
  arrows : false,
  focusOnSelect: true,
    responsive: [
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
		  }
		},
		{
		  breakpoint: 481,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
		  }
		}
	]
});
		
	/*$(".step-procedure-tabs").tabs();
	
	$('.step-procedure-tabs ul li a').click(function(){
		if( $(this).hasClass('active') ){
			$('.step-procedure-tabs ul li a').removeClass('active');
		
		} else {
			$('.step-procedure-tabs ul li a').removeClass('active');
			$(this).addClass("active");
		}
	
	});*/
	
	var hashURL = window.location.hash;
	
	if (hashURL != ""){

	$('.step-procedure-tabs li').each(function(){
		
		var tabContent = $('.page-contents').attr('id');
		var anchor = $(this).find('a');
		var tabURL = anchor.attr('href');
		
		if (tabURL == hashURL){
			$('.step-procedure-tabs ul li, .page-contents').removeClass('active');
			$(this).addClass('active');
		}
	});
	
	
	$('.page-contents').each(function(){
		var tabContent = $(this).attr('id');
		
			$('.page-contents').removeClass('active');
			$(hashURL).addClass('active');
		
	});
	
	
}
	
	$('.employee-item').hover(function(){
		if( $(this).hasClass('hover') ){
			$('.employee-item').removeClass('hover');
		
		} else {
			$('.employee-item').removeClass('hover');
			$(this).addClass("hover");
		}
	
	});
 

$('#video-popup').on('hidden.bs.modal', function (e) {
	$iframe = $(this).find( 'iframe' );
	$iframe.attr('src', $iframe.attr('src'));
});


$('.slider-btn').click(function(){
	$videosrc = $(this).next('video');
	$('#video-popup iframe').attr('src', $videosrc.attr('source'));
});



$('.employee-info .fa-times').click(function(){
	$('.employee-info').slideUp('fast');
	$('.employee-item a').removeClass('click');
	
});

$('.mobile-toggle').click(function(){
	if ($('.mobile-menu-drawer').hasClass('open')){
		$('.mobile-menu-drawer').removeClass('open');
	}else{
		$('.mobile-menu-drawer').addClass('open');
	}
	
});


$('.nav-drawer-close').click(function(){
	$('.mobile-menu-drawer').removeClass('open');
});


$('.btn-search').click(function(){
			$('.search-field').fadeIn();
			$('.btn-search').hide();
			$('.hide-search').show();
});

$('.search-form .fa-times').click(function(){
	$('.search-field').fadeOut();
	$('.btn-search').show();
	$('.hide-search').hide();
});

$(".yes-through input").prop("disabled", true);
$(".no-through input").prop("disabled", true);

$('.referred-yes input').change(function(){
   $(".yes-through input").prop("disabled", !$(this).is(':checked'));
});

$('.referred-no input').change(function(){
   $(".no-through input").prop("disabled", !$(this).is(':checked'));
});

$('#referred-check input[type=checkbox]').click(function(){
	if($(this).is(':checked')){
		$("#referred-check input[type=checkbox]").prop("disabled", true);
		$(this).prop("disabled", false );
	}else{
		$("#referred-check input[type=checkbox]").prop("disabled", false);
	}

});


function updateImageSize() {

	if ($(window).width() >= 1024) {
		$('.slider-image').height($(window).height());

	}

}

updateImageSize();

$(window).load(function() {
		updateImageSize();
	});
	
$(window).resize(function() {
		updateImageSize();
   });


});





