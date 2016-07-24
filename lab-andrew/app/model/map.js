'use strict';


module.exports = {
  entry: {
    north: 'wall',
    south: 'wall',
    east: 'one',
    west: 'wall',
    chanceOfTroll: 0.0,
    chanceOfItem: 0.9,
    chanceOfCompanion: 0.0,
  },
  one: {
    north: 'wall',
    south: 'wall',
    east: 'two',
    west: 'entry',
    chanceOfTroll: 0.2,
    chanceOfItem: 0.7,
    chanceOfCompanion: 0.5,
  },
  two: {
    north: 'wall',
    south: 'wall',
    east: 'three',
    west: 'two',
    chanceOfTroll: 0.5,
    chanceOfItem: 0.3,
    chanceOfCompanion: 0.0,
  },
  three: {
    north: 'wall',
    south: 'four',
    east: 'wall',
    west: 'two',
    chanceOfTroll: 0.6,
    chanceOfItem: 0.4,
    chanceOfCompanion: 0.1,
  },
  four: {
    north: 'three',
    south: 'five',
    east: 'wall',
    west: 'wall',
    chanceOfTroll: 0.6,
    chanceOfItem: 0.5,
    chanceOfCompanion: 0.7,
  },
  five: {
    north: 'four',
    south: 'wall',
    east: 'wall',
    west: 'six',
    chanceOfTroll: 0.7,
    chanceOfItem: 0.7,
    chanceOfCompanion: 0.1,
  },
  six: {
    north: 'wall',
    south: 'wall',
    east: 'five',
    west: 'seven',
    chanceOfTroll: 0.5,
    chanceOfItem: 0.4,
    chanceOfCompanion: 0.1,
  },
  seven: {
    north: 'eight',
    south: 'wall',
    east: 'wall',
    west: 'six',
    chanceOfTroll: 0.7,
    chanceOfItem: 0.7,
    chanceOfCompanion: 0.7,
  },
  eight: {
    north: 'wall',
    south: 'seven',
    east: 'wall',
    west: 'wall',
    chanceOfTroll: 0.8,
    chanceOfItem: 0.8,
    chanceOfCompanion: 0.8,
  },
};
