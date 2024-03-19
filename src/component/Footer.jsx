import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div className="d-flex align-items-center">
          <FontAwesomeIcon style={{color:'orange', fontSize:'25px',marginLeft:'45px'}} icon={faVideo} beat />
            <span 
             style={{ color: 'white', fontSize: '30px',marginLeft:'15px' }}>Video Player</span>
          </div>
          <p className="ms-md-5 fw-bold" style={{textAlign:"justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore modi odio, corporis,
            quae commodi saepe soluta vero ratione asperiores aperiam fugiat voluptas dolor
            assumenda rem vel distinctio magni aspernatur repudiandae.
          </p>
        </div>
        <div className="col-md-2 ">
          <h3 className="text-center">Links</h3>
          <div className="ms-5">
            <p className='mt-3' > <Link to={'/'}> Landing Page</Link>  </p>
            <p ><Link to={'/home'}>Home</Link></p>
            <p><Link to={'/WatchHistory'}>Watch History</Link></p>
          </div>
        </div>
        <div className="col-md-2">
          <h3 className="text-center">Guides</h3>
          <div className="ms-5">
            <p>React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
          </div>
        </div>
        <div className="col-md-4">
          <h3 className="text-center">Contact Us</h3>
          <div className='text-center'>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email id"
              className="rounded p-2 mb-2"
            />
            <button className="rounded bg-warning ms-2 p-2">Subscribe</button>
            </div>
            <div className="d-flex ms-5 w-75 justify-content-around mt-3 pt-2">
            <FontAwesomeIcon icon={faInstagram}size="2xl" className='ms-4' />
            <FontAwesomeIcon icon={faFacebook}size="2xl" />
            <FontAwesomeIcon icon={faWhatsapp}size="2xl" />
            <FontAwesomeIcon icon={faXTwitter} size="2xl" />
            </div>
          </div>
        </div>
    
      <p className="text-center mt-5">Copyright 2023 Media Player. Build with Rect</p>
    </div>
    

    </>
  )
}

export default Footer
