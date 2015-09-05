/*
 * Third party
 */
//= ../../bower_components/jquery/dist/jquery.js

/*
 * Custom
 */
 
//= partials/jquery.arcticmodal-0.3.min.js
//= partials/owl.carousel.min.js
//= partials/wow.min.js
//= partials/jquery.validationengine.js
//= partials/jquery.validationengine-ru.js
//= partials/jquery.form.js
//= partials/map.js

$(function(){

	$('.color-overlay').height($('.bg1').outerHeight());

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
	  	  var thanksname = $(this).children('input[name="name"]').val()
	  	  $('.thanks .nameform').text(thanksname);
	      $(this).ajaxSubmit();
	      $(this).clearForm();
	      $.arcticmodal('close');	      
	      $(".thanks").arcticmodal();
	  }
	  return false;
	}); 


	$('.contactform2').submit(function() { 
	  if ( $(this).validationEngine('validate') ) {
	  	  var thanksname = $(this).children('input[name="name"]').val()
	  	  $('.thanks .nameform').text(thanksname);
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

	$(".callback").on("click", function(){
      $(".popup1").arcticmodal();
      return false;
  	});

	var bool = true;
	var bool2 = true;
	var bool3 = true;
	var bool4 = true;
	var bool5 = true;
	var bool6 = true;
	var bool7 = true;
	var bool8 = true;
	var bool9 = true;
	var bool10 = true;
	var bool11 = true;
	var bool12 = true;
	var bool13 = true;
	var bool14 = true;

    // owl.on('changed.owl.carousel', function(event) {
    //   $('.testimonial .txt2').hide();
    //   $('.testimonial .txt').show();
    // });

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

  	$('.imon3 .alltest').on('click', function(event) {
  		$('.imon3 .txt').toggle(200);
  		$('.imon3 .txt2').toggle(200);

  		if(bool3){
  			$(this).text('Свернуть');
  			bool3 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool3 = !bool
  		}

  	});

  	$('.imon4 .alltest').on('click', function(event) {
  		$('.imon4 .txt').toggle(200);
  		$('.imon4 .txt2').toggle(200);

  		if(bool4){
  			$(this).text('Свернуть');
  			bool4 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool4 = !bool
  		}

  	});

  	$('.imon5 .alltest').on('click', function(event) {
  		$('.imon5 .txt').toggle(200);
  		$('.imon5 .txt2').toggle(200);

  		if(bool5){
  			$(this).text('Свернуть');
  			bool5 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool5 = !bool
  		}

  	});

  	$('.imon6 .alltest').on('click', function(event) {
  		$('.imon6 .txt').toggle(200);
  		$('.imon6 .txt2').toggle(200);

  		if(bool6){
  			$(this).text('Свернуть');
  			bool6 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool6 = !bool
  		}

  	});

  	$('.imon7 .alltest').on('click', function(event) {
  		$('.imon7 .txt').toggle(200);
  		$('.imon7 .txt2').toggle(200);

  		if(bool7){
  			$(this).text('Свернуть');
  			bool7 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool7 = !bool
  		}

  	});

  	$('.imon8 .alltest').on('click', function(event) {
  		$('.imon8 .txt').toggle(200);
  		$('.imon8 .txt2').toggle(200);

  		if(bool8){
  			$(this).text('Свернуть');
  			bool8 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool8 = !bool
  		}

  	});

  	$('.imon9 .alltest').on('click', function(event) {
  		$('.imon9 .txt').toggle(200);
  		$('.imon9 .txt2').toggle(200);

  		if(bool9){
  			$(this).text('Свернуть');
  			bool9 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool9 = !bool
  		}

  	});

  	$('.imon10 .alltest').on('click', function(event) {
  		$('.imon10 .txt').toggle(200);
  		$('.imon10 .txt2').toggle(200);

  		if(bool10){
  			$(this).text('Свернуть');
  			bool10 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool10 = !bool
  		}

  	});

  	$('.imon11 .alltest').on('click', function(event) {
  		$('.imon11 .txt').toggle(200);
  		$('.imon11 .txt2').toggle(200);

  		if(bool11){
  			$(this).text('Свернуть');
  			bool11 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool11 = !bool
  		}

  	});

  	$('.imon12 .alltest').on('click', function(event) {
  		$('.imon12 .txt').toggle(200);
  		$('.imon12 .txt2').toggle(200);

  		if(bool12){
  			$(this).text('Свернуть');
  			bool12 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool12 = !bool
  		}

  	});

  	$('.imon13 .alltest').on('click', function(event) {
  		$('.imon13 .txt').toggle(200);
  		$('.imon13 .txt2').toggle(200);

  		if(bool13){
  			$(this).text('Свернуть');
  			bool13 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool13 = !bool
  		}

  	});

  	$('.imon14 .alltest').on('click', function(event) {
  		$('.imon14 .txt').toggle(200);
  		$('.imon14 .txt2').toggle(200);

  		if(bool14){
  			$(this).text('Свернуть');
  			bool14 = !bool
  		} else{
  			$(this).text('Весь отзыв');
  			bool14 = !bool
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
  		// $(this).css({
  		// 	'filter': 'grayscale(0%)',
		  // '-ms-filter': "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
		  // 'filter': 'none',
		  // '-webkit-filter': 'grayscale(0)'
  		// });
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

	$(".com1").on("click", function(){
      $(".command1").arcticmodal();
      return false;
  	});
	$(".com2").on("click", function(){
      $(".command2").arcticmodal();
      return false;
  	});
	$(".com3").on("click", function(){
      $(".command3").arcticmodal();
      return false;
  	});
	$(".com4").on("click", function(){
      $(".command4").arcticmodal();
      return false;
  	});
	$(".com5").on("click", function(){
      $(".command5").arcticmodal();
      return false;
  	});
	$(".com6").on("click", function(){
      $(".command6").arcticmodal();
      return false;
  	});
	$(".com7").on("click", function(){
      $(".command7").arcticmodal();
      return false;
  	});
	$(".com8").on("click", function(){
      $(".command8").arcticmodal();
      return false;
  	});

	var owl = $("#carous1");

	owl.owlCarousel({
	    loop:true,
	    items:1,
	    margin:0,
	    nav:false,
	    mouseDrag:true,
	    touchDrag:true,
	    dots:true,
	    animateOut: 'fadeOut',
	    autoplay:false,
	    autoplayTimeout: 3000,
	    dotsEach:false
	});

	var owl2 = $("#carous2");

	owl2.owlCarousel({
	    loop:true,
	    items:1,
	    margin:0,
	    nav:false,
	    mouseDrag:true,
	    touchDrag:true,
	    dots:true,
	    animateOut: 'fadeOut',
	    autoplay:false,
	    autoplayTimeout: 3000,
	    dotsEach:false
	});

	var owl3 = $("#carous3");

	owl3.owlCarousel({
	    loop:true,
	    items:1,
	    margin:0,
	    nav:false,
	    mouseDrag:true,
	    touchDrag:true,
	    dots:true,
	    animateOut: 'fadeOut',
	    autoplay:false,
	    autoplayTimeout: 3000,
	    dotsEach:false
	});

	var owl4 = $("#carous4");

	owl4.owlCarousel({
	    loop:false,
	    items:1,
	    margin:0,
	    nav:false,
	    mouseDrag:true,
	    touchDrag:true,
	    dots:false,
	    animateOut: 'fadeOut',
	    autoplay:false,
	    autoplayTimeout: 3000,
	    dotsEach:false
	});

	var owl5 = $("#carous5");

	owl5.owlCarousel({
	    loop:true,
	    items:1,
	    margin:0,
	    nav:false,
	    mouseDrag:true,
	    touchDrag:true,
	    dots:true,
	    animateOut: 'fadeOut',
	    autoplay:false,
	    autoplayTimeout: 3000,
	    dotsEach:false
	});

	var owl6 = $("#carous6");

	owl6.owlCarousel({
	    loop:true,
	    items:1,
	    margin:0,
	    nav:false,
	    mouseDrag:true,
	    touchDrag:true,
	    dots:true,
	    animateOut: 'fadeOut',
	    autoplay:false,
	    autoplayTimeout: 3000,
	    dotsEach:false
	});

	$('.caro1').on('click', function(event) {
		event.preventDefault();
		$('.caro1,.caro2,.caro3').removeClass('acttestim');
		$(this).addClass('acttestim');
		$('#carous1,#carous2,#carous3').fadeOut(400);
		$('#carous1').fadeIn(400)
	});

	$('.caro2').on('click', function(event) {
		event.preventDefault();
		$('.caro1,.caro2,.caro3').removeClass('acttestim');
		$(this).addClass('acttestim');
		$('#carous1,#carous2,#carous3').fadeOut(400);
		$('#carous2').fadeIn(400)
	});

	$('.caro3').on('click', function(event) {
		event.preventDefault();
		$('.caro1,.caro2,.caro3').removeClass('acttestim');
		$(this).addClass('acttestim');
		$('#carous1,#carous2,#carous3').fadeOut(400);
		$('#carous3').fadeIn(400)
	});

	$('.caro4').on('click', function(event) {
		event.preventDefault();
		$('.caro4,.caro5,.caro6').removeClass('acttestim');
		$(this).addClass('acttestim');
		$('#carous4,#carous5,#carous6').fadeOut(400);
		$('#carous4').fadeIn(400)
	});

	$('.caro5').on('click', function(event) {
		event.preventDefault();
		$('.caro4,.caro5,.caro6').removeClass('acttestim');
		$(this).addClass('acttestim');
		$('#carous4,#carous5,#carous6').fadeOut(400);
		$('#carous5').fadeIn(400)
	});

	$('.caro6').on('click', function(event) {
		event.preventDefault();
		$('.caro4,.caro5,.caro6').removeClass('acttestim');
		$(this).addClass('acttestim');
		$('#carous4,#carous5,#carous6').fadeOut(400);
		$('#carous6').fadeIn(400)
	});


	$(".more1").on("click", function(){
      $(".popup_more1").arcticmodal();
      return false;
  	});
	$(".more2").on("click", function(){
      $(".popup_more2").arcticmodal();
      return false;
  	});
	$(".more3").on("click", function(){
      $(".popup_more3").arcticmodal();
      return false;
  	});
	$(".more4").on("click", function(){
      $(".popup_more4").arcticmodal();
      return false;
  	});
	$(".more5").on("click", function(){
      $(".popup_more5").arcticmodal();
      return false;
  	});
	$(".more6").on("click", function(){
      $(".popup_more6").arcticmodal();
      return false;
  	});

	$(".popup_more1").on("click", function(){
		$('.popupgo input[name="action"]').val('Расчет стоимости: '+$('.popup_more1 .zag').text());
		$.arcticmodal('close');
      $(".popupgo").arcticmodal();
      return false;
  	});
	$(".popup_more2").on("click", function(){
		$('.popupgo input[name="action"]').val('Расчет стоимости: '+$('.popup_more2 .zag').text());
		$.arcticmodal('close');
      $(".popupgo").arcticmodal();
      return false;
  	});
	$(".popup_more3").on("click", function(){
		$('.popupgo input[name="action"]').val('Расчет стоимости: '+$('.popup_more3 .zag').text());
		$.arcticmodal('close');
      $(".popupgo").arcticmodal();
      return false;
  	});
	$(".popup_more4").on("click", function(){
		$('.popupgo input[name="action"]').val('Расчет стоимости: '+$('.popup_more4 .zag').text());
		$.arcticmodal('close');
      $(".popupgo").arcticmodal();
      return false;
  	});
	$(".popup_more5").on("click", function(){
		$('.popupgo input[name="action"]').val('Расчет стоимости: '+$('.popup_more5 .zag').text());
		$.arcticmodal('close');
      $(".popupgo").arcticmodal();
      return false;
  	});
	$(".popup_more6").on("click", function(){
		$('.popupgo input[name="action"]').val('Расчет стоимости: '+$('.popup_more6 .zag').text());
		$.arcticmodal('close');
      $(".popupgo").arcticmodal();
      return false;
  	});

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