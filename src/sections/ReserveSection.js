import React from 'react'
import reserveImg from '../images/jason-leung.jpg';

const ReserveSection = () => {
  return (
    <section className='row' id='reserve'>
      <h3>Book an experience with us</h3>
        <div className='col-sm-12 col-md-6'>
            <img className="img-fluid" src={reserveImg} alt="" />
        </div>
        <div className='col-sm-12 col-md-6 form'>
            <label for="fullname" class="form-label">Full Name</label>
            <input type="text" name='fullname' class="form-control" id="fullname" />
            <label for="email" class="form-label">Email address</label>
            <input type="email" name='email' class="form-control" id="email" />
            <label for="phone" class="form-label">Phone Number</label>
            <input type="number" name='phone' class="form-control" id="phone" />
            <label for="party" class="form-label">Table for</label>
            <input type="number" max="10" name='party' class="form-control" id="party" />
            <button type="submit" class="btn reserve-btn">Reserve</button>
            
            </div>
    </section>
  )
}

export default ReserveSection