![cf](http://i.imgur.com/7v5ASc8.png) lab-24-25-text-adventure-game
====

[![Issues?](https://img.shields.io/badge/Issues%3F-Ask%20for%20Help!-55cbe0.svg)](https://github.com/codefellows/seattle-javascript-401n1/issues/new)

# To Submit this Assignment
  * fork this repository
  * write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * push to your repository
  * submit a pull request to this repository
  * submit a link to your PR in canvas
  * write a question and observation on canvas

# Directions
* Create these directories to organize your code: 
 * html
 * scss
 * scss/vendor
* create a **_theame.scss** partial 
 * add three color variables
* create a **base.scss** file 
 * import normailze
 * import \_theame
 * write some styles that use the color variables defined in \_theame
* create a **entry.js**
 * require your **index.html** and force webpack to use the `file-loader`
 * require your **base.scss**
 * setup angular and create a controller for adding cowsay logic

## Game Features
Create a text based adventure game! For this assignment you'll be creating a text based adventure game.
* This game should have at least two rooms that the player can move between. 
* One item that the player can interact with and one monster for the player to defeat. 
* Your webpage should have a command input and a button or a form submission to do something based on the command. 
* No need to try and persist the data. 
* Make sure to create each of your different commands or actions as functions on your controller.

# Test
* Unit test 4 Controller Methods that chage the state of the scope

## Rubric
* Command Processing: 3pts 
* Game Construction: 4pts 
* Build Process: 3pts
