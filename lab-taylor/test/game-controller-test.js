'use strict';
// -- how do i generate a monster? Can't seem to use `require`
describe('testing GameController', function() {
  beforeEach(() => {
    angular.mock.module('adventureGame');
    angular.mock.inject(($controller) => {
      this.crtl = new $controller('GameController');
    });
  });

  it('should contain a player', () => {
    expect(this.crtl.player.name).toBe('Reptar');
    expect(this.crtl.player.hp).toBe(100);
    expect(this.crtl.player.damage).toBe(5);
    expect(this.crtl.player.xp).toBe(0);
    expect(this.crtl.player.location).toBe('moduleA1');
    expect(this.crtl.player.items.length).toBe(0);
  });

  it('should move direction', () => {
    this.crtl.moveDirection('forward');
    expect(this.crtl.player.location).toBe('moduleA2');
    expect(this.crtl.stationModule.name).toBe('moduleA2');
  });

  it('should update the history', () => {
    this.crtl.updateHistory('my test message');
    const length = this.crtl.history.length;
    expect(this.crtl.history[length-1]).toBe('MOVE 1: Reptar my test message');
  });

  it('should not update the location', () => {
    this.crtl.holdLocation();
    const length = this.crtl.history.length;
    expect(this.crtl.history[length-1]).toBe('MOVE 1: Reptar ran into the hull.');
  });

  it('should know if I am dead', () => {
    this.crtl.player.hp = 0;
    expect(this.crtl.amIDead()).toBe(true);

    this.crtl.player.hp = 100;
    expect(this.crtl.amIDead()).toBe(false);
  });
});
