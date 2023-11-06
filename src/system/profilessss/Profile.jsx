import React from 'react'

function Profile(p) {

  let s = {
    backgroundImage: `url('${p.url}')`
  }

  let ifrotate="180deg"
  return (
    <>
        <div className={`rounded-l-full w-[96.5vw] h-[30vh] profile -rotate-[${ (+(p.rotate)) && ifrotate}]`} style={p.styles}>
            <div className='rounded-full border-2 border-red-800 ml-16 mt-5 w-[10vw] h-[10vh]' style={s}>
              {/* <img src={p.dataImage} alt={p.alt} />     */}
            </div>
            {/* <div className=''></div>
            <div className=''></div> */}
        </div>
    </>

  )
}

export default Profile