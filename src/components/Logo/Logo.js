import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import brain from './brain.jpg';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{ max: 55 }} style={{ height: '250px', width: '250px'}}>
                <h1><img style={{padding:'10px 0px 10px 0px'}} src={brain} alt='logo'/></h1>
            </Tilt>
        </div>
    );
}

export default Logo;
