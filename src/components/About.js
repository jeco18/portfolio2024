import React from 'react'
import userData from '../data'

function About() {
  return (
    <div className="h-screen text-[#F4F4F4]">
        <div>
            <h1 className="text-2xl mb-5">About me</h1>
            <p className="font-thin leading-relaxed">{userData.about.description}</p>
            <h1 className="text-2xl mt-32 mb-5">Skillset</h1>
            <div className="flex gap-2 flex-wrap">
                {userData.about.skillset?.map((skill,idx) => (
                    <div 
                        key={idx} className="w-fit h-fit border border-[#86c252] text-sm p-2 rounded-sm font-thin">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About
