var Card = function(suit, value) {
        
    DraggableDiv.call(this, {
        width: 153,
        height: 204
    });

    this.suit = suit;
    this.value = value;
};

Card.prototype = Object.create(DraggableDiv.prototype);
Card.prototype.constructor = DraggableDiv;