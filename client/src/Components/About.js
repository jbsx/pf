import React from 'react'
import Footer from '../Components/Footer'
import '../CSS/About.css'
import photo from '../Assets/photo.jpg'
import Header from './Header'

function About() {
    return (
        <div id='about'>
            <Header/>
            <div id="content">
                <div id="container-1">
                    <span id='about-desc'> 
                        <span className='bold'>Hi! <br/>
                            Random text 1
                        <br/><br/></span>
                        Random text 2
                    </span>
                    <img src={photo} alt='myPhoto' id='myPhoto'></img>
                </div>
                <span id='container-2'>
                    Random text 3
                </span>
            </div>
            <Footer/>
        </div>
    )
}

export default About
