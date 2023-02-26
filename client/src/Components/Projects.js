import React from 'react'
import Header from './Header'
import Project from './Project'
import '../CSS/Projects.css'
import jsonData from '../Assets/projects.json'

function Projects() {
    return (
        <div>
            <Header/>
            <div id='projects'>
                {jsonData.projects.map(n=> <Project key={n.title} data={n}/>)}
            </div>
        </div>
    )
}

export default Projects
