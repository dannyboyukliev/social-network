var socialNetworkApp = angular.module('socialNetworkApp', [
	'ngSanitize',
	'ngRoute',
	'ngMaterial',
	'cgNotify',
	'userControllers',
	'toolbarControllers',
	'EditProfileController',
	'newsFeedControllers'
]);

socialNetworkApp.constant('BASE_SERVICE_URL', 'http://softuni-social-network.azurewebsites.net/api');

socialNetworkApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/welcome-screen.html',
		controller: 'userController'
	})
	.when('/settings', {
		templateUrl:'templates/settings.html',
		controller: "editProfileController"
	})
	.when('/home', {
		templateUrl: 'templates/news-feed.html',
		controller: "newsFeedController"
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