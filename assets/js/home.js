(function($) {
    'use strict';
	$(document).ready(function(){
		$(".hamburger").click(function() {
            $("body").hasClass("open") ? $("body").removeClass("open") : $("body").addClass("open")
        });
		$(".trBtns").on("click", function(){
			var ind = $(this).attr("data-trial");
			var folderName = 'assets/img/homeTrialDemo/' + ind + '/1.png';
			$("#memodel-render").fadeOut(50, function() {
            	$("#memodel-render").attr('src', folderName).attr("data-currentTrial", ind).attr("data-slide", 1);
        	}).fadeIn(50);
		});

		$(".rotate-btn").on("click", function(){
			var currentTrial = $("#memodel-render").attr("data-currentTrial");
			var id = $(this).attr("id");
			var curr = parseInt($("#memodel-render").attr("data-slide"));
			if(id == "rotate-model-clockwise"){
				if(curr < 6){
					curr = curr + 1;
				}
				else{
					curr = 1;
				}
			}
			else{
				if(curr > 5){
					curr = 1;
				}
				else{
					curr = curr + 1;
				}
			}
			var folderName = 'assets/img/homeTrialDemo/' + currentTrial +'/' + curr + '.png';
			$("#memodel-render").fadeOut(100, function() {
            	$("#memodel-render").attr('src', folderName).attr("data-slide", curr);
        	}).fadeIn(100);
		});

		$('.randomHover').on('mouseover',function() {
		    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
		    $('.randomHover:after').css('background', color);		    
		});

		if($('#myModal').length){
			$('#myModal').on('shown.bs.modal', function () {
	            $('#myModal .modal-body iframe').attr("src", "https://player.vimeo.com/video/244612496?autoplay=1&loop=1");
	        });
	        $('#myModal').on('hidden.bs.modal', function () {
	            $('#myModal .modal-body iframe').attr("src", "");
	        });
		}
	});
})(jQuery);