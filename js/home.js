var tryy 	  = {} || new Object();
	tryy.home = {} || new Object();

tryy.home = {
	init : function(){
		$("body").addClass("home").removeClass("features about contact");
		setTimeout(function(){
			tryy.home.initHeadRoom();
		},10);
	},

	initHeadRoom : function(){

		new TypeIt('.type-it', {
		    strings: ["fun...", "time saving...", "awesome..."],
		    speed: 300,
		    breakLines: false,
		    autoStart: true,
		    lifeLike:true,
		    loop:true,
		    cursor:false
		});

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
	tryy.home.init();
})();