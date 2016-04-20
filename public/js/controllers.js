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

myApp.controller('userController', ['$scope', '$location', 'userModel',
    function($scope, $location, userModel) {
        $scope.userData;
        /*Getting User Profile*/
        userModel.getUser().success(function(response) {
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


myApp.controller('settingController', ['$scope', '$location', 'settingModel',
    function($scope, $location, settingModel) {
        $scope.settingDatas;
        $scope.value;
        $scope.key;
        /*Getting all the Settings*/
        settingModel.getSetting().success(function(response) {
            $scope.settingDatas = response;
        });

        // === Functions === //
        angular.extend($scope, {
            updateSettingData: function() {
                settingModel.updateSetting($scope.settingData).success(function(response) {
                    $scope.settingDatas = response;
                });
            },
            createSettingData: function(){
                console.log('in setting controller');
                settingModel.createSetting($scope.key,$scope.value).success(function(response) {
                    console.log('successs');
                    $scope.settingDatas = response;
                });
            }
        });
    }
]);


'use strict';
myApp.controller('listStaticpageController', listStaticpageControllerFnc);

function listStaticpageControllerFnc($scope, $location, $compile, DTOptionsBuilder, DTColumnBuilder, staticpageModel, Flash) {
    $scope.deleteID;
    $scope.deleteStaticPageData;
    $scope.openDeleteModal = openDeleteModal;
    $scope.msg;
    $scope.msgType;
    $scope.msgShow;

    staticpageModel.getStaticpageList().success(function(response) {
        if (response.accessDenied == 'true') {
            $location.path('/dashboard');
            Flash.create(response.msgType, response.msg);
        }
    });

    $scope.dtOptions = DTOptionsBuilder.fromSource(baseUrl + 'portal/staticpage')
        .withPaginationType('full_numbers').withOption('createdRow', createdRow)
        .withOption('responsive', true).withBootstrap();
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('title').withTitle('Title'),
        DTColumnBuilder.newColumn('slug').withTitle('Slug'),
        DTColumnBuilder.newColumn('sortid').withTitle('Sort #'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml).withClass('text-center btn-group-sm'),
        DTColumnBuilder.newColumn('content').withTitle('Content').withClass('none')
    ];
    $scope.dtInstance = {};
    $scope.deleteStaticpage = function(id){
        staticpageModel.deleteStaticpage(id).success(function(response) {
            $('#staticPageDatatable').DataTable().ajax.reload();//This part is stupid
            $('#staticpageDeleteModal').modal('hide');
            $scope.deleteStaticPageData = response.staticpagesData;
            $scope.msg = response.msg;
            Flash.create(response.msgType, response.msg);
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
            return '<a class="btn btn-primary btn-fab" href="#/staticpage/'+data.id+'"><i class="material-icons md-24">mode_edit</i></a>&nbsp;' +
            '<button class="btn btn-danger btn-fab" data-toggle="modal" data-target="#staticpageDeleteModal" ng-click="openDeleteModal('+data.id+')">' +
            '   <i class="material-icons md-24">delete</i>' +
            '</button>';
    }
}

myApp.controller('singleStaticpageController', ['$scope', '$routeParams','$location','staticpageModel', 'Flash',
  function($scope, $routeParams, $location, staticpageModel, Flash) {
    $scope.pageid = $routeParams.id;
    $scope.staticpageData;
    staticpageModel.getStaticpage($scope.pageid).success(function(response) {
        if (response.accessDenied == 'true') {
            $location.path('/dashboard');
            Flash.create(response.msgType, response.msg);
        }
        $scope.staticpageData = response;
    });

    // === Functions === //
    angular.extend($scope, {
        updateStaticpageData: function() {
            staticpageModel.updateStaticpage($scope.staticpageData).success(function(response) {
                $scope.staticpageData = response.staticpageData;
                Flash.create(response.msgType, response.msg);
            });
        },
        deleteStaticpage: function(id){
            staticpageModel.deleteStaticpage(id).success(function(response) {
                $('.modal-backdrop').hide();
                $location.path( "/staticpage" );
                Flash.create(response.msgType, response.msg);
            });
        }
    });
}]);

myApp.controller('createStaticpageController', ['$scope', '$routeParams','$location','staticpageModel','Flash',
  function($scope, $routeParams, $location, staticpageModel,Flash) {
    $scope.staticpageData = {'id':'','title':'','slug':'','sortid':'','content':''};
    // === Functions === //
    angular.extend($scope, {
        createStaticpageData: function(){
            if ($scope.createStaticPageForm.$valid) {
                staticpageModel.createStaticpage($scope.staticpageData).success(function(response) {
                    $location.path('/staticpage/'+response.staticpageData.id);
                    Flash.create(response.msgType, response.msg);
                });
            }
        }
    });
}]);

'use strict';
myApp.controller('listBlogController', listBlogControllerFnc);

function listBlogControllerFnc($scope, $location, $compile, DTOptionsBuilder, DTColumnBuilder, blogModel, Flash) {
    $scope.deleteID;
    $scope.deleteBlogData;
    $scope.openDeleteModal = openDeleteModal;
    $scope.msg;
    $scope.msgType;
    $scope.msgShow;

    blogModel.getBlogList().success(function(response) {
        if (response.accessDenied == 'true') {
            $location.path('/dashboard');
            Flash.create(response.msgType, response.msg);
        }
    });

    $scope.dtOptions = DTOptionsBuilder.fromSource(baseUrl + 'portal/blog')
        .withPaginationType('full_numbers').withOption('createdRow', createdRow)
        .withOption('responsive', true).withBootstrap();
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('title').withTitle('Title'),
        DTColumnBuilder.newColumn('slug').withTitle('Slug'),
        DTColumnBuilder.newColumn('sortid').withTitle('Sort #'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml).withClass('text-center btn-group-sm'),
        DTColumnBuilder.newColumn('content').withTitle('Content').withClass('none')
    ];
    $scope.dtInstance = {};
    $scope.deleteBlog = function(id){
        blogModel.deleteBlog(id).success(function(response) {
            $('#blogDatatable').DataTable().ajax.reload();//This part is stupid
            $('#blogDeleteModal').modal('hide');
            $scope.deleteBlogData = response.blogData;
            $scope.msg = response.msg;
            Flash.create(response.msgType, response.msg);
        });
    }


    function openDeleteModal(id) {
        blogModel.getBlog(id).success(function(response) {
            $scope.deleteID = id;
            $scope.deleteBlogData = response;
        });
    }
    function createdRow(row, data, dataIndex) {
        // Recompiling so we can bind Angular directive to the DT
        $compile(angular.element(row).contents())($scope);
    }
    function actionsHtml(data, type, full, meta) {
            return '<a class="btn btn-primary btn-fab" href="#/blog/'+data.id+'"><i class="material-icons md-24">mode_edit</i></a>&nbsp;' +
            '<button class="btn btn-danger btn-fab" data-toggle="modal" data-target="#blogDeleteModal" ng-click="openDeleteModal('+data.id+')">' +
            '   <i class="material-icons md-24">delete</i>' +
            '</button>';
    }
}

myApp.controller('singleBlogController', ['$scope', '$routeParams','$location','blogModel', 'Flash',
  function($scope, $routeParams, $location, blogModel, Flash) {
    $scope.pageid = $routeParams.id;
    $scope.blogData;
    blogModel.getBlog($scope.pageid).success(function(response) {
        if (response.accessDenied == 'true') {
            $location.path('/dashboard');
            Flash.create(response.msgType, response.msg);
        }
        $scope.blogData = response;
    });

    // === Functions === //
    angular.extend($scope, {
        updateBlogData: function() {
            blogModel.updateBlog($scope.blogData).success(function(response) {
                $scope.blogData = response.blogData;
                Flash.create(response.msgType, response.msg);
            });
        },
        deleteBlog: function(id){
            blogModel.deleteBlog(id).success(function(response) {
                $('.modal-backdrop').hide();
                $location.path( "/blog" );
                Flash.create(response.msgType, response.msg);
            });
        }
    });
}]);

myApp.controller('createBlogController', ['$scope', '$routeParams','$location','blogModel','Flash',
  function($scope, $routeParams, $location, blogModel,Flash) {
    $scope.blogData = {'id':'','title':'','slug':'','sortid':'','content':''};
    // === Functions === //
    angular.extend($scope, {
        createBlogData: function(){
            if ($scope.createBlogForm.$valid) {
                blogModel.createBlog($scope.blogData).success(function(response) {
                    $location.path('/blog/'+response.blogData.id);
                    Flash.create(response.msgType, response.msg);
                });
            }
        }
    });
}]);

//# sourceMappingURL=controllers.js.map
