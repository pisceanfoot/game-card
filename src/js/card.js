function Card (cardGame) {
	this.game = cardGame;
}

Card.prototype.preload = function () {
	game.load.spritesheet('item', 'assets/buttons/number-buttons-90x90.png', 90, 90);
};

Card.prototype.create = function () {
	var item;

    for (var i = 0; i < 13; i++)
    {
        // Give the items a different alpha increase speed.
        item = game.add.sprite(290, 98 * (i + 1), 'item', i);

        // Enable input.
        item.inputEnabled = true;
        item.events.onInputUp.add(function (argument) {
        });
    }
};

Card.prototype.play = function () {

};