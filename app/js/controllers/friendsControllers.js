var FriendsControllers = angular.module('FriendsControllers', []);

FriendsControllers.controller('friendsController', ['$scope', '$rootScope', '$location', '$mdDialog', 'social', 'notify',
	function ($scope, $rootScope, $location, $mdDialog, social, notify) {

		var showFriendsRequestsAlert = function () {
			$mdDialog.show({
				controller: friendsRequestDialogController,
	      		templateUrl: 'templates/friendsRequestsDialog.html'
	    	})
		}

		showFriendsRequestsAlert();


	}
]);

function friendsRequestDialogController($scope, $mdDialog, $rootScope, social, notify) {
	$scope.countFriendRequests = '';

	var checkForFriendsRequests = function () {
		social.getFriendRequests()
			.then(function (resultData) {
				console.log(resultData);
				$scope.countFriendRequests = resultData.data.length;
				
				if (resultData.data.length > 0) {
					// There are friends requests.
					$scope.requestsResults = resultData.data;
				}
			}, function (error) {
				notify({ 
					message: error.data['message'],
					classes: 'alert-danger'
				});
			});
	}

	$scope.acceptFriendRequest = function (request) {
		var requestId = request.id;

		social.acceptRequest(requestId)
			.then(function (resultData) {
				console.log(resultData);
				
				notify({ 
					message: '' + request.user.name + ' is now your friend.',

				});
			}, function (error) {
				notify({ 
					message: error.data['message'],
					classes: 'alert-danger'
				});
			});
	}

	$scope.ignoreFriendRequest = function (request) {
		var requestId = request.id;

		social.rejectRequest(requestId)
			.then(function (resultData) {
				console.log(resultData);
				
				notify({ 
					message: 'Request from ' + request.user.name + ' was ignored.',
				});
			}, function (error) {
				notify({ 
					message: error.data['message'],
					classes: 'alert-danger'
				});
			});
	}

	var removeRequest = function (request) {
		var i;
		for (i = 0; i < $scope.countFriendRequests; i+=1) {
			if ($scope.requestsResults[i].id === request.id) {
				$scope.countFriendRequests -= 1;
				$scope.requestsResults.splice(i);
			}
		}
	}

	checkForFriendsRequests();		
}

