myApp.factory('settingModel', ['$http', function($http) {
    return {
        getSettings: function() {
            return $http.get(baseUrl + 'portal/setting');
        },
        getSetting: function(settingId) {
            return $http.get(baseUrl + 'portal/setting/' + settingId);
        },
        updateSetting: function(settingData) {
            return $http({
                method  : 'PUT',
                url     : baseUrl + 'portal/setting',
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
        },
        deleteSetting: function(settingId) { 
            return $http({
                method  : 'DELETE',
                url     : baseUrl + 'portal/setting/' + settingId,
                headers: {'Content-Type': 'application/json'},
                });
        },
        getCoreSettings: function() {
            return $http.get(baseUrl + 'portal/coreSetting');
        },
        getCoreSetting: function(coreSettingId) {
            return $http.get(baseUrl + 'portal/coreSetting/' + coreSettingId);
        },
        updateCoreSetting: function(coreSettingData) {
            return $http({
                method  : 'PUT',
                url     : baseUrl + 'portal/coreSetting',
                data    : coreSettingData,  // pass in data as strings
                headers: {'Content-Type': 'application/json'},
                });
        }
    };
}])