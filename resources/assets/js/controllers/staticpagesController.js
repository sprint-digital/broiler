myApp.controller('staticpagesController', ['$scope', '$location', '$routeParams', 'staticpagesModel', 'DTOptionsBuilder', 'DTColumnBuilder',
    function($scope, $location, $routeParams, staticpagesModel, DTOptionsBuilder, DTColumnBuilder) {
        $scope.staticpagesDatas;
        $scope.value;
        $scope.key;
        /*Getting all the staticpages*/
        staticpagesModel.getStaticpages().success(function(response) {
            $scope.staticpagesDatas = response;
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
                DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml),
                DTColumnBuilder.newColumn('content').withTitle('Content').withClass('none')
            ];
        });

        function actionsHtml(data, type, full, meta) {
            return '<a class="btn btn-warning" href="#/staticpages/'+data.id+'"><i class="fa fa-edit"></i></a>&nbsp;' +
                '<button class="btn btn-danger" ng-click=""><i class="fa fa-trash-o"></i></button>';
        }
    }
]);

myApp.controller('staticpageController', ['$scope', '$routeParams','$location','staticpagesModel',
  function($scope, $routeParams, $location, staticpagesModel) {
    $scope.pageid = $routeParams.id;
    $scope.staticpageData;
    staticpagesModel.getStaticpage($scope.pageid).success(function(response) {
        $scope.staticpageData = response;
    });
    // === Functions === //
    angular.extend($scope, {
        updateStaticpageData: function() {
            staticpagesModel.updateStaticpages($scope.staticpageData).success(function(response) {
                $scope.staticpageData = response;
            });
        },
        createStaticpagesData: function(){
            staticpagesModel.createStaticpages($scope.key,$scope.value).success(function(response) {
                $scope.staticpageData = response;
            });
        }
    });

}]);