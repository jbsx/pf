import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import '../CSS/About.css'
import photo from '../photo.jpg'

function About() {
    return (
        <div id='about'>
            <Header/>
            <div id="content">
                <div id="container-1">
                    <span id='about-desc'> 
                        <span className='bold'>Hi! <br/>
                        I'm Jaish, a full stack software developer passionate about the web. Over the course of developing numerous software applications, I have developed strong troubleshooting and debugging skills along with a variety of interests which I leverage to maximize my potential.
                        <br/><br/></span>
                        
                        As a Computer Science undergraduate, I'm actively seeking internship opportunities.
                        If you're a recruiter, you can find my achievements and experience in my <a href="https://drive.google.com/drive/folders/1r5MTEyt3SzBeEGjRGIO3h6nkqbVf7RPC?usp=sharing" target="blank">resume</a>.
                    </span>
                    <img src={photo} alt='myPhoto' id='myPhoto'></img>
                </div>
                <span id='container-2'>
                    When I'm not coding, I enjoy indulging in various hobbies that spike my curiosity such as improving typing speed.
                </span>
            </div>
            <Footer/>
        </div>
    )
}

export default About
