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
		return false;
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
		setTimeout(
			$timeout.fadeIn('slow'),
			1000
		);
	});

	var items;

	$('#get-button').on('click', function() {
		$.get(
			"http://www.mattbowytz.com/simple_api.json",
			{data: "quizData"},
			function (data) {
				items = data['data'];
				$.each(items, function (i) {
					var li = $('<li/>')
						.addClass('prediction-result')
						.attr('id', 'prediction-result-' + i)
						.text(items[i])
						.appendTo($('#list'));
				});
			}
		);
		$('#new-button-div').html('<button class="keep">Keep It</button>');


		$('#get-button').html('Change It!');



	});

	$('.keep').on('click', function(){
		document.cookie()
	})


})(jQuery);