myApp.controller('userController', ['$scope', '$http', '$location', 'userModel', function($scope, $http, $location, userModel) {
    angular.extend($scope, {
        login: {
            username: 'hoang@hallandco.digital',
            password: 'secret'
        }
    });

    angular.extend($scope, {
        postLogin: function(loginData) {
            var data = {
                email: $scope.login.username,
                password: $scope.login.password
            };

            console.log(loginData);
            $http({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: baseUrl + 'auth',
                method: "POST",
                data: {
                    email: loginData.email,
                    password: loginData.password
                }
            }).success(function(response) {
                console.log(response);
                //$cookies.put('auth', JSON.stringify(response));
            }).error(function(data, status, headers) {
                console.log(data, status, headers);
                alert(data);
            });



            // userModel.showLogin(data).then(function() {
            //     $location.path('/portal/dashboard');
            // });
        }
    });
}]);
//# sourceMappingURL=controllers.js.map
