'use strict';
myApp.controller('listUserManagementController', listUserManagementControllerFnc);

function listUserManagementControllerFnc($scope, $location, $compile, DTOptionsBuilder, DTColumnBuilder, userManagementModel, Flash) {
    $scope.deleteID;
    $scope.deleteUserData;
    $scope.openDeleteModal = openDeleteModal;
    $scope.msg;
    $scope.msgType;
    $scope.msgShow;

    userManagementModel.getUserList().success(function(response) {
        if (response.accessDenied == 'true') {
            $location.path('/dashboard');
            Flash.create(response.msgType, response.msg);
        }
    });

    $scope.dtOptions = DTOptionsBuilder.fromSource(baseUrl + 'portal/user-management')
        .withPaginationType('full_numbers').withOption('createdRow', createdRow)
        .withOption('responsive', true).withBootstrap();
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('name').withTitle('Name'),
        DTColumnBuilder.newColumn('display_name').withTitle('Role'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml).withClass('text-center btn-group-sm')
    ];
    $scope.dtInstance = {};
    $scope.deleteUser = function(id){
        userManagementModel.deleteUser(id).success(function(response) {
            $('#userManagementDatatable').DataTable().ajax.reload();//This part is stupid
            $('#userManagementDeleteModal').modal('hide');
            $scope.deleteUserData = response.userData;
            $scope.msg = response.msg;
            Flash.create(response.msgType, response.msg);
        });
    }


    function openDeleteModal(id) {
        userManagementModel.getUser(id).success(function(response) {
            $scope.deleteID = id;
            $scope.deleteUserData = response.userData;
        });
    }
    function createdRow(row, data, dataIndex) {
        // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())($scope);
    }
    function actionsHtml(data, type, full, meta) {
            return '<a class="btn btn-primary btn-fab" href="#/user-management/'+data.id+'"><i class="material-icons md-24">mode_edit</i></a>&nbsp;' +
            '<button class="btn btn-danger btn-fab" data-toggle="modal" data-target="#userManagementDeleteModal" ng-click="openDeleteModal('+data.id+')">' +
            '   <i class="material-icons md-24">delete</i>' +
            '</button>';
    }
}

myApp.controller('singleUserManagementController', ['$scope', '$routeParams','$location','userManagementModel', 'Flash',
  function($scope, $routeParams, $location, userManagementModel, Flash) {
    $scope.pageid = $routeParams.id;
    $scope.userData;
    $scope.roles;
    $scope.selectedRole;

    userManagementModel.getUser($scope.pageid).success(function(response) {
        if (response.accessDenied == 'true') {
            $location.path('/dashboard');
            Flash.create(response.msgType, response.msg);
        }
        //$scope.userData = response;
        $scope.userData = response.userData;
        $scope.roles = response.roles;
        $scope.selectedRole = {'id': response.userData.role_id, 'display_name': response.userData.role_display_name};
    });

    // === Functions === //
    angular.extend($scope, {
        updateUserData: function() {
            userManagementModel.updateUser($scope.userData, $scope.selectedRole).success(function(response) {
                $scope.userData = response.userData;
                Flash.create(response.msgType, response.msg);
            });
        },
        deleteUser: function(id){
            userManagementModel.deleteUser(id).success(function(response) {
                $('.modal-backdrop').hide();
                $location.path( "/user-management" );
                Flash.create(response.msgType, response.msg);
            });
        }
    });
}]);

// myApp.controller('createUserManagementController', ['$scope', '$routeParams','$location','userManagementModel','Flash',
//   function($scope, $routeParams, $location, userManagementModel,Flash) {
//     $scope.userData = {'id':'','name':'','email':'','role':''};
//     // === Functions === //
//     angular.extend($scope, {
//         createUserManagementData: function(){
//             if ($scope.createStaticPageForm.$valid) {
//                 userManagementModel.createUser($scope.staticpageData).success(function(response) {
//                     $location.path('/user-management/'+response.userData.id);
//                     Flash.create(response.msgType, response.msg);
//                 });
//             }
//         }
//     });
// }]);
