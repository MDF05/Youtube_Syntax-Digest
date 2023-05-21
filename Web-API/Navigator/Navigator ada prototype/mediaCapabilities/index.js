// console.log(navigator.mediaCapabilities)

const videoConfig = {
    contentType: 'video/mp4;codecs=avc1.640028',
    width: 1080,
    height: 720,
    bitrate: 1000,
    framerate: 60
}

const audioConfig = {
    contentType: 'audio/ogg; codecs=vorbis',
    channels: 2,
    bitrate: 1000,
    samplerate: 5200
}

navigator.mediaCapabilities.decodingInfo({
        type: 'file',
        video: videoConfig
    })
    .then(media => console.log(media))
    .catch(err => console.log(err))


// navigator.mediaCapabilities.encodingInfo({
//         type: 'webrtc',
//         audio: audioConfig
//     })
//     .then(media => console.log(media))
//     .catch(err => console.log(err))