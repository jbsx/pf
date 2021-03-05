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
                        <span className='bold'>Hello! <br/>
                        My name is Jaish Singh. I am a Nepali who was born in Moscow, Russia. I later moved to India for secondary education and I'm currently taking a gap year in Delhi, India after graduating high school.<br/><br/></span>
                        When I'm not programming, I'm usually busy scrolling Reddit for memes or finding hobbies. Recently I've been obsessed over mechanical keyboards and have started to improve my typing speed. I'm currently at around 85 WPM and am trying to get to 100+ WPM average consistently.
                    </span>
                    <img src={photo} alt='myPhoto' id='myPhoto'></img>
                </div>
                <span id='container-2'>
                    This section is supposed to be about my education and professional experience but since I'm just a high school graduate and haven't exactly worked anywhere yet, I don't have much to add here. So, for now you can read some lorem instead! (⊙_⊙;)<br/>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum rerum architecto, sit, et quam sunt accusantium consequuntur vel incidunt repellat facere recusandae libero illo delectus in quisquam blanditiis, odio corporis?
                </span>
            </div>
            <Footer/>
        </div>
    )
}

export default About
