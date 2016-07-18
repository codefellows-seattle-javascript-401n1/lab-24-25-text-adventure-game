'use strict';//not running thru webpack no angular required

describe('testing game controller', function(){
  // let scope;

  beforeEach(() => {
    angular.mock.module('gameApp');
    angular.mock.inject(($controller) => {
      this.ctrl = new $controller('gameController');
    });
  });

  it('1) should have a player', () => {
    expect(this.ctrl.player.name).toBe('speedy');
    expect(this.ctrl.player.location).toBe('roomA');
  });

  it('2) should update location', () => {
    this.ctrl.updateLocation('home');
    expect(this.ctrl.room.name).toBe('home');
  });

});
