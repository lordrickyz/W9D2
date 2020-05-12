const MovingObject = require("./moving_object.js");
const Game = require("./game.js");
const Utils = require("./utils.js");


Utils.inherits(Bullet, MovingObject);

function Bullet() {
  this.COLOR = 'black';
  this.RADIUS = 3;
  game = arguments[0].game;
  pos = [arguments[0].pos[0] + (arguments[0].vel[0] * 20), arguments[0].pos[1] + (arguments[0].vel[1] * 20)];
  let new_vel = arguments[0].vel.slice(0);
  scaled_vel = Utils.scale(new_vel, 10);
  MovingObject.call(this, { "game": game, "color": this.COLOR, "radius": this.RADIUS, "pos": pos, "vel": scaled_vel });
  this.isWrappable = false;
}

module.exports = Bullet;
