import React from 'react'
import   apiClient  from './spotify'
import { useState, useEffect } from 'react';
import   AwesomeSlider  from 'react-awesome-slider'
import   withAutoplay from 'react-awesome-slider/dist/autoplay'
import   'slick-carousel/slick/slick.css'  
import   'slick-carousel/slick/slick-theme.css'  
import  'react-awesome-slider/dist/styles.css'  
import  'react-awesome-slider/dist/custom-animations/cube-animation.css'  
import {BsPerson} from 'react-icons/bs'
import APIKit from './spotify'
import {AiFillPlayCircle} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import { useNavigate } from 'react-router-dom'
import   Slider from 'react-slick'









function Discover({handlePlay,getUris,handleTrackClick}) {

    
    
    
   

 const[playlists,setPlaylists]=useState(null)
const[releases,setReleases]=useState([])
const[albums,setAlbums]=useState([])
const[tracks,setTracks]=useState([])







//api call for new releases

    useEffect (()=>{
        apiClient.get("browse/new-releases" )
        .then(response=>{
        setReleases(response.data.albums.items)
        
        })
        },[])

//api call for albums
        useEffect (()=>{
            apiClient.get("me/albums" )
            .then(response=>{
            setAlbums(response.data.items)
            })
            },[])



    //api call for tracks            
          useEffect (()=>{
                apiClient.get("me/tracks ")
                .then(response=>{
                setTracks(response.data.items)
                const uris = response.data.items.map((item) => item.track.uri);
                getUris(uris);
              
                })
                },[])

        //api call for playlists        
                useEffect (()=>{
                    APIKit.get('me/playlists').then(function(response){
                    setPlaylists(response.data.items)
                   
                    })
                    },[])
                
                    var navigate = useNavigate()
                    const playPlaylist =(id) =>{
                  navigate ('/Player', {state:{id:id}})
                    }

                    var navigate = useNavigate()
                    const playAlbum =(id) =>{
                  navigate ('/AlbumPlayer', {state:{id:id}})
                    }
                    
                  

                    const AutoplaySlider=withAutoplay(AwesomeSlider)

                    var settings ={
                        dots:true,
                        infinite:true,
                        slidesToShow:4,
                        slidesToScroll:6,
                        Speed:500,
                       
                        responsive : [
                            {breakpoint :1024,
                                settings :{
                                    slidesToShow:4,
                                    slidesToScroll:4,
                                    infinite:true,
                                    dots:true,


                                }

                            },
                            { breakpoint :600,
                                settings :{
                                    slidesToShow:2,
                                    slidesToScroll:2,
                                    infinite:true,
                                    dots:true,


                                }

                            },
                            {breakpoint :480,
                                settings :{
                                    slidesToShow:1,
                                    slidesToScroll:1,
                                    infinite:true,
                                    dots:true,


                                }

                            },
                        ]
                       
                       } 

                      

    return(
<div className='bg-black h-[95vh] my-[5px] mr-[5px]  w-[85vw]  flex-col mt-4 mb-6 overflow-auto  sm:text-8  '>
<div className='sm:flex  sm:flex-col md:flex-col lg:flex-row  p-8 sm:mb-8'>
<div className='lg:w-[55%]  sm:w-auto mb-24 '> 
   <h1 className=' text-30 text-bold text-cyan-300   p-2 flex justify-center items-center '>NEW RELEASES </h1>
   <div className="border rounded-3xl  p-2 ">
   <AutoplaySlider play={true} interval={3000} animation="cubeAnimation">
   {releases?.map((release,index) =>
   <div key={index} className=" border rounded-sm  w-[100%] h-[100%] ">
    <img  src={release.images[0].url }/>
    </div>
   )}
   </AutoplaySlider>
 
   </div>
</div>

   <div className='lg:w-[45%] lg:pl-24 h-[350px] overflow-auto '>
<h1 className=' text-12 text-cyan-300   p-2 flex justify-center items-center   '>TOP SONGS</h1>


<div className='flex flex-col '  >

{tracks?.map((data,index) => <div className= 'flex justify-between lg:hover:bg-cyan-400  lg:hover:border lg:rounded-lg'  onClick={()=>{handlePlay(data?.track?.uri);handleTrackClick(index)}} >
<div className=" flex cursor-pointer">
   <div key={index} >
    <img  src={data?.track?.album?.images[0].url} className="w-[45px] h-[45px] m-[13px] border rounded-lg  "/> 
</div>
<div className='flex flex-col pl-4'>
    <p className=' pt-4 text-gray-300'>{data.track.name}</p>
    <p className='text-cyan-300  text-[15px]  flex items-center'><p className='text-cyan-300 pr-2'><BsPerson  /></p>
    {data.track.artists[0].name}</p>
    </div>
   
    
    </div>
 
    
    
    </div>
   
   )}  </div>

</div>

</div>


<div className='mt-16'>
<h1 className='  text-12 text-cyan-300  flex justify-center items-center'>PLAYLISTS</h1>

<div className='mx-[50px] border rounded-sm  border-none ' >

<Slider {...settings}>
{playlists?.map((playlist) => 
    
    <div className='border rounded-lg p-4 hover:scale-110 transition ease-in-out  cursor-pointer border-none relative' key={playlist.id} onClick={()=>playPlaylist(playlist.id)}>

     <img  src={playlist?.images[0]?.url} className="border rounded-sm border-8 "/> 
    <p className='text-white text-[16px] pl-2 font-mono'>  {playlist.name}</p> 
    <p className='text-white text-[14px] pl-2 font-mono'>  {playlist.tracks.total} Songs</p>
  
    
    <button className=' absolute top-[30%] left-[40%] '>
    
    <IconContext.Provider value={{size:'40px' , color:'cyan',}}>
    < AiFillPlayCircle />
    </IconContext.Provider>
    </button>
    </div>
    )}</Slider>
</div></div>

<div className='mt-16'>
<h1 className='   text-12 text-cyan-300  flex justify-center items-center '> ALBUMS</h1>

<div className='  mx-[50px] border rounded-sm  border-none ' >
    <Slider {...settings}>
{albums?.map((album) => 
    
    <div className='border rounded-lg p-4 hover:scale-110 transition ease-in-out  cursor-pointer border-none relative' key={album.album.id} onClick={()=>playAlbum(album.album.id)}>

     <img  src={album?.album?.images[0].url } className="border rounded-sm border-8 "/> 
    <p className='text-white text-[16px] pl-2 font-mono'>  {album?.album?.name}</p> 
    <p className='text-white text-[14px] pl-2 font-mono'>  {album?.album?.artists[0]?.name}</p>
  
    
    <button className=' absolute top-[30%] left-[40%] '>
    
    <IconContext.Provider value={{size:'40px' , color:'cyan',}}>
    < AiFillPlayCircle />
    </IconContext.Provider>
    </button>
    </div>
    )}</Slider>
</div></div>

</div>

    )
}

export default Discover