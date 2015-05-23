var newsFeedControllers = angular.module('newsFeedControllers', []);

newsFeedControllers.controller('newsFeedController', ['$scope', 'social', 'notify',
	function ($scope, social, notify) {
		$scope.getNewsFeed = function () {
			return social.getNewsFeed()
				.then(function (resultData) {
					console.log(resultData);
					$scope.newsFeedPosts = resultData.data;
				}, function (error) {
					notify({ 
						message: error.data['message'],
						classes: 'alert-danger'
					});
				});
		}

		//Execute now.
		$scope.getNewsFeed();

		$scope.getOwnFriendsPreview = function () {
			return social.getOwnFriendsPreview()
				.then(function (resultData) {
					$scope.friendsCount = resultData.data['totalCount'];
					$scope.friends = resultData.data['friends'];
				}, function (error) {
					notify({ 
						message: error.data['message'],
						classes: 'alert-danger'
					});
				})
		}

		$scope.getOwnFriendsPreview();
	}
]);