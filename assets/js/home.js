(function($) {
    'use strict';
	$(document).ready(function(){
		
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
	});
})(jQuery);