function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        
        if(document.getElementById("fullscreen")){
            document.getElementById("fullscreen").style.color = "#0e9efd";
            document.getElementById("fullscreen").style.color = ":hover #222";
        }


    } else {
        if (document.exitFullscreen) {
        document.exitFullscreen();
        }
    }
}

