import React, {useEffect,useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Blog from './blog'
import Contact from './contact'
import Work from './work'
import Home from './index'
import Liftly from './liftly'
import Amcap from './amcap'
import Euronetics from './euronetics'
import TDDD23 from './TDDD23'
import TQPR10 from './TQPR10'
import TDP013 from './TDP013'
import TDP024 from './TDP024'
import dynamic_webbapps from './dynamic_webbapps'
import Dynamic_webbapps from './dynamic_webbapps'


function App() {

  const[backendData,setBackendData] = useState([{}])

  /*useEffect(() =>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
      setBackendData(data)
      }
    )
  },[])

  return(
    <div>

      {(typeof backendData.users === 'undefined')?(
        <p>Loading...</p>
      ):(
        backendData.users.map((user,i) =>(
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  )*/
  return (
  <Router>
    <Routes>
      <Route path = "/" element = {<Home/>} > </Route>
      <Route path = "/Blog" element = {<Blog/>}></Route>
      <Route path = "/contact" element = {<Contact/>} > </Route>
      <Route path = "/work" element = {<Work/>} > </Route>
      <Route path = "/liftly" element = {<Liftly/>} > </Route>
      <Route path = "/amcap" element = {<Amcap/>} > </Route>
      <Route path = "/euronetics" element = {<Euronetics/>} > </Route>
      <Route path = "/tddd23" element = {<TDDD23/>} > </Route>
      <Route path = "/tqpr10" element = {<TQPR10/>}></Route>
      <Route path = "/dynamic_webbapps" element = {<Dynamic_webbapps/>}></Route>
      <Route path = "/TDP013" element = {<TDP013/>}></Route>
      <Route path = "/TDP024" element = {<TDP024/>}></Route>
    </Routes>
    </Router>
  )

  // SEE: https://www.youtube.com/watch?v=EmUa_tcSM-k
}

export default App