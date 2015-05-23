var EditProfileController = angular.module('EditProfileController', []);

EditProfileController.controller('editProfileController', ['$scope', '$location', 'social', 'notify',
	function ($scope, $location, social, notify) {
        $scope.user = {
            email: '',
            name: '',
            username: ''
        }

        var getUserData = function () {
            social.getUser()
                .then(function (resultData) {
                    $scope.user.email = resultData.data.email;
                    $scope.user.name = resultData.data.name;
                    $scope.user.username = resultData.data.username;
                }, function (error) {
                    notify({ 
                        message: 'Error witch fetching the data: ' + error.data['message'],
                        classes: 'alert-danger'
                    });
                });
        }

        getUserData();

        $scope.saveChanges = function () {
            social.editProfile($scope.user)
                .then(function (resultData) {
                    notify({
                        message: 'Profile edited successfully.'
                    });
                }, function (error) {
                    notify({
                        message: 'Error editing profile: ' + error.data['message'],
                        classes: 'alert-danger'
                    })
                });
        }
	}
]);