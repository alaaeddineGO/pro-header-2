import '../../index.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";


function Header() {
  const [shownav,setShownav] = useState(true);
  const toggleNav = ()=>{
    setShownav(!shownav)
  }

  return(
    <div className='header-container'>
      <div className={`wrapper ${shownav?'':'pading'}`}>
          <h2><Link to='/'><span>C</span>oder</Link></h2>
        <ul className={`${shownav?'':'opennav'}`}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Services'>Services</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Conatct'>Contact</Link>
          </li>
        </ul>
        <div className='icon' onClick={toggleNav}>
          {shownav?<FiAlignJustify/>:<IoMdClose/>}
          
        </div>
      </div>

    </div>
  )
}

export default Header