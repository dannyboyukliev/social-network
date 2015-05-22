var newsFeedControllers = angular.module('newsFeedControllers', []);

newsFeedControllers.controller('newsFeedController', ['$scope', '$location',
	function ($scope, $location) {
		console.log('News feed');

		$scope.isLogged = false;

	}
]);