var tryy = {} || new Object();

tryy = {
	initialize : function(){
		this.initializePlugins();
	},

	initializePlugins : function(){
		setTimeout(function(){
			$(".button-collapse").sideNav();
		},1000);
	}
};