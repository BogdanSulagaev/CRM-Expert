/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js

/*
 * Custom
 */
 
//= partials/jquery.arcticmodal-0.3.min.js
//= partials/wow.min.js
//= partials/jquery.validationengine.js
//= partials/jquery.validationengine-ru.js
//= partials/jquery.form.js
//= partials/map.js

$(function(){

	new WOW().init();

	if($(window).outerWidth()<=991){
		$('input[name="phone"]').removeClass('phone');
	}

	//= partials/maskedinput.js

	// $('.single-page-nav').singlePageNav({
	//     offset: $('.single-page-nav').outerHeight()-60,
	//     filter: ':not(.external)',
	//     updateHash: true
	// });

	$('.contactform1').submit(function() { 
	  if ( $(this).validationEngine('validate') ) {
	      $(this).ajaxSubmit();
	      $(this).clearForm();
	      $.arcticmodal('close');
	      $(".thanks").arcticmodal();
	  }
	  return false;
	}); 

	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	  var msViewportStyle = document.createElement('style')
	  msViewportStyle.appendChild(
	    document.createTextNode(
	      '@-ms-viewport{width:auto!important}'
	    )
	  )
	  document.querySelector('head').appendChild(msViewportStyle)
	}

	$(".callpopup1").on("click", function(){
      $(".popup1").arcticmodal();
      return false;
  	});

	var bool = true;
	var bool2 = true;

  	$('.imon1 .alltest').on('click', function(event) {
  		$('.imon1 .txt').toggle(200);
  		$('.imon1 .txt2').toggle(200);

  		if(bool){
  			$(this).text('Свернуть');
  			bool = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool = !bool
  		}

  	});

  	$('.imon2 .alltest').on('click', function(event) {
  		$('.imon2 .txt').toggle(200);
  		$('.imon2 .txt2').toggle(200);

  		if(bool2){
  			$(this).text('Свернуть');
  			bool2 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool2 = !bool
  		}

  	});

  	$('.bg7 .block img').hover(function() {
  		var srcimg = $(this).attr('src');
  		$(this).fadeOut(0);
  		$(this).fadeIn(400);
  		$('.bg7 .block img').css({
  			'filter': 'grayscale(100%)',
		  'filter': 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'grayscale\'><feColorMatrix type=\'matrix\' values=\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\'/></filter></svg>#grayscale")',
		  'filter': 'gray',
		  '-webkit-filter': 'grayscale(1)'
  		});
  		$(this).addClass('index');
  		$(this).css({
  			'filter': 'grayscale(0%)',
		  '-ms-filter': "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
		  'filter': 'none',
		  '-webkit-filter': 'grayscale(0)'
  		});
  		$('.act_img').fadeOut(0);
  		$('.act_img').fadeIn(0);
  		$('.act_img img').attr('src',srcimg);
  		console.log($(this).attr('class'));
  		if($(this).hasClass('im1')){
  			$('.blocks>div').addClass('hidebl');
  			$('.blocks>div').removeClass('active_block_text');
  			$('.bl1').removeClass('hidebl');
  			$('.bl1').addClass('active_block_text');
  		} else if($(this).hasClass('im2')){
  			$('.blocks>div').addClass('hidebl');
  			$('.blocks>div').removeClass('active_block_text');
  			$('.bl2').removeClass('hidebl');
  			$('.bl2').addClass('active_block_text');
  		}else if($(this).hasClass('im3')){
  			$('.blocks>div').addClass('hidebl');
  			$('.blocks>div').removeClass('active_block_text');
  			$('.bl3').removeClass('hidebl');
  			$('.bl3').addClass('active_block_text');
  		}else if($(this).hasClass('im4')){
  			$('.blocks>div').addClass('hidebl');
  			$('.blocks>div').removeClass('active_block_text');
  			$('.bl4').removeClass('hidebl');
  			$('.bl4').addClass('active_block_text');
  		}else if($(this).hasClass('im5')){
  			$('.blocks>div').addClass('hidebl');
  			$('.blocks>div').removeClass('active_block_text');
  			$('.bl5').removeClass('hidebl');
  			$('.bl5').addClass('active_block_text');
  		}else if($(this).hasClass('im6')){
  			$('.blocks>div').addClass('hidebl');
  			$('.blocks>div').removeClass('active_block_text');
  			$('.bl6').removeClass('hidebl');
  			$('.bl6').addClass('active_block_text');
  		}else if($(this).hasClass('im7')){
  			$('.blocks>div').addClass('hidebl');
  			$('.blocks>div').removeClass('active_block_text');
  			$('.bl7').removeClass('hidebl');
  			$('.bl7').addClass('active_block_text');
  		}else if($(this).hasClass('im8')){
  			$('.blocks>div').addClass('hidebl');
  			$('.blocks>div').removeClass('active_block_text');
  			$('.bl8').removeClass('hidebl');
  			$('.bl8').addClass('active_block_text');
  		}
  	}, function() {
  		$(this).removeClass('index');
  		$(this).fadeOut(0);
  		$(this).fadeIn(0);
  	});
  			

	//Snippets

	$("a[href='#what']").click(function() {
	    $('html, body').animate({
	        scrollTop: $('#what').offset().top
	    }, 1000);
	  });

	$("a[href='#team']").click(function() {
	    $('html, body').animate({
	        scrollTop: $('#team').offset().top
	    }, 1000);
	  });

	$("a[href='#tools']").click(function() {
	    $('html, body').animate({
	        scrollTop: $('#tools').offset().top
	    }, 1000);
	  });

	$("a[href='#test']").click(function() {
	    $('html, body').animate({
	        scrollTop: $('#test').offset().top
	    }, 1000);
	  });

	$("a[href='#contacts']").click(function() {
	    $('html, body').animate({
	        scrollTop: $('#contacts').offset().top
	    }, 1000);
	  });

	$(".down").click(function() {
	    $('html, body').animate({
	        scrollTop: $('#bg2').offset().top
	    }, 1000);
	  });
	
	$(".buy").click(function() {
	    $('html, body').animate({
	        scrollTop: $('#test').offset().top
	    }, 1000);
	  });

	// var owl = $("#carous1");

	// owl.owlCarousel({
	//     loop:true,
	//     items:1,
	//     margin:0,
	//     nav:false,
	//     mouseDrag:false,
	//     touchDrag:true,
	//     dots:false,
	//     animateIn: 'fadeIn',
	//     animateOut: 'fadeOut',
	//     autoplay:false,
	//     autoplayTimeout: 3000,
	//     dotsEach:false
	// });

	// $('.leftowl').click(function() {
	//   owl.trigger('prev.owl.carousel');
	// });
	// $('.rightowl').click(function() {
	//   owl.trigger('next.owl.carousel');
	// });

	// $.each($('#carous1 .owl-dot'), function(index, val) {
	//    $(val).html(index+1);
	// });


})