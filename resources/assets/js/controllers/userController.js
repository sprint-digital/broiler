myApp.controller('userController', ['$scope', '$location', 'userModel',
    function($scope, $location, userModel) {
        $scope.userData;
        /*Getting all the galleries*/
        userModel.getUser().success(function(response) {
            $scope.userData = response;
        });

        // === Functions === //
        angular.extend($scope, {
            editUserData: function() {
                userModel.updateUser($scope.userData).success(function(response) {
                    $scope.userData = response;
                });
            }
        });
    }
]);

