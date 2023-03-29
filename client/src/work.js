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
        <section className='header-warning'>Here are some projects I have worked on. Unfourtunately many university projects are gone since my uni Gitlab was closed :( List is under construction!</section>
        <ul id="work-list">
            <li><div className='swapper-title'><a href = "/liftly"><h1>Liftly</h1><h2>Android app made in Java</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/dynamic_webbapps"><h1>UU-76007</h1><h2>Dynamic Webapps</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/TQPR10"><h1>TQPR10</h1><h2>Bachelor's Thesis</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/tddd23"><h1>TDDD23</h1><h2>Design And Programming Of Computer Games</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/TDP024"><h1>TDP024</h1><h2>Enterprise Systems</h2></a></div></li>
            <li><div className='swapper-title'><a href = "/TDP013"><h1>TDP013</h1><h2>Webbprogramming and interactivity</h2></a></div></li>
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