var myApp = angular.module('myApp', ['ngRoute','ngCookies']);


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
        $routeProvider.otherwise('/dashboard');
	}
]);
