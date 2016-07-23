'use strict';

describe('testing GameController', function(){
  beforeEach(() => {
    angular.mock.module('hauntedHouse');
    angular.mock.inject(($controller) => {
      this.ctrl = new $controller('GameController');
    });
  });

  it('should move into the studio', () => {
    this.ctrl.moveDirection('east');
    expect(this.ctrl.player.location).toBe('studio');
  });
}); // end GameController test module
