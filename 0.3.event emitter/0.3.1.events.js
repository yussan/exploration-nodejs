const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

function ringBell()
{
    console.log('ring... ring... ');
}

function closeAgain()
{
    console.log('braak...');
}

console.log('single listener :')
// will exec ringBell()
eventEmitter.on('doorOpen', ringBell);
eventEmitter.emit('doorOpen')

console.log('multiple listener :')
//will exec ringBell() and closeAgain()
eventEmitter.on('doorOpen', closeAgain);
eventEmitter.emit('doorOpen')


// run with `node 03.01.event\ vs\ callback.js`