var GameController = function() {
    this.deck = new Deck();
    var cards = this.deck.getCards();
    var topOfPlayArea = 0;
    var leftOfPlayArea = 0;

    var startingLeft = leftOfPlayArea;
    for(var stack = 1; stack <= 7; stack++) {
        var startingTop = topOfPlayArea;
        
        for(var j = 1; j <= stack; j++) {
            startingTop += 10;

            var card = this.deck.popCard();
            card.setTop(startingTop);
            card.setLeft(startingLeft);
            card.setHomeToMatchPos();

            card.addToParent(document.documentElement);
        }
        startingLeft += card.getWidth() + 1;
    }
};