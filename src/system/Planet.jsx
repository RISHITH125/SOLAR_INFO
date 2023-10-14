import React from 'react'

const Planet = (props) => {
  let heading = props.name[0].toUpperCase() + props.name.slice(1);
  
  return (
    <>
      <div className='m-6 text-white flex flex-col items-center gap-6 w-[95vw] h-fit border-2'>
          <div className='text-3xl m-2 border-2 border-red-800'>{heading}</div>
          <div className='flex md:flex-row flex-col w-[95vw] h-fit items-center justify-around border-2 border-800'>
              <div className='w-[84vw] md:w-[45vw] h-fit m-4 flex flex-col gap-5 border-2'>
                <div className='w-[84vw] md:w-[45vw] h-[48vh] border-2 '></div>
                <div className='w-[84vw] md:w-[45vw] h-[28vh]  border-2 '></div>
              </div>  

              {/* Right guy */}
              <div className='w-[84vw] md:w-[45vw] h-fit m-4 flex flex-col gap-5'>
                <div className='w-[84vw] md:w-[45vw] h-[48vh] border-2 '></div>
                <div className='w-[84vw] md:w-[45vw] h-[28vh] border-2 '></div>
              </div>
          </div>  
      </div>
    </>
  )
}   

export default Planet