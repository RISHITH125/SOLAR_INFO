import { Link } from 'react-router-dom'
import {less } from '../../assets'
import { useSolarSystem } from '../contexts/SolarSystemContext';

function BackButton() {
  const { resetAnimation } = useSolarSystem();

  return (
    <>
      <Link
        to="/"
        className='fixed left-10 top-10 z-[9999] bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all'
        onClick={resetAnimation}
      >
        <img src={less} className="w-[40px] h-fit hover:scale-[80%] transition-transform" />
      </Link>

    </>

  )
}

export default BackButton;