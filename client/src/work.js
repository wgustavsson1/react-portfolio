import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './work.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function WorkList()
{
    return (
        <ul>
            <li><div className='swapper-title'><a href = "/tddd23"><h1>TDDD23</h1><h2>Game made in C# using Unity Game Engine</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/liftly"><h1>Liftly</h1><h2>Android app made in Java</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/TQPR10"><h1>TQPR10</h1><h2>Examensarbete</h2></a></div></li>
        </ul>
    )
}

function Work()
{
    return (
    <div>
        <h2><a href = "/">Wilhelm Gustavsson.</a></h2>
        <WorkList></WorkList>
    </div>
    )
}
export default Work