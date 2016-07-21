'use strict';//not running thru webpack no angular required

describe('test controller:  game-controller', function(){

  beforeEach(() => {
    angular.mock.module('gameApp');
    angular.mock.inject(($controller) => {
      this.ctrl = new $controller('GameController');
    });
  });

  it('1) should have a proper player', () => {
    expect(this.ctrl.player.name).toBe('Justin');
    expect(this.ctrl.player.location).toBe('roomA');
  });

  it('2) should reduce hp by 1000', () => {
    this.ctrl.attackMonster(1000);
    expect(this.ctrl.room.monster.hp).toBe(9000);
  });

  it('3) should update location', (location) => {
    this.ctrl.updateLocation();

    // Math.random() > this.map[location].monsterChance && \n
      expect(this.ctrl.player.hp).toBeTruthy;
  });

});
