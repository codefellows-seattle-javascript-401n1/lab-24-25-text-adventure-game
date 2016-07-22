'use strict';//not running thru webpack no angular required

describe('test controller:  game-controller', function(){
  beforeEach(() => {
    angular.mock.module('gameApp');
    angular.mock.inject(($controller) => {
      this.ctrl = new $controller('GameController');
    });
  });

  it('1) should give a proper player name', () => {
    expect(this.ctrl.player.name).toBe('Justin');
  });

  it('2) should give a proper location/room#', () => {
    expect(this.ctrl.player.location).toBe('roomA');
  });

  it('3) should test XP', () => {
    expect(this.ctrl.player.xp).not.toBe(undefined);
    expect(this.ctrl.player.xp).toBe(0);
  });

  it('4) should test hp', () => {
    expect(this.ctrl.player.hp).not.toBe(undefined);
    expect(this.ctrl.player.hp).toBe(10000);
  });

});
