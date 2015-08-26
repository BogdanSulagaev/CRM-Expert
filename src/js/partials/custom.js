
$(function(){

  new WOW().init();


  

  $(window).on('scroll', function(event) {
      event.preventDefault();
      if($(window).scrollTop()<=0){
          $('header').fadeIn(400, function() {
            
          });
          $('.header_mini').fadeOut(400, function() {
            
          });
      } else{
          $('header').fadeOut(400, function() {
            
          });
          $('.header_mini').fadeIn(400, function() {
            
          });
      }
  });

  $('.scale2 a').on('click', function(event) {
    event.preventDefault();
    $('.scale2 a').removeClass('active');
    $(this).addClass('active');
  });

  $('.sw1').on('click', function(event) {
    event.preventDefault();
    $('.switch2,.switch4,.switch3').fadeOut(0, function() {
      
    });
    $('.switch1').fadeIn(0, function() {
      
    });
    return false;
  });

  $('.sw2').on('click', function(event) {
    event.preventDefault();
    $('.switch1,.switch4,.switch3').fadeOut(0, function() {
      
    });
    $('.switch2').fadeIn(0, function() {
      
    });
    return false;
  });
  $('.sw3').on('click', function(event) {
    event.preventDefault();
    $('.switch2,.switch4,.switch1').fadeOut(0, function() {
      
    });
    $('.switch3').fadeIn(0, function() {
      
    });
    return false;
  });
  $('.sw4').on('click', function(event) {
    event.preventDefault();
    $('.switch2,.switch1,.switch3').fadeOut(0, function() {
      
    });
    $('.switch4').fadeIn(0, function() {
      
    });
    return false;
  });

  var owl = $("#carous1");

  owl.owlCarousel({
      loop:true,
      items:1,
      margin:0,
      nav:false,
      mouseDrag:false,
      touchDrag:true,
      dots:true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      autoplay:false,
      autoplayTimeout: 3000,
      dotsEach:true,
  });

  $('.leftgo').click(function() {
    owl.trigger('prev.owl.carousel');
  });
  $('.rightgo').click(function() {
    owl.trigger('next.owl.carousel');
  });


  var owl1 = $("#carous2");

  owl1.owlCarousel({
      loop:true,
      items:1,
      margin:0,
      nav:false,
      mouseDrag:false,
      touchDrag:true,
      dots:true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      autoplay:false,
      autoplayTimeout: 3000,
      dotsEach:true,
  });

  $.each($('#carous1 .owl-dot'), function(index, val) {
     $(val).html(index+1);
  });

  $("a[href='#optovik']").on("click", function(){
      $(".optompop").arcticmodal();
      return false;
  });

  $("#gooptpop").on("click", function(){
      $(".optompop").arcticmodal();
      return false;
  });

  $(".moreblock11_1").on("click", function(){
      $(".steps4").arcticmodal();
      return false;
  });

  $(".moreblock11_2").on("click", function(){
      $(".dostavkapop").arcticmodal();
      return false;
  });

  $(".moreblock11_3").on("click", function(){
      $(".payhowuwant").arcticmodal();
      return false;
  });

  $(".moreblock11_4").on("click", function(){
      $(".credit").arcticmodal();
      return false;
  });

  $(".lookarenda").on("click", function(){
      $(".arenda").arcticmodal();
      return false;
  });

  $(".wannacamera").on("click", function(){
      $(".wannacamerapop").arcticmodal();
      return false;
  });

  $(".callback").on("click", function(){
      $(".callbackpop").arcticmodal();
      return false;
  });

  $(".moreacc").on("click", function(){
      $(".whatpriceacc").arcticmodal();
      return false;
  });

  $(".morekrep").on("click", function(){
      $(".whatpricekrep").arcticmodal();
      return false;
  });

  $(".shop_btn").on("click", function(){
      var nametext = $(this).parent('div').children('.shop_block').children('.desc').children('h4').text();
      $('.whatprice input[name="action"]').val(' ');
      $('.whatprice input[name="action"]').val('Узнать цену на '+ nametext);
      $(".whatprice").arcticmodal();
      return false;
  });


  //CARD

  $.getJSON("cards.json", function(data){

    $("#card1,#card1name").on("click", function(){        
          var i = 0;
        $('.cardblock').children('.param').remove();

        $('.view_card .name').text(' ');
        $('.view_card img').attr({src:' '});
        $('.view_card .description').text(' ');
        $('.view_card .param').text(' ');

        $('.view_card .name').text(data.card1.name);
        $('.view_card img').attr({src:data.card1.image});
        $('.view_card .description').text(data.card1.description);
        $.each(data.card1.params, function(index, val) {
          if(i%2==0){
            $('.cardblock').append('<p class="param greybl">'+val+'<\/p>');
          } else{
            $('.cardblock').append('<p class="param">'+val+'<\/p>');
          };
          console.log(i);
          i++;
        });
        $('.view_card input[name="namecam"]').val(' ');
        $('.view_card input[name="namecam"]').val(data.card1.name);
        $(".view_card").arcticmodal();
        return false;
    });
    $("#card2,#card2name").on("click", function(){
  var i = 0;
        $('.cardblock').children('.param').remove();

        $('.view_card .name').text(' ');
        $('.view_card img').attr({src:' '});
        $('.view_card .description').text(' ');
        $('.view_card .param').text(' ');
        $('.view_card .name').text(data.card2.name);
        $('.view_card img').attr({src:data.card2.image});
        $('.view_card .description').text(data.card2.description);
        $.each(data.card2.params, function(index, val) {
          if(i%2==0){
            $('.cardblock').append('<p class="param greybl">'+val+'<\/p>');
          } else{
            $('.cardblock').append('<p class="param">'+val+'<\/p>');
          };
          console.log(i);
          i++;
        });
        $('.view_card input[name="namecam"]').val(' ');
        $('.view_card input[name="namecam"]').val(data.card2.name);
        $(".view_card").arcticmodal();
        return false;
    });
    $("#card3,#card3name").on("click", function(){
  var i = 0;
        $('.cardblock').children('.param').remove();

        $('.view_card .name').text(' ');
        $('.view_card img').attr({src:' '});
        $('.view_card .description').text(' ');
        $('.view_card .param').text(' ');
        $('.view_card .name').text(data.card3.name);
        $('.view_card img').attr({src:data.card3.image});
        $('.view_card .description').text(data.card3.description);
        $.each(data.card3.params, function(index, val) {
          if(i%2==0){
            $('.cardblock').append('<p class="param greybl">'+val+'<\/p>');
          } else{
            $('.cardblock').append('<p class="param">'+val+'<\/p>');
          };
          console.log(i);
          i++;
        });
        $('.view_card input[name="namecam"]').val(' ');
        $('.view_card input[name="namecam"]').val(data.card3.name);
        $(".view_card").arcticmodal();
        return false;
    });
    $("#card4,.card4name").on("click", function(){
  var i = 0;
        $('.cardblock').children('.param').remove();

        $('.view_card .name').text(' ');
        $('.view_card img').attr({src:' '});
        $('.view_card .description').text(' ');
        $('.view_card .param').text(' ');
        $('.view_card .name').text(data.card4.name);
        $('.view_card img').attr({src:data.card4.image});
        $('.view_card .description').text(data.card4.description);
        $.each(data.card4.params, function(index, val) {
          if(i%2==0){
            $('.cardblock').append('<p class="param greybl">'+val+'<\/p>');
          } else{
            $('.cardblock').append('<p class="param">'+val+'<\/p>');
          };
          console.log(i);
          i++;
        });
        $('.view_card input[name="namecam"]').val(' ');
        $('.view_card input[name="namecam"]').val(data.card4.name);
        $(".view_card").arcticmodal();
        return false;
    });
    $("#card5,#card5name").on("click", function(){
  var i = 0;
        $('.cardblock').children('.param').remove();

        $('.view_card .name').text(' ');
        $('.view_card img').attr({src:' '});
        $('.view_card .description').text(' ');
        $('.view_card .param').text(' ');
        $('.view_card .name').text(data.card5.name);
        $('.view_card img').attr({src:data.card5.image});
        $('.view_card .description').text(data.card5.description);
        $.each(data.card5.params, function(index, val) {
          if(i%2==0){
            $('.cardblock').append('<p class="param greybl">'+val+'<\/p>');
          } else{
            $('.cardblock').append('<p class="param">'+val+'<\/p>');
          };
          console.log(i);
          i++;
        });
        $('.view_card input[name="namecam"]').val(' ');
        $('.view_card input[name="namecam"]').val(data.card5.name);
        $(".view_card").arcticmodal();
        return false;
    });
  });
  


});

  $('.contactform1').submit(function() { 
      if ( $(this).validationEngine('validate') ) {
          $(this).ajaxSubmit();
          $(this).clearForm();
          $.arcticmodal('close');
          $(".thanks").arcticmodal();
      }
      return false;
  }); 



/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});

$('.block4').imagesLoaded( function() {
   $.each($('.block4 img'), function(index, val) {
     var wid = $(val).width();
     $(val).parent('div').children('.overlayz').css('width', wid);
  });
});

$(".mymenuheader a").not('#gooptpop').click(function() {
        var myel = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(myel).offset().top-60
    }, 2000);
  });

$(".gotodownblock").click(function() {
    $('html, body').animate({
        scrollTop: $('#id1').offset().top-60
    }, 2000);
  });

$('a,button,.close').click(function(event) {
  $('form').validationEngine('hideAll');
});
