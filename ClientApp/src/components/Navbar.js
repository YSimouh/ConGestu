import React,{useState, useEffect} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


export default function Navbar() {
  const [click, setClick] = useState(false);
  const nav = () => {
      setClick(!click);
  }
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(()=>{
    const changeWidth= ()=>{
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize',changeWidth)
    return ()=> {
      window.removeEventListener('resize',changeWidth
      )
    }
  },[])

  return (
    <>
        <nav >   
      <ul>
      {(click || width>500) &&(
              
              <ul className='list'>
              <li className="items"><Link to='/'> Translate </Link></li>
              <li className="items"><Link to='/courses'>Courses</Link></li>
              <li className="items"><Link to='/information'>Information</Link></li>
              </ul>
          )} 
      </ul>
      <div onClick={nav} className='btn'><i class="fa-solid fa-bars"></i></div>
    </nav>     
    </>
  )
}
