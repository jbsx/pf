import React, {useEffect} from 'react'
import TagCloud from 'TagCloud'
import '../CSS/Sphere.css'

const container = '#tagcloud';
const texts = [
    'Java', 'Javascript',
    'CSS3', 'HTML5', 'ES6', 'Node',
    'React.js', 'Express.js', 'Git',
    'NPM', 'Github','MySQL', 'MongoDB'
];
const options = {
    radius: "350",
    keep: true,
    direction: 0,
    maxSpeed:'normal'
};

function Sphere() {
    
    useEffect(() => {
        TagCloud(container, texts, options)
    }, [])

    return (
            <div id="tagcloud">

            </div>
    )
}

export default Sphere