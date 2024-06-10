import React from 'react'
import userData from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ title, tech, link }) => {
    return (
        <>
            <div className="w-full h-52 border-solid border-[#86c252] border rounded place-content-center content-end">
                <div className='text-end'>
                    <a className='hover:text-[#86c252]' target='blank' href={link}><FontAwesomeIcon icon={faGithub}  className='text-2xl mr-10 mb-5'/></a>
                </div>
                <p className="text-center mb-16 uppercase font-semibold">{title}</p>
                <div className="flex flex-wrap justify-evenly place-content-center mb-5">
                    {tech.map((item, idx) => (
                        <p key={idx} className="font-thin text-[#86c252]">{item}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

function Project() {
  return (
    <div className="h-screen text-[#f4f4f4] mt-12">
          <h1 className="text-2xl mb-5">Projects</h1>
          <div className="grid grid-cols-2 gap-4">
                {userData.projects.map((proj, idx) => (
                    <ProjectCard
                    key={idx}
                    title={proj.title}
                    tech={proj.tech}
                    link={proj.link}
                    />
                ))}
          </div>
        </div>
  )
}

export default Project
