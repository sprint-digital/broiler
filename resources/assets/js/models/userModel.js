myApp.factory('userModel', ['$http', function($http) {
    return {
        getUser: function() {
            return $http.get(baseUrl + 'portal/user/show');
        },
        updateUser: function(userData) {
            return $http({
                method  : 'PUT',
                url     : baseUrl + 'portal/user/'+userData.id,
                data    : userData,  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        }

    };
}])