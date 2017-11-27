tryyItApp.controller('homeCtrl', function($scope, $rootScope, $location) {
	$scope.openDemoVideo = function(){
		$('#demoVideoModal').modal('open');
	};	

	$scope.init = function(){			

		$('.modal').modal({
			dismissible: true,
			opacity: .5,
			inDuration: 300,
			outDuration: 200,
			startingTop: '4%',
			endingTop: '10%',
			ready: function(modal, trigger) {
				$("#demoVideoModal .video-container-loader").removeClass("hide");
				setTimeout(function(){
					$("#demoVideoModal .video-container #video").attr("src", "https://player.vimeo.com/video/244612496?autoplay=1");
					$("#demoVideoModal .video-container-loader").addClass("hide");
					$("#demoVideoModal .video-container").removeClass("hide");
				},2000);	
								
			},
			complete: function() { 
				$("#demoVideoModal .video-container #video").attr("src", "");
				$("#demoVideoModal .video-container, #demoVideoModal .video-container-loader").addClass("hide");
			}
		});
	};

	$scope.init();
});