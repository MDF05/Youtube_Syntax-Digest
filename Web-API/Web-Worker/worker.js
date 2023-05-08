let elemen = '';

self.addEventListener('message', (event) => {
    for (let i = 0; i < 1000000; i++) {
        elemen += ('hello world ' + i + '<br>');
    }
    self.postMessage(elemen)
})