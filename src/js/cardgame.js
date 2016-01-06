function CardGame () {
	this.logger = new Logger('game');

	this.logger.log('init game, create game screen');
	this.logger.log('gameSetting with %s height %s', gameSetting.screenSize.width, gameSetting.screenSize.height);

	_this = this;
	var game = new Phaser.Game(gameSetting.screenSize.width, 
		gameSetting.screenSize.height, 
		Phaser.AUTO, 
		'container'
		// { 
		// 	preload: function () {
		// 		_this.preload();
		// 	}, 
		// 	create: function () {
		// 		_this.create();
		// 	}
		// }
	);
	game.state.add('CardGame', this);
	game.state.start('CardGame');
	this.game = game;
}

CardGame.prototype.preload = function (argument) {
	this.logger.log('preload');

	this.game.load.image('background', '../image/background.jpg');
	this.game.load.spritesheet('dude', '../image/card.png', 32, 48);
};

CardGame.prototype.create = function (argument) {
	this.logger.log('create');
	this.game.add.sprite(0, 0, 'background');
};

var cardGame = new CardGame();