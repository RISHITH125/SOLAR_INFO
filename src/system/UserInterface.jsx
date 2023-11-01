import React, { useEffect, useState } from 'react';
import './ui.css';
import { Link } from 'react-router-dom'
function Ui() {
  const [isclicked, setIsClicked] = useState(false);
  const [maxwidth, setMaxWidth] = useState(window.innerWidth);
  const handleClick = () => {
    setIsClicked(!isclicked);
  };

  useEffect(() => {
    const handleResize = () => {
      setMaxWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`UserInter`}>
        <div className={`interact text-white font-bold from-neutral-50`} >
          {isclicked ? (
            <div className={`interact-tab flex`} >
              <div className={`Close cursor-pointer`} onClick={handleClick}></div>
              <div className={`Topdiv`}></div>
              <div className={`Botdiv`}></div>
            </div>
          ) : (maxwidth > 800) ? (
            <div className='absolute cursor-pointer font-bold text-xl italic top-5 left-7 Menu' onClick={handleClick}>
              <div className={`Menu_line1`}></div>
              <div className={`Menu_line2`}></div>
              <div className={`Menu_line3`}></div>
            </div>
          ) : (
            <div className={`cursor-pointer Open`} onClick={handleClick}></div>
          )}
        </div>
          
        <div className='about'>
            <Link to="/About">
              <div className={`font-sans text-lg text-white`}>ABOUT</div>
            </Link> 
        </div>
    </div>
  );
}

export default Ui;
