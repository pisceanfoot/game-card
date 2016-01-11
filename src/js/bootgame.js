(function () {
	var game = new Phaser.Game(gameSetting.screenSize.width, 
		gameSetting.screenSize.height, 
		Phaser.AUTO, 
		'container'	);
	game.state.add('CardGame', CardGame);
	game.state.start('CardGame');

})();