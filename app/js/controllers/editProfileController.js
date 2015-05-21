var EditProfileController = angular.module('EditProfileController', []);

EditProfileController.controller('editProfileController', ['$scope',
	function ($scope, $location) {
        $scope.profileImage = false;

		$scope.uploadNewProfilePicture = function (newProfilePicture) {
        	var file = newProfilePicture.files[0];
        	var MAX_FILE_SIZE = 11128000; // bytes
        	if (file.size <= MAX_FILE_SIZE) {
        		console.log("Image size is OK");
        		var reader = new FileReader();
        		reader.onload = function () {
                    $scope.profileImageData = reader.result;
                    $scope.profileImage = true;
        		};
        		reader.readAsDataURL(file);
        	} else {
        		// TODO: size too big
        	}
        }

        $scope.clickUploadNewProfilePicture = function () {
        	$("#select-profile-image").click();
        }

        $scope.uploadBackgroundImage = function (newCoverImage) {
        	var file = newCoverImage.files[0];
            var MAX_FILE_SIZE = 1024000;
            if (file.size <= MAX_FILE_SIZE) {
                var reader = new FileReader();
                reader.onload = function () {
                    $('#other-info .caption').text(file.name);
                    $('.background-image img').attr('src', reader.result);
                    $('.background-image img').attr('ng-src', reader.result);
                    $scope.coverImageData = reader.result;
                };
                reader.readAsDataURL(file);
            } else {
                Notifications.error("Size limit: 1024kb");
            }
        }

        var clickUploadBackgroundImage = function () {
            $("#select-bg-image").click();
        };
	}
]);