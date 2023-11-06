import React from 'react'

function Profile(p) {

  let s = {
    backgroundImage: `url('${p.url}')`
  }

  let ifrotate="180deg"
  return (
    <>
        <div className={`rounded-l-full w-[90vw] h-[30vh] profile -rotate-[${ (+(p.rotate)) && ifrotate}]`} style={p.styles}>
            <div className={`rounded-full border-2 border-white ml-4 mt-${`4`} w-[26vh] h-[26vh]`} style={s}>
              {/* <img src={p.dataImage} alt={p.alt} />     */}
            </div>
            {/* <div className=''></div>
            <div className=''></div> */}
        </div>
    </>

  )
}

export default Profile