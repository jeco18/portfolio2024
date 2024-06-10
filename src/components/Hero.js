import React from 'react'
import userData from '../data'

function Hero() {
  return (
    <div className="h-[65vh] place-content-center text-center">
        <h1 className="text-7xl font-bold tracking-wider text-[#F4F4F4]">Hi. I'm {userData.name}.</h1>
        <p className="text-5xl font-bold my-3 tracking-widest text-[#86c252]">Architect of Digital Realm.</p>
        <p className="text-lg text-[#F4F4F4]">I am a passionate {userData.role} based in the Philippines.</p>
    </div>
    )
}

export default Hero
