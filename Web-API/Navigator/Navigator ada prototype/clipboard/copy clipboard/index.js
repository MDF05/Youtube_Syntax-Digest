// console.log(navigator.clipboard)

// 📌menyalin teks dengan method writeText()
// navigator.clipboard.writeText('hello world').then(
//     () => console.log('berhasil menyalin teks'),
//     () => console.log('gagal menyalin teks')
// )

//📌 menyalin teks dengan method write()
// navigator.clipboard.write([new ClipboardItem({
//         'text/plain': new Blob(['syntax digest'], {
//             type: 'text/plain'
//         })
//     })]).then(() => console.log('berhasil menyalin text'))
//     .catch(eror => console.log('gagal menyalin karena ' + eror))

// 📌menyalin gambar dengan method write()
// fetch('https://cdn.pixabay.com/photo/2016/09/20/11/27/phone-1682317_1280.png')
//     .then(e => e.blob())
//     .then(data => {
//         navigator.clipboard.write([new ClipboardItem({
//                 'image/png': data
//             })]).then(() => console.log('berhasil menyalin gambar'))
//             .catch(eror => console.log('gagal menyalin karena ' + eror))
//     })