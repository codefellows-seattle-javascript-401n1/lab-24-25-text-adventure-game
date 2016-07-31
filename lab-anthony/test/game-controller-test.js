/*global expect*/
'use strict';

describe('testing game controller', function(){
  beforeEach(() => {
    angular.mock.module('monsterMash');
    angular.mock.inject(($controller) => {
      this.ctrl = new $controller('MonsterController');
    });
  });

  describe('testing controller scope', () => {
    it('should contain a player', () => {
      expect(this.ctrl.player.name).toBe('Big Money');
    });
  });

  describe('testing moveDirection function', () => {
    it('should change location to "roomB"', () => {
      this.ctrl.moveDirection('east');
      expect(this.ctrl.player.location).toBe('roomB');
    });
  });

  describe('testing logTurn function', () => {
    it('should push a message onto the history object', () => {
      this.ctrl.logTurn('Test');
      var historyEnd = this.ctrl.history[this.ctrl.history.length - 1];
      expect(historyEnd).toBe(`Turn ${this.ctrl.moveCount}: ${this.ctrl.player.name} Test`);
    });
  });

  describe('testing holdLocation function', () => {
    it('should push a message ending in "you hit a wall" onto history', () => {
      this.ctrl.holdLocation();
      var historyEnd = this.ctrl.history[this.ctrl.history.length - 1];
      expect(historyEnd).toBe(`Turn ${this.ctrl.moveCount}: ${this.ctrl.player.name} you hit a wall.`);
    });
  });

  describe('testing gameEnd function', () => {
    it('should reset hp and history', () => {
      this.ctrl.player.hp = 20;
      this.ctrl.history.push('Added index');
      this.ctrl.gameEnd();
      expect(this.ctrl.player.hp).toBe(10);
      expect(this.ctrl.history.length).toBe(1);
    });
  });

});
