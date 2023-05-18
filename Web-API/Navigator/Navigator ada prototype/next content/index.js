// console.log(navigator.keyboard)

// navigator.keyboard.lock()
// navigator.keyboard.unlock()

navigator.keyboard.getLayoutMap().then(keyboard => {
    console.log(keyboard)

    // untuk mendapatkan semua keyboard keys dan value nya
    // keyboard.forEach((button,value ) =>  {
    //     console.log(`ini button ${button} merupakan ${value}`)
    // })

    // untuk mendapatkan salah satu 
    // console.log(keyboard.get('KeyA'))

    // untuk mengecek tombol tersedia atau tidak
    // console.log(keyboard.has('Equal'))

    // untuk mendapatkan semua keyboard key
    // const keysButton = keyboard.keys()

    // for(key of keysButton)  {
    //     console.log(key)
    // }

    // untuk mendapatkan semua values
    // const valueButton = keyboard.values();

    // for (value of valueButton) {
    //     console.log(value)
    // }
})