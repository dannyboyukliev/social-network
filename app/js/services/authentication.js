socialNetworkApp.factory('authentication', function ($http, BASE_SERVICE_URL) {
	var service = {};

	service.login = function (loginData, success, error) {
		$http.post(BASE_SERVICE_URL + '/users/login', loginData)
			.success(function (data, status, headers, config) {
                console.log(data);
				success(data);
			}).error(error);
	};

	service.register = function (registerData, success, error) {
		$http.post(BASE_SERVICE_URL + '/users/register', registerData)
			.success(function (data, status, headers, config) {
				success(data);
			}).error(error);
	}

    service.logout = function (success, error) {
        $http.post(BASE_SERVICE_URL + '/users/logout', null, service.getHeaders())
            .success(function (data) {
                success(data);
            }).error(error);
    }

	service.getHeaders = function() {
        return {
            headers: {
                'Authorization': "Bearer " + localStorage['accessToken']
            }
        };
    };

    service.isLoggedIn = function () {
        return localStorage['accessToken'];
    };

    service.clearCredentials = function () {
        localStorage.clear();
    };

    service.getIsAdmin = function () {
        return localStorage['isAdmin'];
    };

    service.setCredentials = function (serverData) {
        localStorage['accessToken'] = serverData.access_token;
        localStorage['username'] = serverData.username;
        localStorage['isAdmin'] = serverData.isAdmin ? serverData.isAdmin : false;
    };

    service.changePassword = function (passwordData, success, error) {
        $http.put(BASE_SERVICE_URL + '/ChangePassword', passwordData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success()
            }).error(error);
    };

    service.editUserProfile = function (editUserData, success, error) {
        $http.put(BASE_SERVICE_URL + '/profile', editUserData, {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

    service.getUserProfile = function (success, error) {
        $http.get(BASE_SERVICE_URL + '/profile', {headers: this.GetHeaders()})
            .success(function (data, status, headers, config) {
                success(data)
            }).error(error);
    };

	return service;
});