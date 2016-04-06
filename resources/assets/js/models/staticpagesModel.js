myApp.factory('staticpagesModel', ['$http', function($http) {
    return {
        getStaticpages: function() {
            return $http.get(baseUrl + 'portal/staticpage');
        },
        getStaticpage: function(staticPageId) {
            console.log('in static page model - ' + staticPageId);
            return $http.get(baseUrl + 'portal/staticpage/' + staticPageId );
        },
        updateStaticpages: function(staticpageData) {
            return $http({
                method  : 'PUT',
                url     : baseUrl + 'portal/staticpage/'+staticpageData.id,
                data    : staticpageData,  // pass in data as strings
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