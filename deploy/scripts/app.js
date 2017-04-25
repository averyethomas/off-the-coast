var app = angular.module('sharkApp', []);

app.controller('mainCtrl', ['$scope', '$window', function($scope, $window){
  
  $scope.panels = document.getElementsByClassName('panel');
  $scope.navItems = [];
  
  angular.forEach($scope.panels, function(value){
    $scope.item = {link: value.id, position: value.offsetTop}
    $scope.navItems.push($scope.item)
   
  });
  
  console.log($scope.navItems);

  $scope.active = $scope.navItems[0];
  
  $scope.findActiveNav = function(){
    
    
 
  };
  
  angular.element($window).bind('scroll', function(){
    
    $scope.scrollPos = $window.pageYOffset;
    
    
//     if($scope.scrollPos < 100){
//         console.log('test');
//     } else if($scope.scrollPos > 100){
//       console.log('bigger')
//     }
    if($scope.scrollPos < $scope.navItems[6].position){
      console.log('notActive');
    }else{
      console.log('active');
    }
    
    //console.log($scope.scrollPos);
    
  });

  
  
//   $scope.bgChangePanels = document.getElementsByClassName('bgChange');
//   $scope.bgChange = [];
  
//   angular.forEach($scope.bgChangePanels, function(value){
//     $scope.bgChange.push(value.id)
//   });
  
//   console.log(document.getElementById($scope.bgChange[1]).offsetTop);
  
  

}]);

