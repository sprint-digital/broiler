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

        $routeProvider.otherwise('/dashboard');
	}
]);

//# sourceMappingURL=app.js.map
