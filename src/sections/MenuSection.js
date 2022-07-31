import React from 'react'
import menuServices from '../services/menu'
import { useEffect, useState } from 'react'
import MenuItem from '../components/MenuItem'
import welcomeVid from '../images/nothername.mp4';

const MenuSection = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        menuServices.getAll()
        .then(data => {
          setMenu(data)
        })
       
      }, [])
  return (
    <section id='menu' className='menuSection '>
        <div className="menu-video">
          <video className='video'
            width="100%" height="00%" autoPlay loop
            muted>
            <source src={welcomeVid} type="video/mp4"/>
          </video> 
        </div>
        <div className="main-menu">
          <h1>Menu</h1>
          <div className="row">
          <ul>
          {menu.map((dish) => (
              <MenuItem key={dish.dish} dish={dish} />
          ))}
          </ul>
          </div>
        </div>
    </section>
  )
}

export default MenuSection