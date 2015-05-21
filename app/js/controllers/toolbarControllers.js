var toolbarControllers = angular.module('toolbarControllers', []);

toolbarControllers.controller('toolbarController', ['$scope', '$location',
	function ($scope, $location) {
		$scope.go = function ( path ) {
			console.log("Go to " + path);
  			$location.path( path );
		};
	}
]);