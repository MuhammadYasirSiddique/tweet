import React from 'react'
import Image from 'next/image'
import { GoKebabHorizontal } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import {FiBarChart2} from "react-icons/fi"

interface data{
    pic: any,
    name: string,
    handle: string,
    date: string,
    tweet: string,
    comment: number,
    retweet: number,
    like: number,
    upload: number,
    graph: number,

}



const Tweet = () => {
    let pic = "/profilepic.jpeg"
    let name ="Yasir"
    let handle= "@YasirHyd"
    let date = "Mar-19"
    let tweet= "Values / data of this components are stored in the variables and then variable are called in the tags..."
    let comment= 10
    let retweet= 15
    let like= 25
    

  return (
    <div className='tweetcontain  flex'>
        
            <Image 
            src={pic}
            width={110}
            height={110}
            alt="Profile Pic Yasir"
            className='rounded-full object-cover'
            />
        
        <div className=''>
            <div className='ml-2 flex'>
                <span className=''> <strong>{name}</strong></span>
                <span className='ml-1 text-gray-500'> {handle} </span>
                <span className='ml-1'>&middot;</span>
                <span className='ml-1'> {date}</span>
                <GoKebabHorizontal className='ml-auto'/>
            </div>
            <div className='ml-2' >
                <span className=''> {tweet} </span>
                <div className='flex justify-between mt-5'>
                    <div className='flex'><FaRegComment className='mt-1 mr-2'/> {comment}</div>
                    <div className='flex'><AiOutlineRetweet className='mt-1 mr-2' /> {retweet}</div>
                    <div className='flex'><AiOutlineHeart className='mt-1 mr-2' /> {like}</div>
                    <div className='flex'><FiUpload  className='mt-1 mr-2'/> </div>
                    <div className='flex'><FiBarChart2  className='mt-1 mr-2' /> </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Tweet