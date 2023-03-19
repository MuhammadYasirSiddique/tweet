import React from 'react'
import Image from 'next/image'
import {FaStar} from "react-icons/fa"

const Profilerating = () => {
  return (
    
        <div className='container flex bg-teal-600'>
            <div>
                <Image 
                src="/profilepic.jpeg"
                alt="Profile Pic"
                width={80}
                height={80}
                className='rounded-md object-cover'
                />
            </div>
            <div className=''>
                <span className='text-3xl text-white p-2'><strong>Yasir</strong></span><br />
                <span className='text-md text-white p-2 opacity-90'>Finance Officer</span>
            </div>
            <div className='flex text-orange-400 self-start ml-auto'>
                <FaStar className='mt-1'/>
                
                <span className='text-white opacity-90 ml-2'>5.0</span>
            </div>

        </div>
        
    
  );
}

export default Profilerating