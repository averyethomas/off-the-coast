var app = angular.module('angularApp', []);

app.controller('mainCtrl', ['$scope', function($scope){
    $scope.hello = 'Hi!';
}]);