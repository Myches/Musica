import React from 'react'
import {BsPerson} from 'react-icons/bs'

function Queue({tracks ,setCurrentIndex,handlePlay,handleTrackClick}){
  

    const msToMinsAndSecs=(ms)=>{
const Mins=Math.floor(ms/60000)
const Secs=((ms%60000)/1000).toFixed(0)
return Mins + ":"+(Secs < 10 ? 0 : "")+ Secs
    }

     
 return (
   
        
       <div className='lg:m-12 sm:m-2 mt-20 mb-20 text-white overflow-x-hidden text-overflow-ellipsis whitespace-no-wrap  '>
        {tracks?.map((track , index) => 

<div  className='lg:grid grid-cols-2  cursor-pointer lg:hover:bg-cyan-400 lg:hover:text-black lg:hover:border rounded-lg font-bold   '  key={index + "key"}  onClick={() => {setCurrentIndex(index); handlePlay(track?.track?.uri);handleTrackClick(index)}}>
            <div className='flex '>
            <img src={track?.track?.album?.images[0]?.url} alt="album" className='w-[45px] h-[45px] m-[13px] border rounded-lg' />
            <div className='flex flex-col text-[15px] pt-[16px] pb-[0px] ]' >
            <p  className='text-gray-400 '>{track?.track?.name}</p>
            <p className='text-cyan-300  text-[15px]  flex items-center'>    <p className='text-cyan-300 pr-2'><BsPerson  /></p><p> {track?.track?.artists[0]?.name}</p></p>
           
            </div> </div>
            <div className=' lg:text-[14px] lg:pt-[16px]  lg:flex justify-end pr-8 hidden'>
            <p>{msToMinsAndSecs(track?.track?.duration_ms)}</p>
            </div>
            </div>
           
        )}

        </div>

        
 )
}



export default Queue