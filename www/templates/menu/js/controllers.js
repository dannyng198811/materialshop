// Controller of menu toggle.
// Learn more about Sidenav directive of angular material
// https://material.angularjs.org/latest/#/demo/material.components.sidenav
appControllers.controller('menuCtrl', function ($scope, $timeout, $mdUtil, $mdSidenav, $log, $ionicHistory, $state) {
    
    $scope.toggleLeft = buildToggler('left');

    // buildToggler is for create menu toggle.
    // Parameter :  
    // navID = id of navigation bar.
    function buildToggler(navID) {
        var debounceFn = $mdUtil.debounce(function () {
            $mdSidenav(navID).toggle();
        }, 0);
        return debounceFn;
    };// End buildToggler.

    // navigateTo is for navigate to other page 
    // by using targetPage to be the destination state. 
    // Parameter :  
    // stateNames = target state to go
    $scope.navigateTo = function (stateName) {
        $timeout(function () {
            $mdSidenav('left').close();
            if ($ionicHistory.currentStateName() != stateName) {
                $ionicHistory.nextViewOptions({
                    disableAnimate: true,
                    disableBack: true
                });
                $state.go(stateName);
            }
        }, ($scope.isAndroid == false ? 300 : 0));
    };// End navigateTo.
    
    
    $scope.cats = [{
                    cat:'上衣',
                    subcat:[{cat:'連衫裙'}, {cat:'毛衣'},{cat:'衛衣'},{cat:'襯衫'},{cat:'短外套'}]
                }
                ,{
                    cat:'裙',
                    subcat:[{cat:'長裙'}, {cat:'短裙'},{cat:'迷你裙'}]
                }
                ,{
                     cat:'褲',
                    subcat:[{cat:'牛仔褲'}, {cat:'休閒褲'},{cat:'棉褲'}]
                }]
    
    
    
    
    
}); // End of menu toggle controller.