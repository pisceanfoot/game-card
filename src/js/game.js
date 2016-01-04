function CardGame () {
	this._logger = new Logger('game');

	this._logger.log('init game, create game screen');
	// this._logger.log('gameSetting', );

	var game = new Phaser.Game(gameSetting.screenSize.width, 
		gameSetting.screenSize.height, 
		Phaser.AUTO, 
		'container', 
		{ preload: this.preload, create: this.create }
	);
	this._game = game;
}

CardGame.prototype.proload = function (argument) {

};

CardGame.prototype.create = function (argument) {

};


var cardGame = new CardGame();