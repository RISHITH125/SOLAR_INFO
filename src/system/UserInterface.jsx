
import React, { useEffect, useState } from 'react';
import './ui.css';
import { Link } from 'react-router-dom';
import { menu } from '../assets';

function Ui() {
  const [isclicked, setIsClicked] = useState(false);
  const [maxwidth, setMaxWidth] = useState(window.innerWidth);

  const handleClick = () => {
    setIsClicked(!isclicked);
  };

  let closesymb = window.innerWidth > 800 ? "Close cursor-pointer w-[28vw] flex flex-row justify-end" : "Close cursor-pointer";
  let Interacttab =window.innerWidth > 800 ? "interact-tab flex flex-col justify-start items-center gap-10":"interact-tab flex flex-col justify-start items-center gap-4"
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
      <div className={`interact text-white font-bold from-neutral-50`}>
        {isclicked ? (
          <div className={Interacttab}>
            {maxwidth > 800 ? (
              <div className={closesymb} onClick={handleClick}>
                <img className='w-[2vw] hover:border-2 hover:border-orange-800' src={menu} alt="Menu" />
              </div>
            ) : (
              <div className={`Close`} onClick={handleClick}>
              </div>
            )}
            <div className="w-[25vw] h-[90vh] text-white flex flex-col justify-start items-center gap-5">
              <Link className='hover:text-orange-500' to="/sun">Sun</Link>
              <Link className='hover:text-orange-500' to="/mercury">Mercury</Link>
              <Link className='hover:text-orange-500' to="/venus">Venus</Link>
              <Link className='hover:text-orange-500' to="/earth">Earth</Link>
              <Link className='hover:text-orange-500' to="/mars">Mars</Link>
              <Link className='hover:text-orange-500' to="/jupiter">Jupiter</Link>
              <Link className='hover:text-orange-500' to="/saturn">Saturn</Link>
              <Link className='hover:text-orange-500' to="/uranus">Uranus</Link>
              <Link className='hover:text-orange-500' to="/neptune">Neptune</Link>
            </div>
          </div>
        ) : (maxwidth > 800) ? (
          <div className='absolute cursor-pointer font-bold text-xl italic top-5 left-7 Menu' onClick={handleClick}>
            <div className={`Menu_line1`}></div>
            <div className={`Menu_line2`}></div>
            <div className={`Menu_line3`}></div> 
          </div>
        ) : (
          <div className={`cursor-pointer Open`} onClick={handleClick}>
            {/* Content for the "Open" state */}
          </div>
        )}
      </div>

      <div className='about'>
        <Link to="/About">
          <div className={`font-sans text-lg text-white hover:text-red-500`}>ABOUT</div>
        </Link>
      </div>
    </div>
  );
}

export default Ui;
