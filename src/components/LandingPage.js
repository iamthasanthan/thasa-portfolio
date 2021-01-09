import React from 'react'
import './styles/LandingPage.css'
import profile from './images/mypic.jpg'
import Job from './Job'

function LandingPage() {
    return (
        <div className="landingpage">
            <section class="main">
        
                <div class="home-content">
                    <div class="home-text">
                        <h1>Sivakumar Thasanthan</h1>
                        <h2>-Code Thamizha-</h2>
                        <p>"<b>IGNORE NEGATIVITY </b>
                            It's Easy to Do And It Works💯"
                        </p>
                    <a href="/info" class="main-learnmore">Contact Me🚀</a>
                    </div>
                    <div class="home-img">
                        <img src={profile}/>
                    </div>
                </div>
            </section>
            <div className="sub_cont">
                <center><h2 className="sub_title">I am a ...</h2></center>
                <Job />
            </div>
            <div className="cont_text">
                <h2 data-text="www.codethamizha.ga">www.codethamizha.ga</h2>
            </div>
            <div className="sub_cont">
            <div className="cont_container">
                <div className="box">
                    <div className="icon"><a href="/projects"><i class="fa fa-unlock-alt" aria-hidden="true"></i></a></div>
                    <div className="content">
                        <h3>Projects</h3>
                        <p>
                        I Worked On many Projects.And I showed Up Some here <b><a href='/projects'>Projects</a></b>
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><a href="/info"><i class="fa fa-facebook" aria-hidden="true"></i></a></div>
                    <div className="content">
                        <h3>FaceBook</h3>
                        <p>
                        See My Fb Page and join with our Strong Community
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon"><a href="/info"><i class="fa fa-phone-square" aria-hidden="true"></i></a></div>
                    <div className="content">
                        <h3>Contact Me Now</h3>
                        <p>
                        Contact Me Now You Can Get a Best servise From me. <b><a href='/info'>Contact me</a></b>
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LandingPage
