import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Job.css'
function Job() {
    return (
        <div className="container">
                <div className="box">
                    <div className="icon"><a href="/youtube"><i class="fa fa-youtube" aria-hidden="true"></i></a></div>
                    <div className="content">
                        <h3>YouTuber</h3>
                        <p>
                        I am a YouTuber.And my channel reached 1000+ Subscribers.
                        Do you Like to Advertise. <b><a href='/info'>Contact me</a></b>
                        </p>
                    </div>
                </div>

                <div className="box">
                    <div className="icon"><a href="/skills"><i class="fa fa-desktop" aria-hidden="true"></i></a></div>
                    <div className="content">
                        <h3>Web Developer</h3>
                        <p>
                        If you need a Professional Site <b><a href='/info'>Contact me</a></b>
                        <br/>
                            My Languages : ReactJS, Python,Java Script,HTML,CSS
                        </p>
                    </div>
                </div>

                
                <div className="box">
                    <div className="icon"><a href="/info"><i class="fa fa-male" aria-hidden="true"></i></a></div>
                    <div className="content">
                        <h3>Trainer</h3>
                        <p>
                            I will Train you Coding And Technology Subjects.If You have any interest <b><a href='/info'>Contact me</a></b>
                        </p>
                    </div>
                </div>
                
            </div>
    )
}

export default Job
