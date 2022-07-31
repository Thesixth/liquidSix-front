import React from 'react'

const Nav = () => {
  return (
        <div className="navbar navbar-expand-lg sticky-top" id='navStyle'>
            <div className="container-fluid" >
                <a className="navbar-brand" href="#welcome">Liquid Six</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#welcome">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reserve">Reservations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-us">Contact Us</a>
                        </li>                                  
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Nav