import React from 'react'
import Header from './Header'
import Skill from './Skill'
import '../CSS/SkillsPage.css'
import ReactLogo from '../Images/React.png'
import HTML5Logo from '../Images/HTML5.png'
import NodeLogo from '../Images/Node.png'
import JSLogo from '../Images/JS.png'
import CSS3Logo from '../Images/CSS3.png'
import ExpressLogo from '../Images/Express.png'
import NPMLogo from '../Images/NPM.png'
import MySQLLogo from '../Images/MySQL.png'
import JavaLogo from '../Images/Java.png'
import MongoDBLogo from '../Images/MongoDB.png'

function SkillsPage() {
    
    const info = [{
        id:'MongoDB',
        imgName:MongoDBLogo,
        time:'Half a Year',
        proficiency:'Beginner'
    },{
        id:'Express',
        imgName:ExpressLogo,
        time:'1 Year',
        proficiency:'Intermediate'
    },{
        id:'React',
        imgName:ReactLogo,
        time:'1 Year',
        proficiency:'Intermediate'
    },{
        id:'Node',
        imgName:NodeLogo,
        time:'1 Year',
        proficiency:'Intermediate'
    },{
        id:'HTML5',
        imgName:HTML5Logo,
        time:'3 Years',
        proficiency:'Advanced'
    },{
        id:'CSS3',
        imgName:CSS3Logo,
        time:'2 Years',
        proficiency:'Advanced'
    },{
        id:'JavaScript',
        imgName:JSLogo,
        time:'2 Years',
        proficiency:'Intermediate'
    },{
        id:'NPM',
        imgName:NPMLogo,
        time:'1 Year',
        proficiency:'Advanced'
    },{
        id:'Java',
        imgName:JavaLogo,
        time:'3 Years',
        proficiency:'Advanced'
    },{
        id:'MySQL',
        imgName:MySQLLogo,
        time:'1 Year',
        proficiency:'Intermediate'
    },]
        
        const chuspal = (idName)=>{document.getElementById(idName).scrollIntoView({behavior:'smooth'})}

    return (
        <div>
            <Header/>
            <div id="skills-nav">
                {
                    info.map((prop)=>(
                        <button className='nav-button' key={prop.id} onClick={()=>chuspal(prop.id)}> 
                            <img src={prop.imgName} alt="img"/> 
                        </button>
                    ))
                }
            </div>

            <a href='./resume'>
                <button id='resume-button'>
                    Resume
                </button>
            </a>

            <div className="skill-container">
                {
                    info.map((prop)=>(
                        <Skill props={prop} key={prop.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillsPage
