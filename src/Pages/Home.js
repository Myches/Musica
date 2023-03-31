import React from 'react'
import Library from './Library'
import Album from './Album'
import {Route,Routes} from 'react-router-dom'
import Sidebar from './Sidebar'
import {useState} from 'react'
import Login from './Login'
import Discover from './Discover'
import Player from './Player'
import Play from './Play'
import AlbumPlayer from './AlbumPlayer'
import { useContext } from 'react'
import { tokenContext } from '../Context/token'


function Home(){
  
  const [uris, setUris] = useState([]);
  const[trackUris,setTrackUris]=useState([])
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [play,setPlay]=useState(false)
const token = useContext(tokenContext)




const handlePlay = uri => {
  const index = uris.indexOf(uri);
  setTrackUris([...uris]);
  setCurrentTrackIndex(index);
  
};

//...

 



      return   !token ?(
       
        <Login />):(
          <div className="flex jusify-center items-center w-[100%] h-[100vh] overflow-hidden   bg-black  ">
       
          <Sidebar />
      
      
         
         
               
       <div className='mb-12 '>
         <Routes >
         <Route  path ="/" element={<Discover handlePlay={handlePlay}  getUris={setUris} uris={uris} />} />
         <Route path ="/Album" element={<Album  />} />
         <Route path ="/Library" element={<Library />} />
         <Route path ="/Player" element={<Player handlePlay={handlePlay} getUris={setUris} uris={uris} />} />
         <Route path ="/AlbumPlayer" element={<AlbumPlayer  handlePlay={handlePlay} getUris={setUris} uris={uris} />} />
       </Routes>
       
       </div>
       <div className='fixed bottom-[0px] w-[100%]  border rounded 3xl bg-black  '>
       <Play token={token} trackUris={trackUris} currentTrackIndex={currentTrackIndex} setCurrentTrackIndex={setCurrentTrackIndex} play={play} setPlay={setPlay}/>
       </div>
       </div>
   
       )
          }
       










export default Home