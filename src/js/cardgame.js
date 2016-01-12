function CardGame () {
	this.logger = new Logger('game');

	this.logger.log('init game, create game screen');
	this.logger.log('gameSetting with %s height %s', gameSetting.screenSize.width, gameSetting.screenSize.height);

	// this.card = new Card(this);
	this.itemList = [new Player(true)];
}

CardGame.prototype.preload = function () {
	this.logger.log('preload');
	console.log(this);

	this.game.load.image('background', '../image/background.jpg');

	var _this = this;
	this.itemList.forEach(function (item) {
		item.game = _this.game;
		item.preload();
	});
};

CardGame.prototype.create = function () {
	this.logger.log('create');
	var pic = this.game.add.sprite(0, 0, 'background');

	this.itemList.forEach(function (item) {
		item.create();
	});
};

CardGame.prototype.render = function() {

	// var point = new Phaser.Point(300, 300);
 //    this.game.debug.geom(point, 'rgb(0,255,0)');

 //    this.game.debug.text('Anchor X: ');
 //    this.game.debug.text('Sprite X: ');
 //    this.game.debug.text('Click to adjust the anchor', 32, 96);

}