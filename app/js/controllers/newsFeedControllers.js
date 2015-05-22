var newsFeedControllers = angular.module('newsFeedControllers', []);

newsFeedControllers.controller('newsFeedController', ['$scope', 'social', 'notify',
	function ($scope, social, notify) {
		$scope.getNewsFeed = function () {
			return social.getNewsFeed()
				.then(function (data) {
					$scope.newsFeedPosts = result.data;
				}, function (error) {
					notify({ 
						message: error.data["message"],
						classes: 'alert-danger'
					});
				});
		}

		//Execute now.
		$scope.getNewsFeed();

	}
]);