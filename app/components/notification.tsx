import { stringify } from 'querystring';
import React from 'react'
import {IoMdNotificationsOutline} from "react-icons/io"

interface Count  {
    counter: number | string,
}   

const Notification = ({counter}: Count) => {
    let ctr: number | string = 100;
    if (ctr >= 100){
        ctr = "99+"
    }

    
  return (
    <div>
        <div className='container flex items-center'>
            
            <IoMdNotificationsOutline /> 
            <span className='ml-2 text-lg'> Notifications</span>
            <span className='count ml-auto'> {ctr}</span>
        </div>
    </div>
  )
}

export default Notification