import React from 'react'
import Container from 'react-bootstrap/Container';
import { faVideo } from '@fortawesome/free-solid-svg-icons';

import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Header() {
  return (
    <div>
  <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand  >
          <FontAwesomeIcon style={{color:'orange', fontSize:'30px'}} icon={faVideo} beat />

       <span style={{color:'white',fontSize:'30px',marginLeft:'15px' }}>  Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
