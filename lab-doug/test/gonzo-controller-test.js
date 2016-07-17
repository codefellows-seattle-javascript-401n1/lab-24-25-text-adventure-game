'use strict';

describe('Testing gonzoController', function(){
  var scope;
  beforeEach(() => {
    angular.mock.module('gonzoApp');
    angular.mock.inject(($controller, $rootScope) => {
      scope = $rootScope.new();
      new $controller('GonzoController', {$scope: scope})
    });
  });
});
