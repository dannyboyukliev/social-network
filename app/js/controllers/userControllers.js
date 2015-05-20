var userControllers = angular.module('userControllers', []);

userControllers.controller('userController', ['$scope', '$http',
	function ($scope, $http) {
		$scope.loginData = {
			username: '',
			password: ''
		};

		$scope.registerData = {
			username: '',
			password: '',
			confirmedPassword: '',
			fullName: '',
			email: '',
			gender: ''
		}

		$scope.login = function (loginData) {
			console.log(loginData);
		}

		$scope.register = function (registerData) {
			// TODO: add genders.
			if (registerData.password === registerData.confirmedPassword) {
				console.log(registerData);
			} else {
				// Pasword is different than confirmed password.
			}
		}
	}
]);