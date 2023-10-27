import React, { useEffect, useState } from 'react'
import './PreLoader.css'

const PreLoader = () => {
  return (
    <>
      <div className='w-[90vw] h-[100vh] flex justify-center items-center'>
        <div className='loadingAnimation w-5 h-5 bg-white rounded-full'></div>
      </div>
    </>
  )
}

const Planet = (props) => {
  let heading = props.name[0].toUpperCase() + props.name.slice(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data) return;
    fetch(`http://localhost:8000/planets/${props.name}`)
      .then((res)=>{
        return res.json();
      }).then((d) => {
        setData(d.data[0]); 
      }).catch((err)=>{
        console.log("Couldn't connect to the sever :(");
        console.log("The reason might be: ");
        console.log(err);
      })
  }, [setData]);

  return (
    <>
      {!data ? <PreLoader /> : <div className='m-6 text-white flex flex-col items-center gap-6 w-[95vw] h-fit'>
          <div className='text-3xl m-2 border-b-2'>{heading}</div>
          <div className='flex md:flex-row flex-col w-[95vw] h-fit items-center justify-between'>
              {/* Left guy */}
              <div className='w-[84vw] md:w-[45vw] h-fit m-4 flex flex-col justify-between gap-5'>
                <div className='w-[84vw] md:w-[45vw] h-fit'>
                  <div className='border-l-white border-l-2 px-4 h-fit'>
                    {data.info}
                  </div>
                </div>
                <div className='w-[84vw] md:w-[45vw] h-fit border-l-white border-l-2 px-4'>
                  {data.info}
                </div>
              </div> 

              {/* Right guy */}
              <div className='w-[84vw] md:w-[45vw] h-fit m-4 flex flex-col justify-between gap-5'>
                <div className='w-[84vw] md:w-[45vw] h-fit'>
                  <div className='border-l-white border-l-2 px-4 h-fit'>
                    {data.info}
                  </div>
                </div>
                <div className='w-[84vw] md:w-[45vw] h-fit border-l-white border-l-2 px-4'>
                  {data.info}
                </div>
              </div>
          </div>  
      </div>}
    </>
  )
}   

export default Planet