import React from 'react'
import { useEffect, useState } from 'react'
import apiClient from '../Pages/spotify';



export const trackUrlContext = React.createContext({});



const TrackUrlContextProvider = (props) =>{
    const[mappedTrack,setMappedTrack]=useState([])

    useEffect (()=>{
        apiClient.get("me/tracks ")
        .then(response=>{
               const items = response.data.items; 
               items.map((item) => {
                const mT = item.track;
                setMappedTrack(mT)
                
        }) })
        },[])


    return (
        <trackUrlContext.Provider value={mappedTrack}>
    {props.children}  </trackUrlContext.Provider>
    )
    }
    
    
    
    export default TrackUrlContextProvider
    
    

