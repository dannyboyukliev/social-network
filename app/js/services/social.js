socialNetworkApp.factory('social', function ($http, BASE_SERVICE_URL, authentication) {
	var service = {};

	service.getUser = function () {
		return $http.get(BASE_SERVICE_URL + '/me', authentication.getHeaders());
	}

	service.changePassword = function (credentials) {
        console.log(credentials);
		return $http.put(BASE_SERVICE_URL + '/me/changepassword', credentials, authentication.getHeaders());
	}	

	service.editProfile = function (user) {
        return $http.put(BASE_SERVICE_URL + "/me", user, authentication.getHeaders());
    }

    service.getFriendRequests = function() {
        return $http.get(BASE_SERVICE_URL + "/me/requests", authentication.getHeaders());
    }

    service.searchUsersByName = function(searchTerm) {
        return $http.get(BASE_SERVICE_URL + "/users/search?searchTerm=" + searchTerm, authentication.getHeaders());
    }

    service.sendFriendRequest = function(username) {
        return $http.post(BASE_SERVICE_URL + "/me/requests/" + username, null, authentication.getHeaders());
    }

    service.acceptRequest = function(requestId) {
        return $http.put(BASE_SERVICE_URL + "/me/requests/" + requestId + "?status=approved", null, authentication.getHeaders());
    }

    service.rejectRequest = function (requestId) {
        return $http.put(BASE_SERVICE_URL + "/me/requests/" + requestId + "?status=rejected", null, authentication.getHeaders());
    }

    service.getOwnFriendsPreview = function() {
        return $http.get(BASE_SERVICE_URL + "/me/friends/preview", authentication.getHeaders());
    }

    service.getOwnFriendsFull = function () {
        return $http.get(BASE_SERVICE_URL + "/me/friends", authentication.getHeaders());
    }

    service.getNewsFeed = function() {
    	console.log(authentication.getHeaders());
        return $http.get(BASE_SERVICE_URL + "/me/feed?StartPostId=&PageSize=5", authentication.getHeaders());
    }

    service.addNewPost = function(postText) {
        return $http.post(BASE_SERVICE_URL + "/Posts", { postContent: postText, username: authentication.getUsername() }, authentication.getHeaders());
    }

    service.likePost = function(postId) {
        return $http.post(BASE_SERVICE_URL + "/Posts/" + postId + "/likes", null, authentication.getHeaders());
    }

    service.unlikePost = function (postId) {
        return $http.delete(BASE_SERVICE_URL + "/Posts/" + postId + "/likes", authentication.getHeaders());
    }

    service.addCommentToPost = function(postId, comment) {
        return $http.post(BASE_SERVICE_URL + "/posts/" + postId + "/comments", comment, authentication.getHeaders());
    }

    service.likeComment = function(postId, commentId) {
        return $http.post(BASE_SERVICE_URL + "/posts/" + postId + "/comments/" + commentId + "/likes", null, authentication.getHeaders());
    }

    service.unlikeComment = function (postId, commentId) {
        return $http.delete(BASE_SERVICE_URL + "/posts/" + postId + "/comments/" + commentId + "/likes", authentication.getHeaders());
    }

    service.editPost = function(postId, post) {
        return $http.put(BASE_SERVICE_URL + "/Posts/" + postId, post, authentication.getHeaders());
    }

    service.deletePost = function (postId) {
        return $http.delete(BASE_SERVICE_URL + "/Posts/" + postId, authentication.getHeaders());
    }

    service.editComment = function(postId, commentId, comment) {
        return $http.put(BASE_SERVICE_URL + "/posts/" + postId + "/comments/" + commentId, comment, authentication.getHeaders());
    }

    service.deleteComment = function (postId, commentId) {
        return $http.delete(BASE_SERVICE_URL + "/posts/" + postId + "/comments/" + commentId, authentication.getHeaders());
    }

	return service;
});