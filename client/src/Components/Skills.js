import Sphere from './Sphere';
import '../CSS/Skills.css'

function Skills() {

    return (
        <div id='skills-container' className='sphere-container'>
            <div id='sphere-container'>
                <Sphere/>
            </div>
            <span id='skills-text'>
                I'm a self taught dev passionate about the web. Actively seeking software engineering job opportunities.
                <br/><br/>
                <span id='sellout'>
                    If you're looking to hire, you can connect with me via the contact form below or <a href='mailto:jaishsingh@hotmail.com'>mail me</a>.
                </span>
            </span>
        </div>
    )
}

export default Skills
