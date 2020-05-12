const MovingObject = require("./moving_object.js");
const Utils = require("./utils.js")

Utils.inherits(Asteroid, MovingObject)

function Asteroid(){
  this.COLOR = 'gray';
  this.RADIUS = 20;
  this.ASTEROID_SPEED = 4;
  pos = arguments[0].pos;
  game = arguments[0].game;
  vel = Utils.randomVec(this.ASTEROID_SPEED);
  MovingObject.call(this, {"game": game, "color": this.COLOR, "radius": this.RADIUS, "pos": pos, "vel": vel});
}

Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
}


module.exports = Asteroid;