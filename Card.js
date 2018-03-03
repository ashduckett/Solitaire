var Card = function(suit, value) {
    DraggableDiv.call(this);
    this.suit = suit;
    this.value = value;
};

Card.prototype = Object.create(DraggableDiv.prototype);
Card.prototype.constructor = DraggableDiv;