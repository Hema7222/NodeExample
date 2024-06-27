const EventEmitter = require('events');
const myEmitter = new EventEmitter();



const sayHi = () =>{
    console.log('Hi user')
}

const sayHello = () =>{
    console.log('Hello User');
}


myEmitter.on('userJoined', sayHi);
myEmitter.emit('userJoined');
myEmitter.on('userJoined', sayHello);

