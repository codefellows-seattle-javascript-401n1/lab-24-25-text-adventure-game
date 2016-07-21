'use strict';

describe('testing the game controller', function(){
  let scope;

  beforeEach( () => {
    angular.mock.module('tindur');
    angular.mock.inject(($controller, $rootScope) => {
      scope = $rootScope.$new();
      new $controller('GameController as gameCtrl', {$scope: scope});
    });
  });

  it('should have a player', () => {
    console.log(scope);
    expect(scope.player.name).toBe('Nameless Champion');
  });

  it('should have a starting area', () => {
    expect(scope.area.name).toBe('baseCamp');
  });

  it('should log a message', () => {
    scope.logTurn('here\'s some test text');
    expect(scope.history[1]).toBe(`TURN ${scope.moveCount}: ${scope.player.name} here\'s some test text`);
  });
});
