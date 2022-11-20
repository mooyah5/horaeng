import React from 'react';
import Image from '../assets/images/admin.png';
import './home.scss';

function Home() {
  return (
    <div id="home" className="flex align-center justify-center">
      <div className="home_box flex  align-center justify-center">
        <img src={Image} alt="tiger" className="home_box_img" />
      </div>
    </div>
  );
}

export default Home;
