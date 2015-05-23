var HomeController = angular.module('HomeController', []);

HomeController.controller('homeController', ['$scope', '$location', 'notify', 'authentication',
	function ($scope, $location, notify, authentication) {
		console.log(authentication);
		// If logged: redirecting to "#/home", else: redirect to "#/auth"
		if (authentication.isLoggedIn()) {
			$location.path('/home');	
		} else {
			$location.path('/auth');
		}
	}
]);