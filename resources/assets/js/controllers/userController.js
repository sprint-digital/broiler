myApp.controller('userController', ['$scope', '$location', 'userModel', 'Flash',
    function($scope, $location, userModel, Flash) {
        $scope.userData;
        /*Getting User Profile*/
        userModel.getUser().success(function(response) {
            if (response.accessDenied == 'true') {
                $location.path('/dashboard');
                Flash.create(response.msgType, response.msg);
            }
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

