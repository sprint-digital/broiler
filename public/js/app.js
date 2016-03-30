var myApp = angular.module('myApp', ['ngRoute','ngCookies']);


myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'portal/auth/login.html',
            controller: 'userController'
        });

        $routeProvider.when('/dashboard', {
            templateUrl: 'portal/dashboard.html',
            controller: 'userController',
            //authenticated: true
        });

        $routeProvider.when('/logout', {
            templateUrl: 'portal/auth/logout.html',
            controller: 'userController',
            //authenticated: true
        });

        $routeProvider.otherwise('/login');
	}
]);

//# sourceMappingURL=app.js.map
