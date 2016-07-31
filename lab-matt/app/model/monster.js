var $ = require('jquery');

const monsterNames = ['Voodoohand', 'Wispbrute', 'Gloomstep', 'Duskbrute', 'The Crazy Revenant', 'The White Entity', 'The Crazed Shadow Beast', 'The Golden Vemon Lion'];
const randomArrayItem = require('../lib/randomArray');


module.exports = function Monster() {
  if($('#tempMonster')){
    $('#tempMonster').remove();
  }
  this.monsterName = randomArrayItem(monsterNames);
  var randomNum = Math.floor(Math.random() * 150) + 1;
  this.monsterHP = Math.floor(Math.random() * 50) + 1;
  this.monsterDamage = Math.floor(Math.random() * 20) + 1;
  $.getJSON(`http://pokeapi.co/api/v2/pokemon/${randomNum}`, (pokemon) => {
    this.monsterImage = pokemon.sprites.front_default;
    console.log('this is the monsterName:' + this.monsterName);
    $('.monPic').append(`<img id="tempMonster" src="${this.monsterImage}"/>`);
  });
};


/// Game Controller
//  + fetch pokemon obj
//     (api requset with $http)

// Monster(pokemon obj)
