var myApp = angular.module('myApp', ['ngRoute','ngCookies','datatables', 'datatables.bootstrap' ,'ngResource', 'summernote', 'ngFlash', 'ngFileUpload']);


myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'backend/dashboard.html',
        });
        $routeProvider.when('/profile', {
            templateUrl: 'backend/profile.html',
        });
        $routeProvider.when('/setting', {
            templateUrl: 'backend/setting.html',
        });
        $routeProvider.when('/staticpage', {
            templateUrl: 'backend/staticpage/staticpage-list.html'
        });
        $routeProvider.when('/staticpage/create', {
            templateUrl: 'backend/staticpage/staticpage-create.html'
        });
        $routeProvider.when('/staticpage/:id', {
            templateUrl: 'backend/staticpage/staticpage-single.html'
        });
        $routeProvider.when('/blog', {
            templateUrl: 'backend/blog/blog-list.html'
        });
        $routeProvider.when('/blog/create', {
            templateUrl: 'backend/blog/blog-create.html'
        });
        $routeProvider.when('/blog/:id', {
            templateUrl: 'backend/blog/blog-single.html'
        });

        $routeProvider.otherwise('/dashboard');
	}
]);
