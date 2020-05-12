const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
const Ship = require("./ship.js")


window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Utils = Utils;
window.Game = Game;
window.GameView = GameView;
window.Ship = Ship;

window.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");  
    const gameView = new GameView(ctx);
    gameView.start();
});
