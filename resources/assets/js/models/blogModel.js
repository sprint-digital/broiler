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