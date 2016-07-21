'use strict';

describe('testing GameController', function(){
  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($controller) => {
      this.crtl = new $controller('GameController');
    });
  });

  it('should contain a monster', () => {
    expect(this.crtl.monster.name).toBe(monsterNames);
  });

  // it('should reduce hp by 7', () => {
  //   this.crtl.takeDamage(7);
  //   expect(this.crtl.monster.hp).toBe(80);
  // });

});
