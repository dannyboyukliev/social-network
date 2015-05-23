var logoutControllerModule = angular.module('logoutControllerModule', []);

logoutControllerModule.controller('logoutController', ['$scope', '$location', 'authentication', 'notify',
	function ($scope, $location, authentication, notify) {

		authentication.logout(function (data) {
                authentication.clearCredentials();
				notify({ 
					message: 'Successfully logged out',
					classes: 'alert-success'
				});

				$location.path('/');
			}, function (error) {
				notify({ 
					message: error,
					classes: 'alert-danger'
				});
			});
	}
]);