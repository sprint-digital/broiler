myApp.factory('staticpageModel', ['$http', function($http) {
    return {
        getStaticpageList: function() {
            return $http.get(baseUrl + 'portal/staticpage');
        },
        getStaticpage: function(staticPageId) {
            return $http.get(baseUrl + 'portal/staticpage/' + staticPageId );
        },
        updateStaticpage: function(staticpageData) {
            return $http({
                method  : 'PUT',
                url     : baseUrl + 'portal/staticpage/'+staticpageData.id,
                data    : staticpageData,  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        },
        createStaticpage: function(staticpageData) {
            return $http({
                method  : 'POST',
                url     : baseUrl + 'portal/staticpage',
                data    : staticpageData,  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        }
    };
}])