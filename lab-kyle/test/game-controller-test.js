/*global angular expect */
'use strict';

describe('testing GameController', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller) => {
      this.ctrl = new $controller('GameController');
    });
  });
  it('should state the first history', () =>{
    expect(this.ctrl.history).toBe('WELCOME TO FINDING A JOB!');
  });
  it('should return the room youre in', () =>{
    expect(this.ctrl.room.name).toBe('microsoft');
    expect(this.ctrl.player.name).toBe('K-Weezy');
  });
  it('should return the players name', () =>{
    expect(this.ctrl.player.name).toBe('K-Weezy');
  });
  it('should return the players name', () =>{
    expect(this.ctrl.player.hp).toBe(100);
  });
});
