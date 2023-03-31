import React from 'react'
import './App.css';
import Home from './Pages/Home'
import   'slick-carousel/slick/slick.css'  
import   'slick-carousel/slick/slick-theme.css'  
import {HashRouter} from 'react-router-dom'
import TokenContextProvider from './Context/token';
import SongContextProvider from './Context/TrackUrl';




function App() {
  

return (
  <SongContextProvider>
  <TokenContextProvider>
  <HashRouter>
  <Home />
  
  </HashRouter>
  </TokenContextProvider>
  </SongContextProvider>
)
    
}

export default App
