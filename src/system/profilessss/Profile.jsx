import React from 'react'

function Profile(props) {
  return (
    <>
        <div className={`md:rounded-full flex flex-col md:flex-row justify-between items-center gap-10 p-10 w-[96.5vw] h-fit profile`} style={props.styles}>
          {
            props.rotate === "0" ? <>
              <img src={props.url} className='w-[160px] border-2 h-fit rounded-full' />
              <div className='flex flex-col gap-2'>
                <div className='text-white'>
                {props.data}
                </div>

                <div className='flex flex-row sm:gap-4 gap-5'>  
                  {
                    props.links.map((value, key) => {
                      return <a key={key} target='_blank' href={value[1]}> 
                        <img className='w-[30px] h-fit' src={value[0]} />
                      </a>
                    })
                  }
                </div>
              </div>
            </> :
            <>
              <div className='text-white'></div>  
              <img src={props.url} className=' w-[160px] h-fit rounded-full' />
            </>
          }
        </div>
    </>

  )
}

export default Profile