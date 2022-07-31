import React from 'react'

import hero from '../images/fusco-studio.jpg'
import { BsChevronDown } from "react-icons/bs";

const WelcomeSection = () => {
  return (
    <div id='welcome'>
      <img src={hero} className="img-fluid" alt="..."></img> 
      <h1>Enjoy the <em>Liquid</em> experience</h1>
      <BsChevronDown className='arrow'/>
    </div>
  )
}

export default WelcomeSection