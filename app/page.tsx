import React from 'react'
import Notification from './components/notification'
import Profilerating from './components/profilerating'
import Tweet from './components/tweet'
import { count } from 'console'

const page= () => {
  let ctr: number = 0;
  return (
    <div>
      <Notification counter={ctr}/>
      <br />
      <Profilerating />
      <br />
      <Tweet />
    </div>
  )
}

export default page
