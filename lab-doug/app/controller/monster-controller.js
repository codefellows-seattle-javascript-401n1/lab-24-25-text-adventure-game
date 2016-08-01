'use strict';

const angular = require('angular');

angular.module('gonzoApp').controller('MonsterController',[MonsterController]);

function MonsterController(){
  this.monster = {
    name: '',
    weakness: 'common-sense',
    painPoints: 10,
    lifeSpan: 25,
    location: 'roomA'
  };
}

MonsterController.prototype.reduceLifeSpan = function(yearsReduced){
  this.monster.lifeSpan -= yearsReduced;
};
