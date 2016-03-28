(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouse-over');
	$click     = $('.click');
	$sub       = $('.submit');
	$timeout   = $('.timeout');

	$mouseover.on('mouseover', function() {
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.click('click', function() {
		$(this).html('Peace Out!');
		$(this).fadeOut(1500);
	});

	$sub.on('submit', function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).appendTo('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).on('ready', function() {
		setTimeout(function() {
			$timeout.fadeOut('slow')
			}, 1000
		);
	});


	// MY STUFF
	var items;
	var random;

	$('#get-button').on('click', function() {
		$.get(
			"http://www.mattbowytz.com/simple_api.json",
			{data: "quizData"},
			function (data) {
				items = data['data'];
				random = Math.floor(Math.random()*items.length);
				$('#api-thing').html(items[random]);
			}
		);
		$('#new-button-div').html('<button id="keep">Keep It</button>');

		$('#get-button').html('Change It!');



	});


	$('#new-button-div').on('click', '#keep', function () {
		document.cookie="thingy=" + items[random]
	});
	$(document).on('ready', function(){
		var thingy=document.cookie.split('=')[1];

		if (thingy!=""){
			$('#api-thing').html(thingy);
		}

	});

})(jQuery);