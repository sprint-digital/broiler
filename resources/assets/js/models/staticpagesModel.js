myApp.factory('staticpagesModel', ['$http', function($http) {
    return {
        getStaticpages: function() {
            return $http.get(baseUrl + 'portal/staticpage/show');
        },
        updateStaticpages: function(staticpagesData) {
            return $http({
                method  : 'PUT',
                url     : baseUrl + 'portal/staticpage/'+staticpagesData.id,
                data    : staticpagesData,  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        },
        createStaticpages: function(staticpagesData) {
            return $http({
                method  : 'POST',
                url     : baseUrl + 'portal/staticpage',
                data    : staticpagesData,  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        }

    };
}])