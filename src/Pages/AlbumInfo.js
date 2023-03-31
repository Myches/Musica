import React from 'react';
function AlbumInfo({album}){
   
    return(
<div className='flex flex-col justify-center items-center text-bold text-gray-400'>
    
<p className='text-bold display:inline  '>Playing From {album?.name}</p>
<p >{album?.artists[0]?.name}</p>
    <p>Release Date : {album?.release_date}</p>

   

            
       
        </div>
    )
}

export default AlbumInfo;