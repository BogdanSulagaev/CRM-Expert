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

	    myMap.balloon.open([55.7770091,37.5896875], "<div class='mapAdress'><p class='str1'>Адрес:</p><p class='str2'>Москва, Шаболовка 31Б </p><p class='str3'>Телефон:</p><p class='str4'><a href='tel:+74953696821'>+7 (495) 369 68 21</a></p><p class='str3'>Отдел продаж: <a href='mailto:sale@crmex.ru'>sale@crmex.ru</a></p><p class='str3'>Прием на работу: <a href='mailto:hr@crmex.ru'>hr@crmex.ru</a></p><p class='str3'>Другие вопросы: <a href='mailto:info@crmex.ru'>info@crmex.ru</a></p></div>", {
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