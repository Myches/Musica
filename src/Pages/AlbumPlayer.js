import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import   apiClient  from './spotify'
import   AlbumSongcard  from './AlbumSongcard'
import   AlbumQueue  from './AlbumQueue'



function AlbumPlayer({handlePlay,getUris,handleTrackClick}){

  
  const[tracks,setTracks]=useState([])
  const [albums, setAlbums] = useState({});
  const [albumHeader, setAlbumHeader] = useState(null);
  const location = useLocation();
    
  useEffect(() => {
    if (location.state) {
      apiClient
        .get("albums/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          const uris = res.data.items.map(item => item.uri);
          getUris(uris);
          
        });
    }
  }, [location.state]);

  
  useEffect (()=>{
    apiClient.get("me/albums" )
    .then(response=>{   
      const albs = response.data.items.map(item => item.album);
      setAlbums(albs);
      const album = albs.find(album => album.id === location.state?.id);
      setAlbumHeader(album);
     
    });   
  },[])
  

 

    return (
      <div className='bg-black h-[95vh] my-[5px] mr-[5px]  w-[85vw]  sm: flex flex-wrap flex-row flex-col mt-4 mb-4 overflow-auto'> 
      <div className='flex flex-col'> 
    <div className='flex justify-center align-center '> <AlbumSongcard tracks={tracks}  albumHeader={albumHeader} /></div>
    <div>  <AlbumQueue tracks={tracks} handlePlay={handlePlay} handleTrackClick={handleTrackClick}/></div>
    </div>  
    </div> 
)
}



export default AlbumPlayer