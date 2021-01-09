import React from 'react'
import './styles/Achievements.css'
import unlimited from './images/unlimited.png'
import voiceassis from './images/crashcourse.png'
import mysite from './images/portfolio.jpg'
import netflix from './images/netflixclone.jpg'
function Achievements() {
    return (
        <div className="project_page">
        <div className="project_container">
            <div className="project_card">
                <div className="imgBx">
                    <img src={netflix}/>
                </div>
                <div className="project_content">
                    <h2>Netflix Clone</h2>
                    <p>I made an amazing Netflix Clone using ReactJS
                        🚀🚀🚀🚀
                        <a href="https://netflix-clone-thasa.web.app/">https://netflix-clone-thasa.web.app/</a></p>    
                </div>

            </div>
            <div className="project_card">
                <div className="imgBx">
                    <img src={mysite}/>
                </div>
                <div className="project_content">
                    <h2>Personal Website</h2>
                    <p>You Are Now watching my own site💖
                        <a href="http://www.codethamizha.ga">http://www.codethamizha.ga</a></p>    
                </div>

            </div>
            <div className="project_card">
                <div className="imgBx">
                    <img src={voiceassis}/>
                </div>
                <div className="project_content">
                    <h2>Voice Assistant🚀</h2>
                    <p>I made an advance Voice Assistant using Python.
                        <a href="https://youtu.be/0R2aYxeN54Y"> https://youtu.be/0R2aYxeN54Y</a></p>    
                </div>

            </div>
            
            <div className="project_card">
                <div className="imgBx">
                    <img src={unlimited}/>
                </div>
                <div className="project_content">
                    <h2>Unlimited Messages🚀</h2>
                    <p>I made this to Send Unlimited Messages using python
                        <a href="https://youtu.be/ltwC7gCfap8"> https://youtu.be/ltwC7gCfap8</a></p>    
                </div>

            </div>


            <div className="project_card">
                <div className="imgBx">
                    <img src="https://i.ytimg.com/vi/06pWsB_hoD4/maxresdefault.jpg"/>
                </div>
                <div className="project_content">
                    <h2>And More📂📂</h2>
                    <p>And i Made A Lot's of Projects using Python and Reactjs </p>    
                </div>

            </div>
            
            
            
        </div>
        </div>
    )
}

export default Achievements
