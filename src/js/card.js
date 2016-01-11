function Card (cardGame) {
	this.game = cardGame;
}

Card.prototype.preload = function () {
    this.game.load.atlasXML('card-red', '../image/card-red.png', '../xml/card.xml');
};

Card.prototype.create = function (container) {
    
    this.container = container;
    this.container.inputEnabled = true;
    this.container.events.onInputUp.add(this.play);

    // this.card1 = this.game.add.sprite(10, 10, 'card-red', 'card1');
    for(var i=0;i<5;i++){
        var card = this.game.make.sprite(10 + i * 40, 0, 'card-red', 'card' + (i + 1));
        card.scale.set(0.5, 0.5);
        card.game = this.game;
        container.addChild(card);

        // card.setZIndex(i);
        // card.inputEnabled = true;
        // card.events.onInputUp.add(this.play);
    }
    
    // this.card1.scale.set(0.5, 0.5);
    // this.card1.inputEnabled = true;
    // this.card1.events.onInputUp.add(this.play);
};

Card.prototype.play = function (container) {
    var length = container.children.length;
    var selected = null;

    for(var i = length - 1; i >= 0; i--){
        var card = container.children[i];
        var area = new Phaser.Rectangle(card.previousPosition.x, card.previousPosition. y, card.width, card.height);
        console.log(area);
        if(area.contains(container.game.input.x, container.game.input.y)){
            selected = card;
            break;
        }
    }
    if(selected){
        if(!selected.click){
            selected.y = -20;
            selected.click = true;
        }else{
            selected.y = 0;
            selected.click = false;
        }    
    }
    // d.destroy();
};