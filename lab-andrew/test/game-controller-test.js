'use strict';

describe('tests on GameController', function() {
  beforeEach(() => {
    angular.mock.module('trippedApp');
    angular.mock.inject(($controller) => {
      this.ctrl = new $controller('GameController');
    });
  });

  it('should be  a player', () => {
    expect(this.ctrl.player.name).toBe('The Chosen');
    expect(this.ctrl.player.hp).toBe(100);
    expect(this.ctrl.player.damage).toBe(5);
    expect(this.ctrl.player.myst).toBe(0);
  });
  it('should move east', () => {
    this.ctrl.moveDirection('east');
    expect(this.ctrl.player.currentLocation).toBe('one');
  });
  it('should not move', () => {
    this.ctrl.holdLocation();
    const length = this.ctrl.history.length;
    expect(this.ctrl.history[length - 1]).toBe('TURN0: The Chosen hit a wall');
  });
  it('should see if i am dead', () => {
    this.ctrl.player.hp = -2;
    this.ctrl.checkAlive();
    expect(this.ctrl.room.playerAlive).toBe(false);
  });

});
