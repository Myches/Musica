import React from 'react'
import AlbumImage from './AlbumImage'
import AlbumInfo from './AlbumInfo'
import APIKit from './spotify'
import { useState, useEffect } from 'react';
import apiClient from './spotify';
import MyAlbImg from './MyAlbImg'
import MyAlbInfo from './MyAlbInfo'



function AlbumSongcard({ albumHeader }){
   

   

 return (


  <div  className='flex flex-col justify-center items-center mb-[5%]  m-4 sm:p-4 rounded-lg border-cyan-300 w-[70%]  mt-16'>
       
  {albumHeader && (
          <img src={albumHeader.images[0].url} alt="Album cover" className='m-8 lg:w-[50%] lg:h-50  border rounded-sm border-8 border-cyan-300  p-4 '/>
        )}

       
   
        <div className='flex flex-col justify-center items-center text-bold text-gray-400'>
<p className=' display:inline  '>{ albumHeader?.name}</p>
<p >{albumHeader?.artists[0]?.name}</p>
<p >Release Date : {albumHeader?.release_date}</p>

   </div>
    
   
      </div>
 )
}



export default AlbumSongcard