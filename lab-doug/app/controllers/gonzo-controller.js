'use strict';
const angular = require('angular');

angular.module('gonzoApp').controller('gonzoController', ['$scope', function($scope) {
  $scope.setup = {
    tools: ['intellect', 'common-sense', 'stength'],
    ratings: [
      {id:0, name: 'novice'},
      {id:2, name: 'master'}
    ]
  };
  $scope.player = {

  };
}]);
