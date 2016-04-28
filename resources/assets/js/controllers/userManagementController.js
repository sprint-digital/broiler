'use strict';
myApp.controller('listUserManagementController', listUserManagementControllerFnc);

function listUserManagementControllerFnc($scope, $location, $compile, DTOptionsBuilder, DTColumnBuilder, userManagementModel, Flash) {
    $scope.deleteID;
    $scope.deleteUserData;
    $scope.openDeleteModal = openDeleteModal;
    $scope.msgShow;
    $scope.statusAction = '';
    $scope.btnType = 'danger';

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
        DTColumnBuilder.newColumn('active').withTitle('Status').renderWith(statusHtml),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml).withClass('text-center btn-group-sm')
    ];
    $scope.dtInstance = {};
    $scope.deleteUser = function(id){
        userManagementModel.deleteUser(id).success(function(response) {
            $('#userManagementDatatable').DataTable().ajax.reload();//This part is stupid
            $('#userManagementDeleteModal').modal('hide');
            $scope.deleteUserData = response.usersData;
            Flash.create(response.msgType, response.msg);
        });
    }


    function openDeleteModal(id) {
        userManagementModel.getUser(id).success(function(response) {
            $scope.deleteID = id;
            $scope.deleteUserData = response.userData;
            $scope.statusAction = 'Deactivate';
            $scope.btnType = 'danger';
            if (response.userData.active == '0'){ 
                $scope.statusAction = 'Activate'; 
                $scope.btnType = 'primary';
            }
        });
    }
    function createdRow(row, data, dataIndex) {
        // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())($scope);
    }
    function statusHtml(data, type, full, meta) {
        if (data == '1') return 'Active';
        return 'Inactive';
    }
    function actionsHtml(data, type, full, meta) {
        var string = '';
        string = '<a class="btn btn-primary btn-fab ';
        if (data.active == 0) string += 'inactiveUser';
        string += '" href="#/user-management/'+data.id+'"><i class="material-icons md-24">mode_edit</i></a>&nbsp; <button class="btn btn-danger btn-fab ';
        if (data.active == 0) string += 'inactiveUser';
        string += '" data-toggle="modal" data-target="#userManagementDeleteModal" ng-click="openDeleteModal('+data.id+')">' +
        '   <i class="material-icons md-24">account_circle</i>' +
        '</button>';
        return string;
    }
}

myApp.controller('singleUserManagementController', ['$scope', '$routeParams','$location','userManagementModel', 'Flash',
  function($scope, $routeParams, $location, userManagementModel, Flash) {
    $scope.pageid = $routeParams.id;
    $scope.userData;
    $scope.roles;
    $scope.selectedRole;
    $scope.panel = 'default';

    userManagementModel.getUser($scope.pageid).success(function(response) {
        if (response.accessDenied == 'true') {
            $location.path('/dashboard');
            Flash.create(response.msgType, response.msg);
        }
        $scope.userData = response.userData;
        $scope.roles = response.roles;
        $scope.statuses = [{status:"0",label:"Inactive"},{status:"1",label:"Active"}];
        $scope.selectedRole = {'id': response.userData.role_id, 'display_name': response.userData.role_display_name};
        $scope.selectedStatus = {'status': response.userData.active};
        if (response.userData.active == '1') $scope.panel = 'primary';
    });

    // === Functions === //
    angular.extend($scope, {
        updateUserData: function() {
            userManagementModel.updateUser($scope.userData, $scope.selectedRole, $scope.selectedStatus).success(function(response) {
                $scope.userData = response.userData;
                $scope.panel = 'default';
                if (response.userData.active == '1') $scope.panel = 'primary';
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
