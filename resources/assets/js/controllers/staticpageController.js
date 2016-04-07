'use strict';
myApp.controller('listStaticpageController', listStaticpageControllerFnc);

function listStaticpageControllerFnc($scope, $compile, DTOptionsBuilder, DTColumnBuilder, staticpageModel) {
    var vm = this;
    $scope.deleteID;
    $scope.deleteStaticPageData;
    $scope.openDeleteModal = openDeleteModal;


    $scope.dtOptions = DTOptionsBuilder.fromSource(baseUrl + 'portal/staticpage')
        .withPaginationType('full_numbers').withOption('createdRow', createdRow)
        .withOption('responsive', true).withBootstrap();
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('title').withTitle('Title'),
        DTColumnBuilder.newColumn('slug').withTitle('Slug'),
        DTColumnBuilder.newColumn('sortid').withTitle('Sort #'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml),
        DTColumnBuilder.newColumn('content').withTitle('Content').withClass('none')
    ];
$scope.dtInstance = {};
    $scope.deleteStaticpage = function(id){
        staticpageModel.deleteStaticpage(id).success(function(response) {
            $('#staticPageDatatable').DataTable().ajax.reload();//This part is stupid
            $('#staticpageDeleteModal').modal('hide');
        });
    }
    function openDeleteModal(id) {
        staticpageModel.getStaticpage(id).success(function(response) {
            $scope.deleteID = id;
            $scope.deleteStaticPageData = response;
        });
    }
    function createdRow(row, data, dataIndex) {
        // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())($scope);
    }
    function actionsHtml(data, type, full, meta) {
        //vm.persons[data.id] = data;
            return '<a class="btn btn-warning" href="#/staticpage/'+data.id+'"><i class="fa fa-edit"></i></a>&nbsp;' +
            '<button class="btn btn-danger" data-toggle="modal" data-target="#staticpageDeleteModal" ng-click="openDeleteModal('+data.id+')">' +
            '   <i class="fa fa-trash-o"></i>' +
            '</button>';
    }
}

myApp.controller('singleStaticpageController', ['$scope', '$routeParams','$location','staticpageModel',
  function($scope, $routeParams, $location, staticpageModel) {
    $scope.pageid = $routeParams.id;
    $scope.staticpageData;
    staticpageModel.getStaticpage($scope.pageid).success(function(response) {
        $scope.staticpageData = response;
    });

    // === Functions === //
    angular.extend($scope, {
        updateStaticpageData: function() {
            staticpageModel.updateStaticpage($scope.staticpageData).success(function(response) {
                $scope.staticpageData = response;
            });
        }
    });
}]);

myApp.controller('createStaticpageController', ['$scope', '$routeParams','$location','staticpageModel',
  function($scope, $routeParams, $location, staticpageModel) {
    $scope.staticpageData = {'id':'','title':'','slug':'','sortid':'','content':''};
    // === Functions === //
    angular.extend($scope, {
        createStaticpageData: function(){
            staticpageModel.createStaticpage($scope.staticpageData).success(function(response) {
                $location.path('/staticpage/'+response.id);
            });
        }
    });
}]);

myApp.controller('deleteStaticpageController', ['$scope', '$routeParams','$location','staticpageModel','id',
  function($scope, $routeParams, $location, staticpageModel, id) {
    $scope.id = id;
    // === Functions === //
    angular.extend($scope, {

    });
}]);