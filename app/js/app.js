var socialNetworkApp = angular.module('socialNetworkApp', [
	'ngSanitize',
	'ngRoute',
	'ngMaterial',
	'userControllers',
	'toolbarControllers',
	'EditProfileController'
]);

socialNetworkApp.constant('baseUrl', 'http://softuni-social-network.azurewebsites.net');

socialNetworkApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/welcome-screen.html',
		controller: 'userController'
	})
	.when('/settings', {
		templateUrl:'templates/settings.html',
		controller: "editProfileController"
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
