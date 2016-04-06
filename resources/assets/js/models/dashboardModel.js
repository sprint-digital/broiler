myApp.factory('dashboardModel', ['$http', function($http) {
    return {
        getDashboard: function() {
            return $http.get(baseUrl + 'portal/dashboard');
        }
    };
}])