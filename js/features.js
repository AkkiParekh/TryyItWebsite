var tryy 	  = {} || new Object();
	tryy.features = {} || new Object();

tryy.features = {
	init: function(){

		$("body").addClass("features").removeClass("home about contact");
		$(".header_main").headroom({
            offset: 120,
            tolerance: 2,
            classes: {
                initial: "headroom",
                pinned: "header_main--pinned",
                unpinned: "header_main--unpinned",
                top: "header_main--top",
                notTop: "header_main--not-top",
                bottom: "header_main--bottom",
                notBottom: "header_main--not-bottom"
            }
        });

        $(".main-purple").headroom({
            offset: 30,
            tolerance: 2,
            classes: {
                initial: "headroom",
                pinned: "main-purple--pinned",
                unpinned: "main-purple--unpinned",
                top: "main-purple--top",
                notTop: "main-purple--not-top",
                bottom: "main-purple--bottom",
                notBottom: "main-purple--not-bottom"
            }
        });

        $(".benefits-round").on("click", function(){
            var thisActive = $(this).attr("data-benefit");
            var thisImg    = $(this).attr("data-img-code");
            var thisPos    = $(this).attr("data-pos");

            $(".benefits-round").removeClass("active");
            $(this).addClass("active");
            $(".cusbenefits .benefitsImgContainer").css("background-image", "url('img/features/customers"+thisImg+".svg')").css("background-position", thisPos);
            $(".cusbenefits .benefitsImgContainer").siblings("p").html(thisActive);
            
        });

        $(".clientbenefits-round").on("click", function(){
            var thisActive = $(this).attr("data-benefit");
            var thisImg    = $(this).attr("data-img-code");
            var thisPos    = $(this).attr("data-pos");

            $(".clientbenefits-round").removeClass("active");
            $(this).addClass("active");
            $(".clientbenefits .clientbenefitsImgContainer").css("background-image", "url('img/features/customers"+thisImg+".svg')").css("background-position", thisPos);
            $(".clientbenefits .clientbenefitsImgContainer").siblings("p").html(thisActive);
            
        });
	}
};


(function(){
	tryy.features.init();
})();