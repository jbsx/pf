import Sphere from './Sphere';
import '../CSS/Skills.css'

function Skills() {

    return (
        <div id='skills-container' className='sphere-container'>
            <Sphere/>

            <span id='skills-text'>
                I am a self taught dev. I have developed experience in skills such as testing and debugging as I usually don't have a guide. Furthermore, as I work alone on most projects, I am competent in other areas other than programming, such as UI/UX and photoshop.
                <br/><br/>
                <span id='sellout'>
                    If you're a scout, you can connect with me via the contact form below or <a href='mailto:jaish.singh007@gmail.com'>mail me</a>.
                </span>
            </span>
        </div>
    )
}

export default Skills
