function Game(){
    this.DIM_X = 800;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 2;
    this.ship = new Ship({"game" : this});
    this.bullets = [];
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
  while (this.asteroids.length < this.NUM_ASTEROIDS){
    this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}));
  }
}

Game.prototype.randomPosition = function(){
  return [(Math.random()*this.DIM_X), (Math.random()*this.DIM_Y)];
}

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0,this.DIM_X, this.DIM_Y);
  allObjs = this.allObjects();
  for(let i = 0; i < allObjs.length; i++){
    allObjs[i].draw(ctx);
  }
}

Game.prototype.moveObjects = function(){
  allObjs = this.allObjects();
  for (let i = 0; i < allObjs.length; i++) {
    allObjs[i].move();
  }
}

Game.prototype.wrap = function(pos) {
  if(pos[0] > 800){
    pos[0] = 0;
  }else if(pos[0] < 0){
    pos[0] = 800;
  } 
  if(pos[1] > 600){
    pos[1] = 0;
  }else if(pos[1] < 0){
    pos[1] = 600;
  }
}

Game.prototype.checkCollisions = function(){
  allObjs = this.allObjects();
  for (let i = 0; i < allObjs.length - 1; i++) {
    for (let j = i + 1; j < allObjs.length; j++){
      if (allObjs[i].isCollidedWith(allObjs[j])){
        allObjs[i].collideWith(allObjs[j]);
      }
    }
  }
}

Game.prototype.removeBullet = function(bullet){
  bulletIdx = this.bullets.indexOf(bullet);
  if (bulletIdx !== -1){
    this.bullets.splice(bulletIdx, 1);
  }
}

Game.prototype.remove = function(asteroid){
  asteroidIdx = this.asteroids.indexOf(asteroid);
  if (asteroidIdx !== -1){
    this.asteroids.splice(asteroidIdx, 1);
  }
}

Game.prototype.step = function(){
  this.moveObjects();
  this.checkCollisions();
}

Game.prototype.allObjects = function(){
  return this.asteroids.concat([this.ship]).concat(this.bullets);
}

Game.prototype.isOutOfBounds = function(pos){
  if ((pos[0] > 800) || pos[0] < 0 || pos[1] > 600 || pos[1] < 0){
    return true;
  }

  return false;
}


module.exports = Game;