import React from 'react'
import './NotFound.css'

const NotFound = () => {
  return (
    <>
        <div className='h-[100vh] w-[90vw] flex flex-col  justify-center items-center'>
            <div className='text-white fontSize1 border-b-2'>
                404
            </div>
            <div className='text-white fontSize1'>
                What?? Where are you going?
            </div>
            <div className='text-white text-center fontSize2'>
                Don't leave the universe! Who knows what might be lurking around in the dark space!
            </div>
        </div>
    </>
  )
}

export default NotFound