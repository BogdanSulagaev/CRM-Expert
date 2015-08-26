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


/* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  if(altura<=800){
    $(".full-screen").css('min-height',altura); 
  }
  
}

$(document).ready(function() {
  alturaMaxima();
  $(window).bind('resize', alturaMaxima);
});

$('a,button,.close').click(function(event) {
  $('form').validationEngine('hideAll');
});