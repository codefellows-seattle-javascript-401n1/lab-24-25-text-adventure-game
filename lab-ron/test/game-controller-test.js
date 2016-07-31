/* global angular expect */

'use strict';

describe('testing GameController', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller) => {
      this.crtl = new $controller('GameController');
    });
  });

  it('should contain a player', () => {
    expect(this.Ctrl.player.name).toBe('Ash-Ron');
  });
  it('should show location RoomA', () => {
    expect(this.Ctrl.player.location).toBe('RoomA');
  });
  it('should have a player hp of 100', ()=>{
    expect(this.Ctrl.player.hp).toBe(100);
  });

  // it('should move to a different room', (done)=>{
  //   expect(this.Ctrl.)
  // })
});
