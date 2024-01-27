let videoStream;

function stream() {
    let video = document.querySelector('video');
    let option = { video: true };

    navigator.mediaDevices.getUserMedia(option)
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(err => console.log(err + "error"));
}

function stopStream() {
    if (videoStream) {
        let tracks = videoStream.getTracks();
        tracks.forEach(track => track.stop());
        document.querySelector('video').srcObject = null;
    }
}
