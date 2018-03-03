# Draggable.js

The goal here is to start writing code without the use of jQuery as I had done before.

So far all this type does is to create a div that will be draggable. No options are yet available to be passed in but that'll need work. The options will be:

```
startPosX,		The left starting position of your div
startPosY,		The top starting position of your div
returnHome,		Should the div return to a home position?
animateOnReturnHome,	Should the div animate smoothly or snap back home?
animateSpeed,		How quickly should it animate?
homePosX,		Initial home x position
homePosY		Initial home y position
```

There will also be extra functions including getting and setting all of the above later on in the life of the div.

I also want to add some callbacks which will be fired when the mouse buttons go up and down at the start and end of the dragging process as well as during.

Also need to think about creating sub-types of this so that dragging behaviour can be overriden but include the default. Perhaps as an alternative to the above.

# Example Usage
```
    var draggable = new DraggableDiv();
    draggable.addToParent(document.body);
```