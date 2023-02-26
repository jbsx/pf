import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/Logo1.svg'
import anime from 'animejs'
import '../CSS/NotFound.css'

function NotFound({options}) {
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
            {options.err}
            <span id='error'>{options.msg}</span>
        </div>
    )
}

export default NotFound
