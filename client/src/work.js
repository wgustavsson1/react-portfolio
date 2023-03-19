import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './work.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function WorkList()
{
    return (
        <>
        <section className='header-warning'>Here are some examples of projects I have worked on! (list is still under construction)</section>
        <ul>
            <li><div className='swapper-title'><a href = "/tddd23"><h1>TDDD23</h1><h2>Game made in C# using Unity Game Engine</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/liftly"><h1>Liftly</h1><h2>Android app made in Java</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/TQPR10"><h1>TQPR10</h1><h2>Examensarbete</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/dynamic_webbapps"><h1>UU-76007</h1><h2>Dynamiska Webbapplikationer</h2></a></div></li>
        </ul>
        </>
    )
}

function Work()
{
    return (
    <div>
        <header><h2><a href = "/" id="font-white">Wilhelm Gustavsson.</a></h2></header>
        <WorkList></WorkList>
        <section id = "badges">

            <a href="https://github.com/wgustavsson1"><img src ="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" class="badge"/></a>
            <a href="https://www.linkedin.com/in/wilhelm-gustavsson/"><img src ="https://cdn-icons-png.flaticon.com/512/174/174857.png" class="badge"/></a>
        </section>
    </div>
    )
}
export default Work