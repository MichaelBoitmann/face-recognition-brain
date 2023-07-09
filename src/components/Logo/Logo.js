import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain_100px from './brain_100px.png';
import './Logo.css';


const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2">
        <div 
          style={{
            height: '150px',
            color: 'white',            
          }}
        >
          <div className='Tilt-inner pa3' >            
            <img style={{paddingTop: '5px'}} src={magicwand} alt="logo" />
          </div>
        </div>
      </Tilt>
    </div>  
  );
}

export default Logo;

    // <div className='pa3 mt0'>
        //     <Tilt className='Tilt br2 shadow-2' options={{ max : 55 }}>
        //         <div className='Tilt-inner pa3'>
        //             <img alt='logo-brain' src={brain_100px} />
        //         </div>
        //     </Tilt>
        // </div>