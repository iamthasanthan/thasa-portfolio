import React from 'react'
import './styles/SkillBox.css'
function SkillBox({title,experience,description,picture}) {
    return (
        <div>
            <div class="card">
                <div class="card-image" >
                    <img src={picture} alt={title}/>
                </div>
                <div class="card-text">
                    <span class="date">{experience}</span>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillBox
