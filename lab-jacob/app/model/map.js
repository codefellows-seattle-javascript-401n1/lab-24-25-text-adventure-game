'use strict';

module.exports = {
  baseCamp: {
    climb:   'nothing',
    march:   'baseCampTrail1',
    retreat: 'nothing',
    leap:    'nothing',
    deityChance: 0.2
  },

  baseCampTrail1 : {
    climb:   'mountainSideSwitchback',
    march:   'baseCampTrail2',
    retreat: 'baseCamp',
    leap:    'nothing',
    deityChance: 0.2
  },

  baseCampTrail2: {
    climb:   'mountainSideTrail',
    march:   'baseCampTrail3',
    retreat: 'baseCampTrail1',
    leap:    'nothing',
    deityChance: 0.2
  },

  baseCampTrail3: {
    climb:   'MountainSide',
    march:   'baseCampSwitchback',
    retreat: 'baseCampTrail2',
    leap:    'nothing',
    deityChance: 0.2
  },

  baseCampSwitchback: {
    climb:   'nothing',
    march:   'mountainSide',
    retreat: 'baseCampTrail3',
    leap:    'nothing',
    deityChance: 0.2
  },

  mountainSide: {
    climb: 'nothing',
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
    climb: 'nothing',
    march: 'peak',
    retreat: 'mountainSideTrail',
    leap: 'baseCampTrail1',
    deityChance: 0.5
  },

  peak: {
    climb: 'nothing',
    march: 'nothing',
    retreat: 'baseCampSwitchback',
    leap: 'mountainSideTrail',
    deityChance: 'Odin'
  }
};
