import React from 'react'
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <div className='footer row' id='contact-us'>
      <div className="address col-sm-12 col-md-4">
      <h4>Our Address</h4>
        <div className="">
          <a href="https://www.google.com/maps/place/Downtown+Vancouver,+Vancouver,+BC/@49.2802089,-123.1265343,15z/data=!3m1!4b1!4m5!3m4!1s0x5486717f41ba2fb1:0xc6952794560a44aa!8m2!3d49.281954!4d-123.1170744" target="_blank">787 Ses A lane<br/>Vancouver</a>
        </div>
        <div className="">778-777-777</div>
        <div className="">
          <h4>Stay intrigued</h4>
          <BsInstagram/>
        </div>
      </div>
      <div className="bran-name col-sm-12 col-md-4">
      <h4><em>Liquid</em> six</h4>
      </div>
      <div className="hours col-sm-12 col-md-4">
        <h4>Dinner Times</h4>
        <ul>
          <li>Thursday 5 - 9 pm</li>
          <li>Friday 5 - 9 pm</li>
          <li>Satuday 5 - 9 pm</li>
          <li>Sunday 5 - 9 pm</li>
        </ul>
      </div>
    </div>
  )
}
export default Footer