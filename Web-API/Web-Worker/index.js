const workers = new Worker('./worker.js');

workers.postMessage('hello world')

workers.addEventListener('message', (event) => {
    document.writeln(event.data)
})