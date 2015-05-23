var toolbarControllers = angular.module('toolbarControllers', []);

toolbarControllers.controller('toolbarController', ['$scope', '$location', '$mdDialog',
	function ($scope, $location, $mdDialog) {
		$scope.go = function ( path ) {
			console.log("Go to " + path);
  			$location.path( path );
		};

		$scope.showAlert = function (ev) {
			// $mdDialog.show({
			//         .templateUrl: 'templates/searchDialog.html'
			//         .targetEvent: ev
			//     });
			$mdDialog.show({
				controller: 'searchDialogController',
	      		templateUrl: 'templates/searchDialog.html',
	      		targetEvent: ev,
	    })
		}
	}
]);