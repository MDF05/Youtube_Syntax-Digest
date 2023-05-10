// console.log(navigator.clipboard)

const img = document.querySelector('img');
const button = document.querySelector('button')

// Mengubah gambar menjadi Data URL
const canvas = document.createElement('canvas');
canvas.width = img.width;
canvas.height = img.height;
const context = canvas.getContext('2d');
context.drawImage(img, 0, 0, img.width, img.height);
const dataUrl = canvas.toDataURL('image/png');

button.addEventListener('click', () => {

    // Mengubah gambar menjadi Blob
    fetch(img.src)
        .then(response => response.blob())
        .then(blob => {
            // Menyalin gambar ke clipboard pengguna
            navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': blob
                })
            ]).then(() => {
                console.log('Gambar berhasil disalin ke clipboard');
            }).catch(err => {
                console.error('Gagal menyalin gambar ke clipboard: ', err);
            });
        });
})