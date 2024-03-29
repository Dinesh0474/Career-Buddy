import React from 'react'
import "./styles.css"; 
import img2 from'./img/2544.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>

      <div className='info'>
        <p><h1>Welcome to <br /> <span className='text-e'>Career Buddy</span></h1><br /> Your Ultimate guide to navigating the diverse landscape of career opportunities. Discover your path to success with our comprehensive collection of career roadmaps designed to guide you through every stage of your professional journey.</p>
      </div>
        <img src={img2} alt="" height="450px" className='' />
      </div>
      <div className='col'>
          <Link to="/0" className='c1'>
              
              Chartered Accountant
          </Link>

          <Link to="/1" className="c1">

            Certified Management Accounting
          </Link>

          <Link to="/2" className='c1'>
              
              IRS Officer
          </Link>

          <Link to="/3" className='c1'>
              
              Medicine
          </Link>
      </div>
      <br />
      <div className='col'>
          <Link to="/4" className='c1'>
              
              Management Consultant
          </Link>

          <Link to="/5" className='c1'>
              Engineering
          </Link>

          <Link to="/6" className='c1'>
              IPS Officer
          </Link>
         
      </div>
      <br />

    </div>
  )
}

export default Home