import React from 'react'
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'
import APIKit from './spotify'
import { useState, useEffect } from 'react';
import apiClient from './spotify';




function SongCard({ album }){
 
 return (
  <div  className='flex flex-col justify-center items-center mb-[2%]  m-4 rounded-lg border-cyan-300 w-[70%] '>

   <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    
   
      </div>
 )
}



export default SongCard