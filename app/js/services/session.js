socialNetworkApp.factory('session', function ($cookieStore, $rootScope) {
	var service = {};

    service.createUser = function (user) {
        $cookieStore.put('user', user);
    }

    service.removeUser = function () {
        $cookieStore.remove('user');
    }

    service.getUser = function () {
        return $cookieStore.get('user');
    }

	return service;
});