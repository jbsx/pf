import Sphere from './Sphere';
import '../CSS/Skills.css'

function Skills() {

    return (
        <div id='skills-container' className='sphere-container'>
            <Sphere/>

            <span id='skills-text'>
                I'm a self taught dev passionate about the web. I'm actively seeking internship and entry level job opportunities.
                <br/><br/>
                <span id='sellout'>
                    If you're a scout, you can connect with me via the contact form below or <a href='mailto:jaish.singh007@gmail.com'>mail me</a>.
                </span>
            </span>
        </div>
    )
}

export default Skills
