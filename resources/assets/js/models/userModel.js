myApp.factory('userModel', ['$http', function($http) {
    return {
        getUser: function() {
            return $http.get(baseUrl + 'portal/user/show');
        },
        updateUser: function(userData) {
            return $http({
                method  : 'POST',
                url     : baseUrl + 'portal/user/'+userData.id+'/update',
                data    : userData,  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        }

    };
}])