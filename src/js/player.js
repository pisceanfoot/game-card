function Player (isHost) {
	this.isHost = isHost;

	this.logger = new Logger('Player');
	this.card = new Card();
}

// Player.prototype = Object.create(Phaser.Sprite.prototype);
// Phaser.Sprite.call(this, game, x, y, 'bunny');
// MonsterBunny.prototype.constructor = MonsterBunny;
// game.add.existing(sprite);

Player.prototype.preload = function () {
	this.card.game = this.game;
	this.card.preload();
};

Player.prototype.create = function () {

	var bmd = this.game.add.bitmapData(128,128);

    bmd.ctx.beginPath();
    bmd.ctx.rect(0,0,128,128);
    bmd.ctx.fillStyle = '#ff0000';
    bmd.ctx.fill();

    var bound = this.createBound();
    this.logger.log(bound);

    var playerArea = this.game.add.sprite(bound.x, bound.y, bmd);
    this.card.create(playerArea);
};

Player.prototype.createBound = function() {
	var bounds = this.game.world.bounds;
	var height = bounds.height;
	var width = bounds.width;

	this.logger.log('height: %s width: %s', height, width);
	if(this.isHost){
		return {x: width * 0.2, y: height - height * 0.3};
	}else{
		return {x: 0, y: 0}
	}
};