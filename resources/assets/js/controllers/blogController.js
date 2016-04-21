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
        DTColumnBuilder.newColumn('author').withTitle('Author'),
        DTColumnBuilder.newColumn(null).withTitle('Actions').notSortable().renderWith(actionsHtml).withClass('text-center btn-group-sm'),
        DTColumnBuilder.newColumn('author_bio').withTitle('Author Bio').withClass('none'),
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
            if ($scope.updateBlogForm.$valid) {
                blogModel.updateBlog($scope.blogData).success(function(response) {
                    $scope.blogData = response.blogData;
                    Flash.create(response.msgType, response.msg);
                });
            }
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
    $scope.blogData = {'id':'','title':'','content':'','author':'','author_bio':''};
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
