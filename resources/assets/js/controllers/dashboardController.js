myApp.controller('dashboardController', ['$scope', '$location', 'dashboardModel', 'Flash',
    function($scope, $location, dashboardModel, Flash) {
    	$scope.test = 'testings';
        /*Getting all the galleries*/
        // dashboardModel.getDashboard().success(function(response) {
        //     $scope.dashboardData = response;
        //     console.log(response);
        // });
    }
]);
