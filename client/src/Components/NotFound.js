import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from '../SVG/Logo1.svg'
import anime from 'animejs'
import TypeIt from 'typeit-react'
import '../CSS/NotFound.css'

function NotFound() {
    const[rotateState, setRotate] = useState(false);
    
    let toggleRotate = ()=> setRotate(!rotateState)
  
    useEffect(()=>{
      if(rotateState){
        anime({
        targets: '#logo',
        rotate: 90,
        easing: 'spring(1, 100, 50, 0)'
        }
      );}
      if(!rotateState){
        anime({
        targets: '#logo',
        rotate: -90,
        easing: 'spring(1, 100, 50, 0)'
        }
      );}
    },[rotateState])

    return (
        <div id='NotFound'>
            <Link to='/'>
            <img onMouseEnter={toggleRotate} onMouseLeave={toggleRotate} src={logo} alt='logo' id='logo'></img>
            </Link>
            <div id="type-it-container">
                <TypeIt id='notFound-txt'
                        getBeforeInit={instance => {
                            instance
                            .type(`404`)
                            .pause(100)
                            .break()
                            .pause(200)
                            .type(`Not Found`)
                            
                            return instance;
                        }}
                />
            </div>
        </div>
    )
}

export default NotFound
