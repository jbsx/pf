import React from 'react'
import '../CSS/Skill.css'

function Skill({props}) {

    return (
        <div className='container' id={props.id}>
            <div id="img-container">
                <img src={props.imgName} alt={props.id + 'Logo'}/>
            </div>
                
            <div id="desc-container">
                <span id='id'>
                    {props.id}
                </span>
                    <br/><br/>
                <span id='desc'>
                    Experience: {props.time} <br/>
                    Proficiency: {props.proficiency}
                </span>
            </div>
        </div>
    )
}

export default Skill
