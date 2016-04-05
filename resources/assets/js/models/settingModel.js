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