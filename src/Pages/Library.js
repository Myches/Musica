import { useState, useEffect } from 'react';
import React from 'react'
import APIKit from './spotify'
import {AiFillPlayCircle} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { useNavigate } from 'react-router-dom'






function Library() {
 
    const[playlists,setPlaylists]=useState(null)
    
    useEffect (()=>{
    APIKit.get('me/playlists').then(function(response){
    setPlaylists(response.data.items)
    console.log(response.data.items)
    })
    },[])

    const navigate = useNavigate()
    const playPlaylist =(id) =>{
  navigate ('/Player', {state:{id:id}})
    }


    
    
    return (
    <div className="bg-black h-[95vh] my-[5px] mr-[5px]  w-[85vw]  flex-col mt-4  overflow-auto mb-8  ">
    
    <h1 className='   text-18 text-cyan-300  p-2 flex justify-center items-center mt-8'> PLAYLISTS</h1>
    
    <div className='lg:grid grid-cols-5 gap-8   lg:mt-[20px] lg:mx-[50px] lg:border rounded-sm  lg:border-none  sm:flex flex-col  m-8  ' >

    {playlists?.map((playlist) => 
    
    <div className='border rounded-lg  hover:scale-110 transition ease-in-out  cursor-pointer border-none relative ' key={playlist.id} onClick={()=>playPlaylist(playlist.id)}>
     
     <img  src={playlist?.images[0]?.url} className="border rounded-sm border-8 mt-8"/> 

     
    <p className='text-white text-[16px] pl-2 font-mono'>  {playlist.name}</p> 
    <p className='text-white text-[14px] pl-2 font-mono '>  {playlist.tracks.total} Songs</p>
    
    <button className=' absolute top-[30%] left-[40%] '>
    
    <IconContext.Provider value={{size:'40px' , color:'cyan',}}>
    < AiFillPlayCircle />
    </IconContext.Provider>
    </button>
    </div> )} </div>
      
    
    </div>
   
    )
    }
    

export default Library;