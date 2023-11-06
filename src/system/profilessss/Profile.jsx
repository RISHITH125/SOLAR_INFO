import React from 'react'
function Profile(p) {
  let ifrotate="180deg"
  return (
    <>
        <div className={`rounded-l-full w-[96.5vw] h-[30vh] profile -rotate-[${ (+(p.rotate)) && ifrotate}]`} style={p.styles}>
            {/* <div className=''></div>
            <div className=''></div> */}
        </div>
    </>

  )
}

export default Profile