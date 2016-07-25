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
    expect(scope.gameCtrl.player.name).toBe('Nameless Champion');
  });

  it('should have a starting area', () => {
    expect(scope.gameCtrl.area.name).toBe('baseCamp');
  });

  it('should log a message', () => {
    scope.gameCtrl.logTurn('here\'s some test text');
    expect(scope.gameCtrl.history[1]).toBe(`TURN ${scope.gameCtrl.moveCount}: ${scope.gameCtrl.player.name} - here\'s some test text`);
  });

  it('should update a players location', function(){
    scope.gameCtrl.moveDirection('march');
    expect(scope.gameCtrl.player.location).toBe('baseCampTrail1');
  });

  it('should be able to kill deities', function(){
    scope.removeDeity(scope.deities, )
  })
});
