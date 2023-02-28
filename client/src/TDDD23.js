import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './article.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function TDDD23()
{
    return (
        <article>
        <header><h2 id = "name"><a href = "/">Wilhelm Gustavsson.</a></h2></header>
        <h1>TDDD23</h1>
        <p>TDDD23 - Design And Programming Of Computer Games is a course on Linköpings University. In this course I developed a mobile game in Unity Game Engine using C#. The game mission is to catch dollar bills falling from the crashing airplane using your pickup truck while avoiding getting hit by debris.</p>
        <p>Unfourtunately the source code of this game is lost since my university gitlab account was closed without any notice</p>
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/lI2jDhHtuVc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </article>
    )
}

  export default TDDD23