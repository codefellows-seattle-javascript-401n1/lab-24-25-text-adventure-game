'use strict';

describe('testing GameController', function() {
  beforeEach(() => {
    angular.mock.module('adventureApp');
    angular.mock.inject(($controller) => {
      this.ctrl = new $controller('GameController');
    });
  });

  it('should contain a player', () => {
    expect(this.ctrl.player.name).toBe('Space Ash');
    expect(this.ctrl.player.spaceSuit).toBe(100);
    expect(this.ctrl.player.location).toBe('roomA');
    expect(this.ctrl.player.damage).toBe(10);
    expect(this.ctrl.player.xp).toBe(0);
  });

  it('should move direction', () => {
    this.ctrl.moveDirection('South');
    expect(this.ctrl.player.location).toBe('roomC');
  });

  it('should log the turn', () => {
    this.ctrl.moveDirection('South');
    expect(this.ctrl.history.length).toBe(2);
  });
  it('should hurt player 5 points', () => {
    this.ctrl.moveDirection('Wall');
    expect(this.ctrl.player.spaceSuit).toBe(95);
  });

  it('should log message at history[1]', () => {
    this.ctrl.logTurn('test');
    expect(this.ctrl.history[1]).toBe('TURN 0: Space Ash test');
  })

});
