socialNetworkApp.factory('authentication', function ($http, BASE_SERVICE_URL) {
	var service = {};

	service.login = function (loginData, success, error) {
		$http.post(BASE_SERVICE_URL + '/users/login', loginData)
			.success(function (data, status, headers, config) {
				success(data);
			}).error(error);
	};

	service.register = function (registerData, success, error) {
		$http.post(BASE_SERVICE_URL + '/users/register', registerData)
			.success(function (data, status, headers, config) {
				success(data);
			}).error(error);
	}

	service.setUserData = function (serverData) {
		localStorage['accessToken'] = serverData.access_token;
		localStorage['username'] = serverData.userName;
		// localStorage['isAdmin'] = serverData.isAdmin;
	}

	return service;
});