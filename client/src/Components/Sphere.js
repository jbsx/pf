import React, {useEffect} from 'react'
import TagCloud from 'TagCloud'
import '../CSS/Sphere.css'

const container = '#tagcloud';
const texts = [
    'Javascript', 'Rust', 'Linux', 'Python',
    'CSS', 'HTML', 'Nodejs', 'Docker',
    'React', 'Git', 'Solidity', 'Deno',
    'NPM', 'MySQL', 'MongoDB', 'Bash',
    'Vim', 'Webpack', 'Vite', 'Svelte'
];
const options = {
    radius: "350",
    keep: true,
    direction: 60,
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
