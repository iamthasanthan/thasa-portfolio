import React from 'react'
import './styles/YouTube.css'
import ReactPlayer from 'react-player'
function YouTube() {
    const videos =[
        {url:"https://youtu.be/Qd_cWMAE5pE" , width:430  ,height:300},
        {url:"https://youtu.be/UL45LwX7z9E" , width:430  ,height:300},
        {url:"https://youtu.be/0R2aYxeN54Y" , width:430  ,height:300},
        {url:"https://youtu.be/uCocWlB9RwU" , width:430  ,height:300},
        {url:"https://youtu.be/QQF6T4tQW3Q" , width:430  ,height:300},
        {url:"https://youtu.be/c8fxTIzk6LM" , width:430  ,height:300},
        {url:"https://youtu.be/UnowpSvTsVc" , width:430  ,height:300},
        {url:"https://youtu.be/zE-JWw_1QZ4" , width:430  ,height:300},
        {url:"https://youtu.be/x-ba6ug5rrE" , width:430  ,height:300},
        {url:"https://youtu.be/ltwC7gCfap8" , width:430  ,height:300},
        {url:"https://youtu.be/ycimPnuaLCM" , width:430  ,height:300},
        {url:"https://youtu.be/BpHl5Vcgu1M" , width:430  ,height:300},
        {url:"https://youtu.be/mSwSJ8XfpZw" , width:430  ,height:300},
        {url:"https://youtu.be/H2zMk-sjz2g" , width:430  ,height:300},
        {url:"https://youtu.be/fLSYvy4HCaw" , width:430  ,height:300},
    ];

    return (
        <div className="youtubepage">
            <div className="youtube_title">
                <center><h1>YouTube</h1></center>
            </div>



            <div className="videos">
                    {videos.map((video)=>(
                        <ReactPlayer controls  
                        className="video" 
                        width={video.width}
                        height={video.height}
                        url={video.url}/>
                    ))}
            <ReactPlayer
             />
             
            </div>
            
        </div>
    )
}

export default YouTube
