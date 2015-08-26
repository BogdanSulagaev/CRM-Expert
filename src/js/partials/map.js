$(function(){
	ymaps.ready(init);

	function init () {
	    var myMap = new ymaps.Map("map", {
	            center: [55.7770091,37.5896875],
	            zoom: 16
	        }),
	          myPlacemark = new ymaps.Placemark();

	    myMap.controls
	        .remove('mapTools')
	        .remove('legend')
	        .remove('typeSelector');

	    myMap.geoObjects.add(myPlacemark);

	    myMap.balloon.open([55.7770091,37.5896875], "<div class='mapAdress'><p class='str1'>Адрес:</p><p class='str2'>Москва, ул. Невская, д.7</p><p class='str3'>Телефон:</p><p class='str4'><a href='tel:+79452343321'>+7 (945) 234 33 21</a></p></div>", {
	        closeButton: false
	    });

	    $('.mapAdress').css({
	    	'filter': 'grayscale(0%)',
		  '-ms-filter': "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
		  'filter': 'none',
		  '-webkit-filter': 'grayscale(0)'
	    });

	  }
})