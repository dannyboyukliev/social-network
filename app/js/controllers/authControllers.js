var AuthControllers = angular.module('AuthControllers', []);

AuthControllers.controller('authController', ['$scope', '$http', '$location', 'authentication', 'notify',
	function ($scope, $http, $location, authentication, notify) {
		$scope.isLogged = false;

		$scope.loginData = {
			username: '',
			password: ''
		};

		$scope.registerData = {
			username: '',
			password: '',
			confirmPassword: '',
			name: '',
			email: ''
		}

		$scope.login = function (loginData) {
			$scope.isLogged = true;
			
			var isLoginDataValid = true;

			if (loginData.username === '') {
				notify({ 
					message: 'Enter valid username',
					classes: 'alert-danger'
				});
				isLoginDataValid = false;
			}

			if (loginData.password === '') {
				notify({
					message: 'Enter valid password',
					classes: 'alert-danger'
				});
				isLoginDataValid = false;
			}

			if (isLoginDataValid) {
				// close all shown notifications.
				notify.closeAll();
				
				makeLoginQuery(loginData);
			}
		}

		$scope.register = function (registerData) {

			var isRegisterDataValid = true;

			if (registerData.username === '') {
				notify({ 
					message: 'Enter valid username',
					classes: 'alert-danger'
				});
				isRegisterDataValid = false;
			}

			if (registerData.password === '') {
				notify({
					message: 'Enter valid password',
					classes: 'alert-danger'
				});
				isRegisterDataValid = false;
			}	

			if (registerData.confirmPassword === '') {
				notify({
					message: 'Confirm your password',
					classes: 'alert-danger'
				});
				isRegisterDataValid = false;
			}

			if (registerData.name === '') {
				notify({
					message: 'Enter your name',
					classes: 'alert-danger'
				});
				isRegisterDataValid = false;
			}

			if (registerData.email === '') {
				notify({
					message: 'Enter valid email',
					classes: 'alert-danger'
				});
				isRegisterDataValid = false;
			}

			if (registerData.password !== registerData.confirmPassword) {
				notify({
					message: 'Password and confirmed password don\'t match',
					classes: 'alert-danger'
				});
				isRegisterDataValid = false;
			}

			if (isRegisterDataValid) {
				// close all shown notifications.
				notify.closeAll();
			
				makeRegisterQuery(registerData);
			}
		}

		/* After login data has been validated. */
		function makeLoginQuery (loginData) {;
			authentication.login($scope.loginData, 
				function (data) {

					notify({ 
						message: 'Logged in. Redirecting to news feed',
						classes: 'alert-success'
					});

					authentication.setCredentials(data);
					console.log(data);
					$scope.isLogged = true;
					$location.path('/home');
					clearAllLoginFields();
				}, function (error) {
					notify({ 
						message: error,
						classes: 'alert-danger'
					});
					clearAllLoginFields();
				});
		}

		/* Register data is validated and is ready to be send to the server. */
		function makeRegisterQuery (registerData) {

			authentication.register($scope.registerData, 
				function (data) {
					notify({ 
						message: 'Registered. Redirecting to the news feed',
						classes: 'alert-success'
					});
					$scope.isLogged = true;
					authentication.setCredentials(data);
					$location.path('/home');
					clearAllRegisterFields();
				}, function (error) {
					notify({ 
						message: error,
						classes: 'alert-danger'
					});
					clearRegisterPasswords();
				});
		}

		function clearAllLoginFields () {
			$scope.loginData = {
				username: '',
				password: ''
			};
		}

		function clearAllRegisterFields () {
			$scope.registerData = {
				username: '',
				password: '',
				confirmPassword: '',
				name: '',
				email: ''
			}
		}

		function clearRegisterPasswords () {
			$scope.registerData.password = '';
			$scope.registerData.confirmPassword = '';
		}
	}
]);