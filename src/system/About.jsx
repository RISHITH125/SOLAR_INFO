import React from 'react'
import './about.css'
import Profile from './profilessss/Profile'

function About() {
  return (
    <div className='boob'>
      <div className={`About font-sans`} >ABOUT</div>
      <div className='about_group text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatibus quia animi eligendi natus, veritatis vitae dolor? Corporis ut nulla et, tenetur porro repellendus molestias animi tempore dolores error enim.</div>
      <div>
          <Profile data-image="" data-content="" link1="" link2="" link3=""/>
          <Profile data-image="" data-content="" link1="" link2="" link3=""/>
          <Profile data-image="" data-content="" link1="" link2="" link3=""/>
      </div>
    </div>
    
  )
}

export default About