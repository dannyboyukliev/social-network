var SearchDialogController = angular.module('SearchDialogController', []);

SearchDialogController.controller('searchDialogController', ['$scope', '$mdDialog', 'social', 'notify',
	function ($scope, $mdDialog, social, notify) {
		$scope.searchedText = '';
		$scope.searchResults = {};

		var hide = function() {
    		$mdDialog.hide();
  		};

  		$scope.executeSearch = function () {
  			social.searchUsersByName($scope.searchedText)
  				.then(function (resultData) {
					console.log(resultData);
					$scope.searchResults = resultData.data;
				}, function (error) {
					notify({ 
						message: error.data['message'],
						classes: 'alert-danger'
					});
				});
  		}
	}
]);