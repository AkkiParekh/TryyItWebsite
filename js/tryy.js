$(document).ready(function(){		
	$('body').imagesLoaded()
		.always( function( instance ) {
			console.log('All images loaded');
			$("header,footer, main").removeClass("d-none");
			// $("html, body").animate({ scrollTop: 0 }, 1000);
			setTimeout(function(){
				$(".siteLoader").addClass("d-none");
				$(window).trigger("resize");
			},200);
		})
		.done( function( instance ) {
			console.log('all images successfully loaded');			
		})
		.fail( function() {
			console.log('all images loaded, at least one is broken');
		})
		.progress( function( instance, image ) {			
		});

	$(".hamburger").click(function() {
		$("body").hasClass("open") ? $("body").removeClass("open") : $("body").addClass("open")
	});

	if($("body").hasClass("feat")){
		$(".card.active").on("mouseleave", function(){
			$(this).removeClass("active");
		});

		var $timeline_block = $('.cd-timeline-block');

		$timeline_block.each(function(){
			if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
			}
		});

		$(window).on('scroll', function(){
			$timeline_block.each(function(){
				if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
					$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
				}
			});
		});
	}

	$(window).resize(function() {
		$(window).width() > 739 && $("body").removeClass("open");
	});

	$(window).scroll(function() {
		$("header").toggleClass("whiteHeader fadeIn fadeInDown", ($(window).scrollTop() >= $("header").height()));
	});

	$('.scroll-downs').tooltip().on("click", function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: ($(".heading-fancy").position().top - 100) }, 1000);
	});
});