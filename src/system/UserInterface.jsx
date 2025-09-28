
import React, { useEffect, useState } from 'react';
import './ui.css';
import { Link } from 'react-router-dom';

function Ui() {
  // const [isclicked, setIsClicked] = useState(false);

  return (
    <div className={`UserInter`}>
      
      <div className='about'>
        <Link to="/About">
          <div className={`font-sans text-lg text-white hover:text-red-500`}>ABOUT</div>
        </Link>
      </div>
    </div>
  );
}

export default Ui;
