const MovingObject = require("./moving_object.js");
const Game = require("./game.js");
const Utils = require("./utils.js");
const Bullet = require("./bullet.js")

Utils.inherits(Ship, MovingObject);

function Ship() {
  this.COLOR = 'red';
  this.RADIUS = 20;
  game = arguments[0].game;
  pos = game.randomPosition();
  vel = [0,0];
  MovingObject.call(this, { "game": game, "color": this.COLOR, "radius": this.RADIUS, "pos": pos, "vel": vel });
}

Ship.prototype.relocate = function(){
  this.pos = this.game.randomPosition();
  this.vel = [0,0];
}

Ship.prototype.power = function(impulse){
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
}

Ship.prototype.fireBullet = function() {
  const bullet = new Bullet({"vel": this.vel, "pos": this.pos, "game": this.game});
  if ((bullet.vel[0] !== 0 || bullet.vel[1] !== 0)){
    this.game.bullets.push(bullet);
  }
}

module.exports = Ship;

