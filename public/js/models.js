myApp.factory('dashboardModel', ['$http', function($http) {
    return {
        getDashboard: function() {
            return $http.get(baseUrl + 'portal/dashboard');
        }
    };
}])
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
myApp.factory('settingModel', ['$http', function($http) {
    return {
        getSetting: function() {
            return $http.get(baseUrl + 'portal/setting/show');
        },
        updateSetting: function(settingData) {
            return $http({
                method  : 'PUT',
                url     : baseUrl + 'portal/setting/'+settingData.id,
                data    : settingData,  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        },
        createSetting: function(settingKey, settingValue) {
            return $http({
                method  : 'POST',
                url     : baseUrl + 'portal/setting',
                data    : {'key': settingKey, 'value': settingValue},  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        }

    };
}])
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
        },
        deleteStaticpage: function(staticPageId) {
            return $http({
                method  : 'DELETE',
                url     : baseUrl + 'portal/staticpage/' + staticPageId,
                headers: {'Content-Type': 'application/json'},
                });
        }
    };
}])
myApp.factory('blogModel', ['$http', function($http) {
    return {
        getBlogList: function() {
            return $http.get(baseUrl + 'portal/blog');
        },
        getBlog: function(blogId) {
            return $http.get(baseUrl + 'portal/blog/' + blogId );
        },
        updateBlog: function(blogData) {
            return $http({
                method  : 'PUT',
                url     : baseUrl + 'portal/blog/'+blogData.id,
                data    : blogData,  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        },
        createBlog: function(blogData) {
            return $http({
                method  : 'POST',
                url     : baseUrl + 'portal/blog',
                data    : blogData,  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        },
        deleteBlog: function(blogId) {
            return $http({
                method  : 'DELETE',
                url     : baseUrl + 'portal/blog/' + blogId,
                headers: {'Content-Type': 'application/json'},
                });
        }
    };
}])
//# sourceMappingURL=models.js.map
