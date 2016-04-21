myApp.controller('settingController', ['$scope', '$location', 'settingModel','Flash', 'Upload',
    function($scope, $location, settingModel, Flash, Upload) {
        $scope.deleteID;
        $scope.deleteSettingData;
        $scope.openDeleteModal = openDeleteModal;
        $scope.settingDatas;
        $scope.value;
        $scope.key;
        $scope.imageUrl = '/img/logo.png';
        /*Getting all Core Settings*/
        settingModel.getCoreSettings().success(function(response) {
            $scope.settingCoreDatas = response;
        });

        /*Getting all additional Settings*/
        settingModel.getSettings().success(function(response) {
            $scope.settingDatas = response;
        });

        $scope.uploadFiles = function(files, errFiles) {
            $scope.files = files;
            $scope.errFiles = errFiles;
            angular.forEach(files, function(file) {
                file.upload = Upload.upload({
                    url: '/portal/coreSetting/updateLogo',
                    data: {file: file}
                })
                .success(function (data, status, headers, config) {
                    $scope.imageUrl = '/img/logo.png' + '?' + new Date().getTime();
                    Flash.create(data.msgType, data.msg);
                });

            });
        }

        $scope.deleteSetting = function(id){
            settingModel.deleteSetting(id).success(function(response) {
                $('#settingDeleteModal').modal('hide');
                $scope.settingDatas = response.settingDatas;
                Flash.create(response.msgType, response.msg);
            });
        }
        // === Functions === //
        angular.extend($scope, {
            updateSettingData: function() {
                settingModel.updateSetting($scope.settingDatas).success(function(response) {
                    $scope.settingDatas = response.settingDatas;
                    Flash.create(response.msgType, response.msg);
                });
            },
            updateCoreSettingData: function() {
                settingModel.updateCoreSetting($scope.settingCoreDatas).success(function(response) {
                    $scope.settingCoreDatas = response.coreSettingDatas;
                    Flash.create(response.msgType, response.msg);
                });
            },
            createSettingData: function(){
                settingModel.createSetting($scope.key,$scope.value).success(function(response) {
                    $('#settingCreateModal').modal('hide');
                    $scope.value = '';
                    $scope.key = '';
                    $scope.settingDatas = response.settingDatas;
                    Flash.create(response.msgType, response.msg);
                });
            }
        });

        function openDeleteModal(id) {
            settingModel.getSetting(id).success(function(response) {
                $scope.deleteID = id;
                $scope.deleteSettingData = response;
            });
        }

    }
]);

