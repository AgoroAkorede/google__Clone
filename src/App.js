import React from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component'
import SearchPage from './pages/searchpage/searchpage.pages' 

import VoiceSearchPage from './pages/voice-search page/voice-search page.component'

const App=()=> {
  return (
        <div>
            <Routes>
              <Route path='/' element={ <Homepage /> } />
        <Route path='/search' element={ <SearchPage /> } />
        <Route path='/voice-search' element={ <VoiceSearchPage /> }/>
            </Routes>
          {/* <SearchPage /> */}
        </div>
     
  )
}

export default App;
