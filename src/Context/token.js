import React from 'react'
import { setClientToken } from '../Pages/spotify';
import { useEffect, useState } from 'react'



export const tokenContext = React.createContext({});

const TokenContextProvider = (props) =>{
    
    const[token,setToken]=useState("")
    
    useEffect(() => {
        
          const token = window.localStorage.getItem("token");
          const hash = window.location.hash;
      
          window.location.hash = "";
      
          if (!token && hash) {
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);
            setToken(_token);
            setClientToken(_token);
          } else {
            setToken(token);
            setClientToken(token)
          
        };
      
    
      }, []);
  
return (
    <tokenContext.Provider value={token}>
      {props.children}
    </tokenContext.Provider>
  )
}

export default TokenContextProvider
