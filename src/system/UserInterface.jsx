import React, { useEffect, useState } from 'react';
import './ui.css';

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
    <div className={`Sample`}>
      <p className={`interact text-white font-bold from-neutral-50`} onClick={handleClick}>
        {isclicked ? (
          <div className={`interact-tab flex`}>
            <div className={`Sample2 cursor-pointer`}></div>
          </div>
        ) : (maxwidth > 800) ? (
          <div className='absolute cursor-pointer font-bold text-xl italic top-5 left-7 Menu'>
            <div className={`Menu_line1`}></div>
            <div className={`Menu_line2`}></div>
            <div className={`Menu_line3`}></div>
          </div>
        ) : (
          <div className={`cursor-pointer Sample3`}></div>
        )}
      </p>
    </div>
  );
}

export default Ui;
