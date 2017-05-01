var app = angular.module('sharkApp', []);
var activeNav = 0;


app.directive("scroll", function ($window) {
    return {
        scope: true,
        link: function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
              
                var secondGalItemShow = document.getElementById("sixth").offsetTop;
    
                if(this.scrollY >= secondGalItemShow - 100) {
                    document.getElementById('secondGallery').className = 'active';
                } else{
                    document.getElementById('secondGallery').classList.remove('active')
                }
                
                for (i = 0; i < scope.navItems.length; i++) {
                    if (this.scrollY >= scope.navItems[scope.navItems.length - 1].position) {
                        scope.$apply(function(){
                            scope.activePanel = i;
                        })
                    } else if (this.scrollY >= scope.navItems[i].position && this.scrollY < scope.navItems[i + 1].position){
                        scope.$apply(function(){
                            scope.activePanel = i;
                        })
                    }
                }
            
            });
        }
    };
});

app.controller('mainCtrl', ['$scope', '$window', '$location', '$anchorScroll', function($scope, $window, $location, $anchorScroll){
  
  $scope.panels = document.getElementsByClassName('panel');
  $scope.navItems = [];
  
  angular.forEach($scope.panels, function(value){
    $scope.item = {link: value.id, position: value.offsetTop}
    $scope.navItems.push($scope.item)
   
  });
  
  $scope.activePanel = 0;
 
   $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   };

}]);