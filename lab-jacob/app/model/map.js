'use strict';

module.exports = {
  baseCamp: {
    climb:   'sky',
    march:   'baseCampTrail1',
    retreat: 'You have no where to run',
    leap:    'ground',
    deityChance: 0.2
  },

  baseCampTrail1 : {
    climb:   'mountainSideSwitchback',
    march:   'baseCampTrail2',
    retreat: 'baseCampTrail1',
    leap:    'ground',
    deityChance: 0.2
  },

  baseCampTrail2: {
    climb:   'mountainSideTrail',
    march:   'baseCampTrail2',
    retreat: 'baseCampTrail1',
    leap:    'ground',
    deityChance: 0.2
  },

  baseCampTrail3: {
    climb:   'mountainSide',
    march:   'baseCampTrail2',
    retreat: 'baseCampTrail1',
    leap:    'ground',
    deityChance: 0.2
  },

  baseCampSwitchback: {
    climb:   'sky',
    march:   'mounstainSide',
    retreat: 'baseCampTrail3',
    leap:    'ground',
    deityChance: 0.2
  },

  mountainSide: {
    climb: 'sky',
    march: 'mountainSideTrail',
    retreat: 'baseCampSwitchback',
    leap: 'baseCampTrail3',
    deityChance: 0.5
  },

  mountainSideTrail: {
    climb: 'peak',
    march: 'mountainSideSwitchback',
    retreat: 'mountainSide',
    leap: 'baseCampTrail2',
    deityChance: 0.5
  },

  mountainSideSwitchback: {
    climb: 'sky',
    march: 'peak',
    retreat: 'mountainSideTrail',
    leap: 'baseCampTrail1',
    deityChance: 0.5
  },

  peak: {
    climb: 'sky',
    march: 'The trail has ended',
    retreat: 'baseCampSwitchback',
    leap: 'mountainSideTrail',
    deityChance: 'Odin'
  }
};
