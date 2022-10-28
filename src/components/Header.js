import React from 'react'
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
   <>
    <Navbar bg="warning" variant="dark" >
       
          <Navbar.Brand href="/"style={{paddingLeft:50}} >
            <img
              alt="/"
              src="https://www.freeiconspng.com/thumbs/restaurant-icon-png/pink-restaurants-icon-19.png" 
              width="16%" 
             
            />{' '}
            RUCHI restaurant
          </Navbar.Brand>
        
      </Navbar>
   </>
  )
}

export default Header