let anchoDispositivo = window.innerWidth;
    
function cargarVideo(videoId) {
    document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + videoId;
    document.getElementById('videoFrame').scrollIntoView({ behavior: 'smooth', block: "center"});
}