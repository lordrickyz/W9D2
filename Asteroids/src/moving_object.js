function MovingObject(){
  options = arguments[0];
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = game;
  this.isWrappable = true;

};

MovingObject.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI)
  ctx.strokeStyle = this.color;
  ctx.stroke();
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  if (this.isWrappable){
    this.game.wrap(this.pos);
  }
  else{
    this.game.remove(this);
  }
}

MovingObject.prototype.isCollidedWith = function(otherObject){
  const x1 = this.pos[0];
  const y1 = this.pos[1];
  const x2 = otherObject.pos[0];
  const y2 = otherObject.pos[1];
  const distBetween = Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2), 2));
  if (distBetween < (this.radius + otherObject.radius)){
    return true;
  }else{
    return false;
  }
}

MovingObject.prototype.collideWith = function(otherObject) {
  if ((this instanceof Bullet) && (otherObject instanceof Asteroid)){
    this.game.remove(otherObject);
    this.game.removeBullet(this);
  } else if((this instanceof Asteroid) && (otherObject instanceof Bullet)){
    this.game.removeBullet(otherObject);
    this.game.remove(this);
  }
}


module.exports = MovingObject;