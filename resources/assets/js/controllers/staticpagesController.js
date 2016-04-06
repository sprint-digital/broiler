myApp.controller('staticpagesController', ['$scope', '$location', 'staticpagesModel', 'DTOptionsBuilder', 'DTColumnBuilder',
    function($scope, $location, staticpagesModel, DTOptionsBuilder, DTColumnBuilder) {
        $scope.staticpagesDatas;
        $scope.value;
        $scope.key;
        /*Getting all the staticpages*/
        staticpagesModel.getStaticpages().success(function(response) {
            $scope.staticpagesDatas = response;
            console.log('test in');
            //I don't know why I have to do this... seems so stupid...
            var deferred = $.Deferred()
            deferred.resolve(response); 
            $scope.dtOptions = DTOptionsBuilder.fromFnPromise(deferred.promise)
                .withPaginationType('full_numbers')
                // Active Responsive plugin
                .withOption('responsive', true).withBootstrap();
            $scope.dtColumns = [
                DTColumnBuilder.newColumn('id').withTitle('ID'),
                DTColumnBuilder.newColumn('title').withTitle('Title'),
                DTColumnBuilder.newColumn('slug').withTitle('Slug'),
                DTColumnBuilder.newColumn('sortid').withTitle('Sort #'),
                // .notVisible() does not work in this case. Use .withClass('none') instead
                DTColumnBuilder.newColumn('content').withTitle('Content').withClass('none')
            ];
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

