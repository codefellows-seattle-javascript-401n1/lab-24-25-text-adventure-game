'use strict';

module.exports = {
  baseCamp: {
    climb:   'nothing',
    march:   'baseCampTrail1',
    retreat: 'nothing',
    leap:    'nothing',
    deityChance: 0.2,
    src: '../asset/image/Deity-Mountain-base-camp.png'
  },

  baseCampTrail1 : {
    climb:   'mountainSideSwitchback',
    march:   'baseCampTrail2',
    retreat: 'baseCamp',
    leap:    'nothing',
    deityChance: 0.2,
    src: '../asset/image/Deity-Mountain-base-camp-trail1.png'
  },

  baseCampTrail2: {
    climb:   'mountainSideTrail',
    march:   'baseCampTrail3',
    retreat: 'baseCampTrail1',
    leap:    'nothing',
    deityChance: 0.2,
    src: '../asset/image/Deity-Mountain-base-camp-trail2.png'
  },

  baseCampTrail3: {
    climb:   'MountainSide',
    march:   'baseCampSwitchback',
    retreat: 'baseCampTrail2',
    leap:    'nothing',
    deityChance: 0.2,
    src: '../asset/image/Deity-Mountain-base-camp-trail3.png'
  },

  baseCampSwitchback: {
    climb:   'nothing',
    march:   'mountainSide',
    retreat: 'baseCampTrail3',
    leap:    'nothing',
    deityChance: 0.2,
    src: '../asset/image/Deity-Mountain-base-camp-switch-back.png'
  },

  mountainSide: {
    climb: 'nothing',
    march: 'mountainSideTrail',
    retreat: 'baseCampSwitchback',
    leap: 'baseCampTrail3',
    deityChance: 0.5,
    src: '../asset/image/Deity-Mountain-mountain-side.png'
  },

  mountainSideTrail: {
    climb: 'peak',
    march: 'mountainSideSwitchback',
    retreat: 'mountainSide',
    leap: 'baseCampTrail2',
    deityChance: 0.5,
    src: '../asset/image/Deity-Mountain-mountain-side-trail.png'
  },

  mountainSideSwitchback: {
    climb: 'nothing',
    march: 'peak',
    retreat: 'mountainSideTrail',
    leap: 'baseCampTrail1',
    deityChance: 0.5,
    src: '../asset/image/Deity-Mountain-mountain-side-switch-back.png'
  },

  peak: {
    climb: 'nothing',
    march: 'nothing',
    retreat: 'baseCampSwitchback',
    leap: 'mountainSideTrail',
    deityChance: 'Odin',
    src: '../asset/image/Deity-Mountain-peak.png'
  }
};
