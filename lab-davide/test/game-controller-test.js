/*global angular expect*/
'use strict';


//testing will involve functions and scope of game
describe('testing game controller', function() {
  beforeEach(() => {
    angular.mock.module('politiksApp');
    angular.mock.inject(($controller) => {
      this.ctrl = new $controller('GameController');
    });
  });

  it('should return the player name', () => {
    expect(this.ctrl.player.name).toBe('responsible voter');
  });

  it('should return the player hp', () => {
    expect(this.ctrl.player.hp).toBe(1000);
    expect(this.ctrl.player.damage).toBe(10);
  });

  it('should move the location of player east', () => {
    this.ctrl.moveDirection('east');
    expect(this.ctrl.player.location).toBe('roomB');
  });

  it('should display the first history', () => {
    expect(this.ctrl.history[0]).toBe('Welcome to the POLITIKS');
  });
});
