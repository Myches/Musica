import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import   apiClient  from './spotify'
import   SongCard  from './SongCard'
import   Queue  from './Queue'


function Player({handlePlay,getUris,handleTrackClick}){

    const location=useLocation()
    
    const[tracks,setTracks]=useState([])
    const[currentTrack,setCurrentTrack]=useState({})
    const[currentIndex,setCurrentIndex]=useState(0)

   

    useEffect(()=>{
        if(location.state){
            apiClient.get("playlists/" + location.state?.id +"/tracks")
            .then(res=>
                {
                setTracks(res.data.items)
                setCurrentTrack(res.data.items[0].track)
                const uris = res.data.items.map(item => item.track.uri);
                getUris(uris);
               })
        }
    },[location.state])


    useEffect(() => {
        setCurrentTrack(tracks[currentIndex]?.track);
      }, [currentIndex, tracks]);
    
  
 return (
    <div className='bg-black h-[95vh] my-[5px] mr-[5px]  w-[85vw] sm: flex flex-wrap flex-row flex-col   overflow-auto'> 
   <div className='flex flex-col'>
  <div className='flex justify-center align-center '> <SongCard album={currentTrack?.album} /></div>
  <div className=''><Queue tracks={tracks} setCurrentIndex={setCurrentIndex} handlePlay={handlePlay} handleTrackClick={handleTrackClick}/></div>
 </div> 
        </div>
 )
}



export default Player