myApp.controller('staticpagesController', ['$scope', '$location', 'staticpagesModel',
    function($scope, $location, staticpagesModel) {
        $scope.staticpagesDatas;
        $scope.value;
        $scope.key;
        /*Getting all the staticpages*/
        staticpagesModel.getStaticpages().success(function(response) {
            $scope.staticpagesDatas = response;
        });

        // === Functions === //
        angular.extend($scope, {
            updateStaticpagesData: function() {
                staticpagesModel.updateStaticpages($scope.staticpagesDatas).success(function(response) {
                    $scope.staticpagesDatas = response;
                });
            },
            createStaticpagesData: function(){
                console.log('in staticpages controller');
                staticpagesModel.createStaticpages($scope.key,$scope.value).success(function(response) {
                    console.log('successs');
                    $scope.staticpagesDatas = response;
                });
            }
        });
    }
]);

