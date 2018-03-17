// Rect stuff for...is this rever used?
var Rect = function(xPos, yPos, height, width) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
};

var DraggableDiv = function(options) {
    this.element = document.createElement('div');
    this.element.style.display = 'block';
    this.element.style.position = 'absolute';
    this.element.style.top = options ? (options.yPos ? options.yPos + 'px' : '100px') : '100px';
    this.element.style.left = options ? (options.xPos ? options.xPos + 'px' : '100px') : '100px';
    this.element.style.width = options ? (options.width ? options.width + 'px' : '100px') : '100px';
    this.element.style.height = options ? (options.height ? options.height + 'px' : '100px') : '100px';
    this.element.style.backgroundColor = 'red';
    this.clickX = 0;
    this.clickY = 0;
    this.beingDragged = false;
    this.homeX = this.element.style.left;
    this.homeY = this.element.style.top;

    this.returnHome = true;
    this.allowDrag = true;

    this.dragRegion = null;

    this.friends = [];

    this.element.addEventListener('mouseup', function() {
        this.beingDragged = false;
        if(this.returnHome) {            
            this.element.style.left = this.homeX + 'px';
            this.element.style.top = this.homeY + 'px';
        }
    }.bind(this, false));

    document.documentElement.addEventListener('mouseup', function() {
        this.beingDragged = false;
        if(this.returnHome) {
            this.element.style.left = this.homeX;
            this.element.style.top = this.homeY;
        }
    }.bind(this, false));

    document.documentElement.addEventListener('mousemove', function() {
        if (this.beingDragged) {
            this.element.style.top = (event.pageY - this.clickY) + 'px';
            this.element.style.left = (event.pageX - this.clickX) + 'px';
        }
    }.bind(this, false));

    this.element.addEventListener('mousedown', function() {
        var parentOffset = this.element.getBoundingClientRect();

        this.clickX = event.pageX - parentOffset.left;
        this.clickY = event.pageY - parentOffset.top;

        if(this.allowDrag) {
            if(this.dragRegion) {
                if (this.clickX >= this.dragRegion.xPos && this.clickX <= this.dragRegion.xPos + this.dragRegion.width) {
                    if (this.clickY >= this.dragRegion.yPos && this.clickY <= this.dragRegion.yPos + this.dragRegion.height) {
                        this.beingDragged = true;
                    }
                }
            } else {
                this.beingDragged = true;
            }

            // Replicate this same event for friends of this object
            var evt = document.createEvent('MouseEvents');
            evt.initMouseEvent(event.type, event.bubbles, event.cancelable, event.view, event.detail,
                event.screenX, event.screenY, event.clientX, event.clientY,
                event.ctrlKey, event.altKey, event.shiftKey, event.metaKey,
                event.button, document.body.parentNode);
            
            // Iterate over friends and set off the same event
            for(friend of this.friends) {
                friend.element.dispatchEvent(evt);
            }
        
        
        }
        
        
    }.bind(this, false));

    this.element.addEventListener('mousemove', function(event) {
        
        if (this.beingDragged) {
            this.element.style.top = (event.pageY - this.clickY) + 'px';
            this.element.style.left = (event.pageX - this.clickX) + 'px';
            
            /*if(typeof onMove === 'function') {
                onMove();
            }*/
        }
    }.bind(this, false));
}

DraggableDiv.prototype.addToParent = function(parent) {
    parent.appendChild(this.element);
};

DraggableDiv.prototype.setDraggable = function(draggable) {
    this.allowDrag = draggable;
};

DraggableDiv.prototype.addFriend = function(friend) {
    this.friends.push(friend);
}

DraggableDiv.prototype.setHomeToMatchPos = function() {
    console.log('matching');
    this.homeX = this.xPos;
    this.homeY = this.yPos;
};

DraggableDiv.prototype.setTop = function(top) {
    this.element.style.top = top + 'px';
    this.yPos = top;
};

DraggableDiv.prototype.setLeft = function(left) {
    this.element.style.left = left + 'px';
    this.xPos = left;
};

DraggableDiv.prototype.getWidth = function() {
    return this.element.offsetWidth;
};