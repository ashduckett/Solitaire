var Suit = {
    HEARTS: 0,
    DIAMONDS: 1,
    CLUBS: 2,
    SPADES: 3
};



var Deck = function() {
    this.cards = [];
    this.cards = this.cards.concat(Deck.makeCardsForSuit(Suit.HEARTS));
    this.cards = this.cards.concat(Deck.makeCardsForSuit(Suit.DIAMONDS));
    this.cards = this.cards.concat(Deck.makeCardsForSuit(Suit.SPADES));
    this.cards = this.cards.concat(Deck.makeCardsForSuit(Suit.CLUBS));

    console.log(this.cards);


};

// A static function for generating a set of cards for a single suit
Deck.makeCardsForSuit = function(suit) {
    var cards = [];
    for(var i = 1; i <= 13; i++) {
        cards.push(new Card(suit, i));
    }
    return cards;
};

// A function to grab the cards, perhaps from a controller
Deck.prototype.getCards = function() {
    return this.cards;
}

Deck.prototype.popCard = function() {
    return this.cards.pop();
}