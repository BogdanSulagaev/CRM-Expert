/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */

(function($){
	
	// Number of seconds in every time division
	var days	= 24*60*60,
		hours	= 60*60,
		minutes	= 60;
	
	// Creating the plugin
	$.fn.countdown = function(prop){
		
		var options = $.extend({
			callback	: function(){},
			timestamp	: 0
		},prop);
		
		var left, d, h, m, s, positions;

		// Initialize the plugin
		init(this, options);
		
		positions = this.find('.position');
		
		(function tick(){
			
			// Time left
			left = Math.floor((options.timestamp - (new Date())) / 1000);
			
			if(left < 0){
				left = 0;
			}
			
			// Number of days left
			d = Math.floor(left / days);
			updateDuo(0, 1, d);
			left -= d*days;
			
			// Number of hours left
			h = Math.floor(left / hours);
			updateDuo(2, 3, h);
			left -= h*hours;
			
			// Number of minutes left
			m = Math.floor(left / minutes);
			updateDuo(4, 5, m);
			left -= m*minutes;
			
			// Number of seconds left
			s = left;
			updateDuo(6, 7, s);
			
			// Calling an optional user supplied callback
			options.callback(d, h, m, s);
			
			// Scheduling another call of this function in 1s
			setTimeout(tick, 1000);
		})();
		
		// This function updates two digit positions at once
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}
		
		return this;
	};


	function init(elem, options){
		elem.addClass('countdownHolder');

		// Creating the markup inside the container
		$.each(['Days','Hours','Minutes','Seconds'],function(i){
			$('<span class="count'+this+'">').html(
				'<span class="position">\
					<span class="digit static">0</span>\
				</span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span>'
			).appendTo(elem);
			
			if(this!="Seconds"){
				elem.append('<span class="countDiv countDiv'+i+'">:</span>');
			}
		});

	}

	// Creates an animated transition between the two numbers
	function switchDigit(position,number){
		
		var digit = position.find('.digit')
		
		if(digit.is(':animated')){
			return false;
		}
		
		if(position.data('digit') == number){
			// We are already showing this number
			return false;
		}
		
		position.data('digit', number);
		
		var replacement = $('<span>',{
			'class':'digit',
			css:{
				top:'',
				opacity:0
			},
			html:number
		});
		
		// The .static class is added when the animation
		// completes. This makes it run smoother.
		
		digit
			.before(replacement)
			.removeClass('static')
			.animate({top:'',opacity:0},'fast',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,opacity:1},'fast',function(){
				replacement.addClass('static');
			});
	}
})(jQuery);


$(function(){	
	// var ts = new Date(2012, 0, 1)	
	// if((new Date()) > ts){
	// 	ts = (new Date(2015, 12, 8));
	// 	newYear = false;
	// }		
	// $('#countdown').countdown({
	// 	timestamp	: ts		
	// });	
	
	
	var note = $('#note'),
		ts = new Date(015,2,30),
		newYear = true;
	
	if((new Date()) > ts){
		// The new year is here! Count towards something else.
		// Notice the *1000 at the end - time must be in milliseconds
		ts = (new Date()).getTime() + 2*24*60*60*1000;
		newYear = false;
	}
		
	$('.countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			message += days + " дней" + ( days==1 ? '':'' ) + ", ";
			message += hours + " часов" + ( hours==1 ? '':'' ) + ", ";
			message += minutes + " минут" + ( minutes==1 ? '':'' ) + " и ";
			message += seconds + " секунд" + ( seconds==1 ? '':'' ) + " <br />";

			note.html(message);
		}
	});	
	$('.countdown2').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			message += days + " дней" + ( days==1 ? '':'' ) + ", ";
			message += hours + " часов" + ( hours==1 ? '':'' ) + ", ";
			message += minutes + " минут" + ( minutes==1 ? '':'' ) + " и ";
			message += seconds + " секунд" + ( seconds==1 ? '':'' ) + " <br />";

			note.html(message);
		}
	});


});