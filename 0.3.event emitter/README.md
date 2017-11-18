# EventEmitter
 
## Eventlistener
`Listener` is diferent from `Callback`, `Listener` will execute after function that bind it dettected by event loop. `Callback` execute after *asynchronous* function finished the job.

## Basic Sample
* **event**
    ```
    //event listener
    eventEmitter.on('testEvent', () => {
        // run after event detected by event loop
    })
    //run event 
    eventEmitter.emit('testEvent')
    ```
* **callback**
    ```
    fs.readFile("mynote.txt", (err, data) => {
        //execute after read process of mynote.txt
    })
    ```

## Reference 
* 03.01. event and event emiter & 03.02. inherit event : https://www.sitepoint.com/nodejs-events-and-eventemitter/
* 03.03. pattern wit event emitter : https://netbasal.com/javascript-the-magic-behind-event-emitter-cce3abcbcef9



