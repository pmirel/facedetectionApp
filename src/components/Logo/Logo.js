import React from 'react';
import Tilt from 'react-tilt'
import './Logo.css';
import faceLogo from './faceLogo.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max: 35 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3 center" ><img style={{paddingTop: '5px',  height: '7em'}} src={faceLogo} alt='face logo'/> </div>
      </Tilt>
    </div>
  );
}

export default Logo;