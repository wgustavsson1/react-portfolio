import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './work.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


function WorkIcon()
{
    return (<><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-1" width="48" height="48">
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
      </>)
}

function WorkList()
{
    return (
        <>
        <section style={{visibility: 'hidden'}} className='header-warning'>Here are some projects I have worked on. Unfourtunately many university projects are gone since my uni Gitlab was closed :( List is under construction!</section>
        <ul id="work-list">
            <li><div className='swapper-title'><a href = "/amcap"><h1><WorkIcon></WorkIcon> AMCAP, Stockholm</h1><i><small><h2>2023-Present</h2></small></i><h2>Senior Fullstack Tech Lead</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/euronetics"><h1><WorkIcon></WorkIcon> Euronetics Holding, Linköping</h1><i><small><h2>2023-2023</h2></small></i><h2>Fullstack software Developer</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/liftly"><h1>Lifty</h1><i><small><h2>2020-2022</h2></small></i><h2>Android app made in Java</h2></a></div></li>
            <li><div style={{visibility: 'hidden'}}  className='swapper-title'><a href = "/dynamic_webbapps"><h1>UU-76007</h1><h2>Dynamic Webapps</h2></a></div></li>
            <li><div style={{visibility: 'hidden'}} className='swapper-title'><a href = "/TQPR10"><h1>TQPR10</h1><h2>Bachelor's Thesis</h2></a></div></li>
            <li><div style={{visibility: 'hidden'}} className='swapper-title'><a href = "/tddd23"><h1>TDDD23</h1><h2>Design And Programming Of Computer Games</h2></a></div></li>
            <li><div style={{visibility: 'hidden'}} className='swapper-title'><a href = "/TDP024"><h1>TDP024</h1><h2>Enterprise Systems</h2></a></div></li>
            <li><div style={{visibility: 'hidden'}} className='swapper-title'><a href = "/TDP013"><h1>TDP013</h1><h2>Webbprogramming and interactivity</h2></a></div></li>
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
            <a href="https://github.com/wgustavsson1"><img src={require('./images/github.png')} class="badge"/></a>
            <a href="https://www.linkedin.com/in/wilhelm-gustavsson/"><img src={require('./images/linkedin.png')} class="badge"/></a>
        </section>
    </div>
    )
}
export default Work