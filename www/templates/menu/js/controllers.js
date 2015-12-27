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
    
    
     Parse.initialize("kzEok8tV4jX2K5XCZuzlljZuC22zBQaks2jHT49d", "7i5Ni1R9GRG7FVdXWpoWNMLNQ7qp8QyvNJW9fBT1");    
    var Category = Parse.Object.extend("Category");
    
      var query = new Parse.Query(Category);
    
     
      query.find( {
      success: function(results) {
      
      $scope.cats = [];
         for (var i = 0; i < results.length; i++) {
              $scope.cats[i]={}
            $scope.cats[i].id = results[i].get('objectId')  
            $scope.cats[i].cat = results[i].get('cat')
             $scope.cats[i].subcat =results[i].get('subcat')
            }  
          
          
          
          
          
      },
      error: function(model, error) {
         console.log('error');
      }
    });
   
    
    
    
    
    
    
    
    
    
    
    
}); // End of menu toggle controller.