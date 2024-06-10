import React from 'react'
import userData from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faLinkedinIn, faFacebook, 
} from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <hr/>
        <div className='h-[16vh] text-[#f4f4f4] flex items-center grid grid-cols-2'>
          <p className='text-[#86c252]'>&copy; {userData.footer.brand}</p>
          <div className='text-end text-xl'>
            <a className='hover:text-[#86c252]' href={userData.footer.linkedin}><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a className='hover:text-[#86c252]' href={userData.footer.email}><FontAwesomeIcon icon={faEnvelope}  className='mx-5'/></a>
            <a className='hover:text-[#86c252]' href={userData.footer.facebook}><FontAwesomeIcon icon={faFacebook} /></a>
            <a className='hover:text-[#86c252]' href={userData.footer.github}><FontAwesomeIcon icon={faGithub} className='ml-5'/></a>
          </div>
        </div>
    </div>
  )
}

export default Footer
