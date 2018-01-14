if (parent === top)
{
    let metaEle = document.querySelector('meta[name="og:url"]')
    
    if(metaEle){
        let embedUrl = metaEle.getAttribute("content")
       
        let videoEle = document.getElementById("olvideo_html5_api");
        let match = embedUrl.match(
            /https?:\/\/(?:openload\.(?:co|io)|oload\.tv)\/(?:f|embed)\/([\w\-]+)/
        );
        if (match){
            let decodeEle = document.getElementById('streamurj');
            if (decodeEle){
                decoded_id = decodeEle.innerHTML;
                
                videoEle = document.getElementById("olvideo_html5_api")

                olvideoEle = document.getElementById("olvideo")
                olvideoEle.className = "video-js vjs-default-skin vjs-big-play-centered olvideo-dimensions vjs-controls-enabled vjs-workinghover vjs-user-active vjs-playing vjs-has-started"
                let video_link = 'https://openload.co/stream/' + decoded_id + '?mime=true'
                videoEle.setAttribute('src', video_link)
                videoEle.load();
                videoEle.play()
            }
        }
    }
    
    
}

