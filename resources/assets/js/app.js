var myApp = angular.module('myApp', ['ngRoute','ngCookies','datatables', 'datatables.bootstrap' ,'ngResource']);


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
        $routeProvider.when('/staticpages', {
            templateUrl: 'backend/staticpages.html',
            controller: 'staticpagesController'
        });
        $routeProvider.when('/staticpages/:id', {
            templateUrl: 'backend/staticpages-single.html',
            controller: 'staticpageController'
        });


        $routeProvider.otherwise('/dashboard');
	}
]);
