'use strict';

const GameController = require('../controller/game-controller');

module.exports = function logTurn(message) {
  GameController.gameLog.push(`TURN ${GameController.moveCount}: ${GameController.player.name} ${message}`);
};
