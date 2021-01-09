import React from 'react'
import SkillBox from './SkillBox'
import './styles/Skills.css'
import pic1 from './images/webdev.jpg'
import pic2 from './images/videoedit.jpg'
import pic3 from './images/trainer.jpg'

function Skills() {
    return (
        <div className="skillspage">
            <div className="skills_title">
                <center><h1>My Services & Skills</h1></center>
            </div>
            <div className="skills">
            <SkillBox 
            picture={pic1}
            title="Web Developer"
            experience="3 Year experience"
            description="JavaScript, HTML, HTML5, CSS, CSS3, Web Programming Skills, E-Commerce, Teamwork, Web User Interface Design (UI), Security Principles, Object-Oriented Design, Multimedia Content Development, API's"
            />
            <SkillBox 
            picture={pic2}
            title="Video Editor"
            experience="3 Year experience"
            description="
            Solid experience with digital technology and editing software packages (e.g. Premiere Pro, After Effects and Filmora X)
            Demonstrable video editing ability with a strong portfolio
            Familiarity with special effects, 3D and compositing"
            />
            <SkillBox 
            picture={pic3}
            title="Trainer"
            experience="1 Year experience"
            description="
            I will Train You in a Better Way on this Technology Field"
            />

            </div>
        </div>
    )
}

export default Skills
