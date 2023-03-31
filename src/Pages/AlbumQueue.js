import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import { useContext } from 'react'
import { tokenContext } from '../Context/token'
import Play from './Play'

function AlbumQueue({tracks,handlePlay,handleTrackClick}){
    console.log(tracks)

    

   


    const msToMinsAndSecs=(ms)=>{
        const Mins=Math.floor(ms/60000)
        const Secs=((ms%60000)/1000).toFixed(0)
        return Mins + ":"+(Secs < 10 ? 0 : "")+ Secs
            }
        
    
     
 return (
   
        
       <div className='  mt-24 text-white  pl-4 mt-20  mb-20'>
        {tracks?.map((track , index) => 

<div  className='lg:grid grid-cols-2 w-[100%] cursor-pointer lg:hover:bg-cyan-400 lg:hover:text-black lg:hover:border lg:rounded-lg font-bold  '  key={index + "key"}  onClick={() => { handlePlay(track?.uri);handleTrackClick(index)}}  >
            <div className='flex pl-2'>
            <p></p>
            <div className='flex flex-col text-[15px] pt-[16px] pb-[0px] ]' >
            <p  className='text-gray-400 '>{track?.name}</p>
            <p className='text-cyan-300  text-[15px]  flex items-center'>    <p className='text-cyan-300 pr-2'><BsPerson  /></p><p className=''> {track?.artists[0]?.name}</p></p>
           
            </div> </div>
            <div className=' lg:text-[14px] lg:pt-[16px]  lg:flex justify-end pr-8 hidden'>
            <p>{msToMinsAndSecs(track?.duration_ms)}</p>
            </div>
            </div>
           
        )}

        </div>
 )
}



export default AlbumQueue