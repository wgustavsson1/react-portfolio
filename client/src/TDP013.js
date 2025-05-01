import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './article.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function TDP013()
{
    return (
        <article>
        <header><h2 id = "name"><a href = "/">William Gustafsson.</a></h2></header>
        <h1>Webbprogramming And Interactivity</h1>
        <bold>TDP013 - Webbprogramming and interactivity</bold>
        <p>In this course a website would be developed. One of the very few restrictions was that the website had to be a social media website.<br></br><br></br>
        I chose to use Node.js with Express.js for my backend and Vue.js on my front end</p>
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/DNVpI8ska00" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </article>
    )
}

  export default TDP013