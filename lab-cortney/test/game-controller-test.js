'use strict';

describe('testing GameController', function(){
  beforeEach(() => {
    angular.mock.module('hauntedHouse');
    angular.mock.inject(($controller) => {
      this.ctrl = new $controller('GameController');
    });
  });

  it('should move into the studio', () => { // test moveDirection()
    this.ctrl.player.location = 'foyer';
    this.ctrl.moveDirection('east');
    expect(this.ctrl.player.location).toBe('studio');
    expect(this.ctrl.moveCount).toEqual(1);
  });

  it('should hit a wall', () => { // test logTurn() and holdLocation()
    this.ctrl.player.location = 'foyer';
    this.ctrl.moveDirection('north');
    expect(this.ctrl.history[history.length]).toBe(`TURN ${this.ctrl.moveCount}: john doe, tho hit a wall.`);
  });

  it('should have a player', () => {
    expect(this.ctrl.player.name).toBe('john doe, tho');
  });

  it('history should indicate if monster appears or not', () => {
    this.ctrl.player.location = 'foyer';
    this.ctrl.moveDirection('east');
    if (this.ctrl.room.monster) {
      expect(this.ctrl.history[history.length]).toBe(`TURN ${this.ctrl.moveCount}: john doe, tho is now in ${this.player.location}. A ${this.room.monster.name} attacked! You lost ${this.room.monster.damage}.`);
    }
    expect(this.ctrl.history[history.length]).toBe(`TURN ${this.ctrl.moveCount}: john doe, tho is now in studio. The room is empty.`);
  });
}); // end GameController test module
