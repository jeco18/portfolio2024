import React from 'react'
import userData from '../data'

const ExperienceCard = ({ role, desc, date, company }) => {
  return (
    <ol class="relative border-red-900">                  
      <li class="mb-10 ms-4">
          <div class="absolute w-4 h-4 bg-[#86c252] rounded-full mt-1.5 -start-2.5"></div>
          <time class="mb-1 text-sm font-normal leading-none">{date}</time>
          <h3 class="text-lg font-semibold text-[#86c252]">{role}</h3>
          <h3 class="text-base font-thin">{company}</h3>
          <p class="mb-4 text-base font-light">{desc}</p>
      </li>
    </ol>
  );
};

function Experience() {
  return (
    <div className='h-[62vh]'>
      <h1 className="text-2xl my-5 text-[#f4f4f4] -mt-16">Experience</h1>
        <div className="text-[#F4F4F4] border-l-4 border-[#86c252]">
        {userData.experience.map((exp, idx) => (
          <ExperienceCard
                key={idx}
                role={exp.role}
                company={exp.company}
                date={exp.date}
                desc={exp.desc}
              />
        ))}
        </div>
    </div>
  )
}

export default Experience
