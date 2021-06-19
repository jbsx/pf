import React, {useState, useEffect} from 'react'
import anime from 'animejs/lib/anime.es.js'
import '../CSS/Header.css'
import logo from '../SVG/Logo1.svg'
import { Link } from 'react-router-dom'

function Header() {

  const[rotateState, setRotate] = useState(false);

  const links = {
    fontFamily: 'var(--main-font)',
    textDecoration: 'none',
    color: 'var(--main-clr)',
  }
  
  let toggleRotate = ()=> setRotate(!rotateState)

  useEffect(()=>{
    if(rotateState){
      anime({
      targets: '#logo',
      rotate: -90,
      duration: 1000,
      direction: 'forwards',
      easing: 'easeOutExpo'
    }
    );}
    if(!rotateState){
      anime({
      targets: '#logo',
      direction: 'forwards',
      rotate: 90,
      duration: 1000,
      easing: 'easeOutExpo'
      }
    );}
  },[rotateState])

  return (
    <header>
      <Link to='/'>
      <img onMouseEnter={toggleRotate} onMouseLeave={toggleRotate} src={logo} alt='logo' id='logo'></img>
      </Link>
      <ul>
        <li onMouseEnter={toggleRotate} onMouseLeave={toggleRotate}><Link style={links} to='./about'>About</Link></li>
        <li onMouseEnter={toggleRotate} onMouseLeave={toggleRotate}><Link style={links} to='./skills'>Skills</Link></li>
        <li onMouseEnter={toggleRotate} onMouseLeave={toggleRotate}><a style={links} href={`https://drive.google.com/drive/folders/1r5MTEyt3SzBeEGjRGIO3h6nkqbVf7RPC?usp=sharing`} target='_blank' >Resume</a></li>
        {/* <li onMouseEnter={toggleRotate} onMouseLeave={toggleRotate}><Link style={links} to='./projects'>Projects</Link></li> */}
      </ul>

    </header>
  )
}

export default Header