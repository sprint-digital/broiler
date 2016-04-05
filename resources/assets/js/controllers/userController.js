myApp.controller('userController', ['$scope', '$location', 'userModel',
    function($scope, $location, userModel) {
        $scope.userData;
        /*Getting User Profile*/
        userModel.getUser().success(function(response) {
            $scope.userData = response;
        });

        // === Functions === //
        angular.extend($scope, {
            updateUserData: function() {
                userModel.updateUser($scope.userData).success(function(response) {
                    $scope.userData = response;
                });
            }
        });
    }
]);

