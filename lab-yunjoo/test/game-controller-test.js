/* global angular expect */
'use strict';

describe('testing game-controller', function(){
  beforeEach(()=>{
    angular.mock.module('demoApp');
    angular.mock.inject(($controller)=>{
      this.ctrl = new $controller('GameController');
    });

  });
  it('should have player',()=>{
    expect(this.ctrl.player.name).toBe('amazingYun');
    expect(this.ctrl.player.hp).toBe(100);
  });

  it('should have gameForm',()=>{
    expect(this.ctrl.gameForm.direction).toBe('north');
  });

  it('should have movecount',()=>{
    expect(this.ctrl.moveCount).toBe(0);
  });
  it('should move direction',() => {
    this.ctrl.moveDirection('south');
    expect(this.ctrl.newLocation).toBe('roomC');
    expect(this.ctrl.oldLocation).toBe('roomA');
  });
});
