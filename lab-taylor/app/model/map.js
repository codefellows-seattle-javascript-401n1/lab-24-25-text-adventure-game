'use strict';

module.exports = {
  moduleA1: {
    forward: 'moduleA2',
    backward: 'hull',
    left: 'hull',
    right: 'hull',
    monsterChance: 0,
    itemChance: 0
  },
  moduleA2: {
    forward: 'moduleA3',
    backward: 'moduleA1',
    left: 'hull',
    right: 'moduleB1',
    monsterChance: 0.6,
    itemChance: 0.3
  },
  moduleA3: {
    forward: 'moduleA4',
    backward: 'moduleA2',
    left: 'hull',
    right: 'hull',
    monsterChance: 0.4,
    itemChance: 0.7
  },
  moduleA4: {
    forward: 'moduleA5',
    backward: 'moduleA3',
    left: 'hull',
    right: 'hull',
    monsterChance: 0.2,
    itemChance: 0.1
  },
  moduleA5: {
    forward: 'moduleA6',
    backward: 'moduleA4',
    left: 'hull',
    right: 'hull',
    monsterChance: 0.9,
    itemChance: 0.4
  },
  moduleA6: {
    forward: 'moduleA7',
    backward: 'moduleA5',
    left: 'moduleC1',
    right: 'hull',
    monsterChance: 0.2,
    itemChance: 0.1
  },
  moduleA7: {
    forward: 'hull',
    backward: 'moduleA6',
    left: 'hull',
    right: 'hull',
    monsterChance: 0.4,
    itemChance: 0.9
  },
  moduleB1: {
    forward: 'moduleB2',
    backward: 'moduleA2',
    left: 'hull',
    right: 'hull',
    monsterChance: 0.7,
    itemChance: 0.3
  },
  moduleB2: {
    forward: 'moduleB3',
    backward: 'moduleB3',
    left: 'hull',
    right: 'hull',
    monsterChance: 0.3,
    itemChance: 0.3
  },
  moduleB3: {
    forward: 'hull',
    backward: 'moduleB2',
    left: 'hull',
    right: 'hull',
    monsterChance: 0.8,
    itemChance: 0.1
  },
  moduleC1: {
    forward: 'moduleC2',
    backward: 'moduleA6',
    left: 'hull',
    right: 'hull',
    monsterChance: 0.2,
    itemChance: 0.2
  },
  moduleC2: {
    forward: 'moduleC3',
    backward: 'moduleC1',
    left: 'hull',
    right: 'hull',
    monsterChance: 0.9,
    itemChance: 0.1
  },
  moduleC3: {
    forward: 'hull',
    backward: 'moduleC2',
    left: 'hull',
    right: 'hull',
    monsterChance: 1,
    itemChance: 0.9
  }
};
