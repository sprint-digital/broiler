myApp.factory('userManagementModel', ['$http', function($http) {
    return {
        getUserList: function() {
            return $http.get(baseUrl + 'portal/user-management');
        },
        getUser: function(userId) {
            return $http.get(baseUrl + 'portal/user-management/' + userId );
        },
        updateUser: function(userData, selectedRole, selectedStatus) {
            return $http({
                method  : 'PUT',
                url     : baseUrl + 'portal/user-management/'+userData.id,
                data    : {'userData': userData, 'selectedRole': selectedRole, 'selectedStatus': selectedStatus},  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        },
        createUser: function(userData) {
            return $http({
                method  : 'POST',
                url     : baseUrl + 'portal/user-management',
                data    : userData,  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        },
        deleteUser: function(userId) {
            return $http({
                method  : 'DELETE',
                url     : baseUrl + 'portal/user-management/' + userId,
                headers: {'Content-Type': 'application/json'},
                });
        }
    };
}])