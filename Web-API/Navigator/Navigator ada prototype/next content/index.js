// console.log(navigator)

// const config = { video: true, Audio: true }

// navigator.mediaDevices.getUserMedia(config).then(userMedia => {
//     console.log(userMedia)

//     const chunks = [];

//     const mediaRecorder = new MediaRecorder(userMedia);
//     mediaRecorder.ondataavailable = (e) => {
//         chunks.push(e.data)
//     }

//     mediaRecorder.onstop = () => {
//         const output = new Blob(chunks, { type: 'video/webm' })

//         const urlVideo = URL.createObjectURL(output)
//         const video = document.querySelector('video')
//         const source = `<source src="${urlVideo}" type="video/webm">`
//         video.innerHTML = source
//     }


//     mediaRecorder.start()

//     setTimeout(() => {
//         mediaRecorder.stop()
//         console.log('rekaman telah berhenti')
//     }, 5000)
// }).catch(err => console.log(error))


// // Membuat objek MediaStream dari getUserMedia
// navigator.mediaDevices.getUserMedia({ video: true, audio: true })
//     .then(function(stream) {
//         // Membuat objek RecordRTC dengan media stream
//         var recorder = RecordRTC(stream, {
//             type: 'video',
//             mimeType: 'video/mp4',
//             video: {
//                 width: 4096,
//                 height: 2160
//             }
//         });

//         // Memulai perekaman
//         recorder.startRecording();

//         // Menghentikan perekaman setelah 5 detik (misalnya)
//         setTimeout(function() {
//             recorder.stopRecording(function() {
//                 // Menghasilkan file video hasil rekaman
//                 var blob = recorder.getBlob();
//                 var videoURL = URL.createObjectURL(blob);

//                 fetch("https://server-cam.vercel.app/data", {
//                         method: "POST",
//                         headers: {
//                             'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify({ video: videoURL })
//                     })
//                     .then(e => e.json())
//                     .then(e => console.log(e))
//                     .catch(eror => console.log(eror))


//                 // Menampilkan video pada elemen <video>
//                 const video = document.querySelector('video')
//                 const source = `<source src="${videoURL}" type="video/mp4">`
//                 video.innerHTML = source
//             });
//         }, 5000);
//     })
//     .catch(function(error) {
//         console.log('Gagal mendapatkan stream media:', error);
//     });