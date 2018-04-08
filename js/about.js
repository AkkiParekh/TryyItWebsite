var tryy 	   = {} || new Object();
	tryy.about = {} || new Object();

tryy.about = {
	init: function(){
		$("body").addClass("about").removeClass("features contact home");
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
	}
};


(function(){
	tryy.about.init();
})();