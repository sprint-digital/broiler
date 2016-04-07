var myApp = angular.module('myApp', ['ngRoute','ngCookies','datatables', 'datatables.bootstrap' ,'ngResource', 'summernote']);


myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'backend/dashboard.html',
            controller: 'dashboardController'
        });
        $routeProvider.when('/profile', {
            templateUrl: 'backend/profile.html',
            controller: 'userController'
        });
        $routeProvider.when('/setting', {
            templateUrl: 'backend/setting.html',
            controller: 'settingController'
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


        $routeProvider.otherwise('/dashboard');
	}
]);
