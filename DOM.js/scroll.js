// Scroll On Portfolio Imgs DOM //
	
//$(window).scroll(function() {
		$('#Portfolio').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideUp");
			}
		});
	});

//