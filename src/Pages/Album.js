import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons/lib'
import { useNavigate } from 'react-router-dom'
import {AiFillPlayCircle} from 'react-icons/ai'
import   apiClient  from './spotify'




function Album() {

    const[albums,setAlbums]=useState([])


    //api call for albums
    useEffect (()=>{
        apiClient.get("me/albums" )
        .then(response=>{
        setAlbums(response.data.items)
     
        })
        },[])
    
        var navigate = useNavigate()
        const playAlbum =(id) =>{
      navigate ('/AlbumPlayer', {state:{id:id}})
        }

       

        return(
            
                <div className="bg-black h-[95vh] my-[5px] mr-[5px]  w-[85vw]  flex-col mb-4 overflow-auto ">
                
                <h1 className='  text-18 text-cyan-300 mt-8  p-2 flex justify-center items-center '>ALBUMS</h1>
                
                <div className='lg:grid grid-cols-5 gap-8   lg:mt-[20px] lg:mx-[50px] lg:border rounded-sm lg:border-none sm:flex flex-col m-8' >
                
                {albums?.map((album) => 
                
                <div className='border rounded-lg  hover:scale-110 transition ease-in-out  cursor-pointer border-none relative' key={album.album.id} onClick={()=>playAlbum(album.album.id)}>
                 
                 <img  src={album?.album?.images[0].url} className="border rounded-sm border-8 mt-8"/> 
                <p className='text-white text-[16px] pl-2 font-mono'>  {album?.album?.name}</p> 
                <p className='text-white text-[14px] pl-2 font-mono'>  {album?.album?.artists[0]?.name} </p>
              
                
                <button className=' absolute top-[30%] left-[40%] '>
                
                <IconContext.Provider value={{size:'40px' , color:'cyan',}}>
                < AiFillPlayCircle />
                </IconContext.Provider>
                </button>
                </div>
                )}
                </div>
                </div>
        )











}




export default Album;