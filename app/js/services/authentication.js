socialNetworkApp.factory('authentication', function ($http, BASE_SERVICE_URL) {
	var service = {};

	service.Login = function (loginData, success, error) {
		$http.post(BASE_SERVICE_URL + '/users/login', loginData)
			.success(function (data, status, headers, config) {
				success(data);
			}).error(error);
	};

	service.Register = function (registerData, success, error) {
		$http.post(BASE_SERVICE_URL + '/users/register', registerData)
			.success(function (data, status, headers, config) {
				success(data);
			}).error(error);
	}

	return service;
});