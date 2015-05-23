var socialNetworkApp = angular.module('socialNetworkApp', [
	'ngSanitize',
	'ngRoute',
	'ngMaterial',
	'cgNotify',
	'AuthControllers',
	'toolbarControllers',
	'HomeController',
	'EditProfileController',
	'newsFeedControllers',
	'logoutControllerModule',
	'SearchDialogController',
	'FriendsControllers'
]);

socialNetworkApp.constant('BASE_SERVICE_URL', 'http://softuni-social-network.azurewebsites.net/api');

socialNetworkApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		template: '',
		controller: 'homeController'
	})
	.when('/auth', {
		templateUrl: 'templates/auth.html',
		controller: 'authController'
	})
	.when('/home', {
		templateUrl: 'templates/news-feed.html',
		controller: 'newsFeedController'
	})
	.when('/settings', {
		templateUrl:'templates/edit-profile.html',
		controller: 'editProfileController'
	})
	.when('/friends', {
		templateUrl: 'templates/friends.html',
		controller: 'friendsController'
	})
	.when('/logout', {
		template: ' ',
		controller: 'logoutController'
	})
}]);

/* Config theme. */
socialNetworkApp.config(
	function ($mdThemingProvider) {
		var blueGrayMap = $mdThemingProvider.extendPalette('blue', {
		    '500': '607D8B'
		});
		$mdThemingProvider.definePalette('blueGray', blueGrayMap);
  		$mdThemingProvider.theme('default')
    		.primaryPalette('blueGray')
    		.accentPalette('red');
});