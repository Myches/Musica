import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback/lib'
import { useEffect, useRef} from 'react'




function Play({token,trackUris, currentTrackIndex, setCurrentTrackIndex,play,setPlay }){

  
 
  const playerRef = useRef(null)

  useEffect(() => {
    setPlay(true);
  }, [currentTrackIndex,trackUris ]);
  
  
 
  
  if(!token) return null

  const handleNextTrack = () => {
    if (currentTrackIndex < trackUris.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    } else {
      setCurrentTrackIndex(0);
    }
    setPlay(true);
  };
  
  const handlePreviousTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    } else {
      setCurrentTrackIndex(trackUris.length - 1);
    }
    setPlay(true);
  };

  


    return (
      <div className='text-white '> 
       <SpotifyPlayer
       
  token={token}
  uris={trackUris}
  play={play}
  initialVolume={0.5}
  styles={{
    activeColor: "#fff",
    bgColor: "#333",
    color: "#fff",
    loaderColor: "#fff",
    sliderColor: "cyan",
    trackArtistColor: "#ccc",
    trackNameColor: "#fff",
  }}
  magnifySliderOnHover
  showPlayButton
  shuffle={true}
  showNextButton={true}
  showPreviousButton={true}
  onNextClick={handleNextTrack}
  onPreviousClick={handlePreviousTrack}
  callback={(state) => {
    if (!state.isPlaying ) setPlay(false);
  }}
  getOAuthToken={() => token}
  offset={currentTrackIndex}
  initialDeviceId={null}
  autoPlay={true}
  persistDeviceSelection
  volume={1}
  name="Musica Spotify Player"
  syncExternalDevice
  getVolume
  syncPlayerInstance
  onReady={({ player }) => {
    playerRef.current = player;

  }}
/>

      
      </div>
    )};

export default Play
