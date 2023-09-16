import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News  from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=(props) => {
  
  // const [pageSize, setPageSize] = useState(5)
  const [progress, setProgress] = useState(0)
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_NEWS_API)

//  setProgress=(progress)=>{
//     setState({progress:progress})
//   }
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
      />
          <Routes>
            {/* <Route  path='/' element={<Navbar />}> */}
            <Route  path= '/' element ={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category="general" />}/>
            <Route  path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country="in" category="business" />}/>
            <Route  path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country="in" category="entertainment" />}/>
            <Route  path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category="general" />}/>
            <Route  path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country="in" category="health" />}/>
            <Route  path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country="in" category="science" />}/>
            <Route  path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country="in" category="sports" />}/>
            <Route  path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country="in" category="technology" />}/>
            {/* </Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    )
}

export default App;
