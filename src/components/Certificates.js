import React from 'react'
import userData from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLink
  } from "@fortawesome/free-solid-svg-icons";

const CertificateCard = ({title, company, link}) => {
    return (
        <div className="w-full h-42 p-4 border-solid border-[#86c252] border rounded hover:border-[#86c252]">
            <p className="font-semibold">{title}</p>
            <p className='my-2 font-thin text-[#86c252]'>{company}</p>
            <a className='hover:text-[#86c252]' href={link} target='blank'>View Certificate <FontAwesomeIcon icon={faLink} /></a>
        </div>
    )
}

function Certificates() {
  return (
    <div className="text-[#f4f4f4] h-[45vh] -mt-14">
        <h1 className="text-2xl mb-5">Certificates</h1>
        <div className="grid grid-cols-3 gap-4">
        {userData.certificates.map((cert, idx) => (
            <CertificateCard
            key={idx}
            title={cert.title}
            company={cert.company}
            link={cert.link}
            />
        ))}
        </div>
    </div>
  )
}

export default Certificates
