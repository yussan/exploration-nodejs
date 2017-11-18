const {EventEmitter} = require('events');

function Door(color)
{
    this.color = color;
    //
    // EventEmitter.call(this); 
    this.open = function()
    {
        // event emit
        this.emit('open', this.color)
    }
}

Door.prototype.__proto__ = EventEmitter.prototype;
const frontDoor = new Door('red');

frontDoor.on('open', (color) => {
    console.log('ring ring '+ color + ' door', )
})

frontDoor.open()

// run with `node 03.02.inherit\ event.js `