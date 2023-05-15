
const button = document.querySelector('button');
const inputUser = document.querySelectorAll('input')

username = inputUser[0];
password = inputUser[1];
rememberMe = inputUser[2];

// console.log(navigator.credentials)

// 📌kirim credential ke server
// function loginUser(credential) {
//     // Kirim kredensial ke server untuk proses verifikasi
//     fetch('/login', {
//       method: 'POST',
//       body: JSON.stringify(credential),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }).then((response) => {
//       if (response.ok) {
//         console.log('Login berhasil.');
//       } else {
//         console.log('Login gagal.');
//       }
//     }).catch((err) => {
//       console.log(`Terjadi kesalahan: ${err}`);
//     });
//   }


//📌 untuk mendapatkan credentials dari browser
navigator.credentials.get({password : true})
    .then((credentials) => {
        if(credentials) {
            loginUser(credentials)
        }
    })
    .catch(err => console.log(err))
    


button.addEventListener('click',async () => {
// 📌 membuat password credentials dengan create()
    // const credentials = await navigator.credentials.create({
    //     password : {
    //         id : username.value,
    //         password : password.value,
    //         name : 'login'
    //     }
    // })

// 📌membuat password credentias dengan constructor
    const credentials = new PasswordCredential({
        id : username.value,
        password : password.value,
        name : 'login'
    })

// 📌menyimpan credentials ke browser
    navigator.credentials.store(credentials)
        .then(() => console.log('suksess menyimpan'))
        .catch(err => console.log(err))
})

// 📌mencegah webiste nakal menggunakan informasi login yang tersimpan secara diam diam
navigator.credentials.preventSilentAccess()
    .then(() => console.log('preventsilent aktif'))
    .catch(eror => console.log(eror))



