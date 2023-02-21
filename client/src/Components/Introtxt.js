import {useEffect, useRef} from 'react';
import '../CSS/Introtxt.css';
import Typed from 'typed.js';

function Introtxt({options}) {
    const el = useRef(null);

    useEffect(()=>{
        const typed = new Typed(el.current, {
            strings: [
                `Hi, I'm Jaish`,
                `Seeking Software Engineering job opportunities`
            ],
            typeSpeed: 50,
            backSpeed: 30,
            showCursor: true,
            cursorChar: "|",
            contentType: null,
            backDelay: 1000,
            loop: true,
            loopCount: Infinity
        });

        return () => {
            if (!typed) return;
            typed.destroy();
        };
    }, [el, options]);

    return (
        <div id='intro-container'>
            <span className='intro-txt' id='typed' ref={el}></span>
        </div>
    );
};

export default Introtxt;
