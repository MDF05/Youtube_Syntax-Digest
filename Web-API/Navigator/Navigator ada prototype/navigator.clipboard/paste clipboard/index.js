
// membaca clipboard dengan writeText()
// async function paste() {
    // const isiClipboard = await navigator.clipboard.readText();

    // console.log(isiClipboard)
// }

// paste()


// membaca degan write()
const button = document.querySelector('button');
const image = document.querySelector('img')

button.addEventListener('click', async () => {
    // membace text 
    // const isiClipboard = await navigator.clipboard.read()
    // const data = await isiClipboard[0].getType('text/plain');
    
    // const fileReader = new FileReader();
    // fileReader.readAsText(data)
    // fileReader.onload = () => {
    //     const result = fileReader.result;

    //     console.log(result)
    // }

    const isiClipboard = await navigator.clipboard.read()
    const data = await isiClipboard[0].getType('text/html');

    // image.src = URL.createObjectURL(data)

    const fileReader = new FileReader();
    fileReader.readAsText(data)
    fileReader.onload = () => {
        const result = fileReader.result;

        document.writeln(result)
    }

})

