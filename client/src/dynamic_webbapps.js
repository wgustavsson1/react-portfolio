import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './article.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Dynamic_webbapps()
{
    return (
        <article>
        <header><h2 id = "name"><a href = "/">Wilhelm Gustavsson.</a></h2></header>
        <h1>Dynamic Webapps</h1>
        <em>UU-76007 - Dynamic Webapps</em>
        <p>I took this course on Uppsala University. In this course you would make a website that in some way was about food<br></br><br></br>
        The requrements was as follows: Only Vanilla Javascript, HTML 5 och CSS.<br></br><br></br>
        In my project i made a website about food nutrition where you could use Natural Language to search food nutrion data totaly without using search queries</p>
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/ksTNJzpSpCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </article>
    )
}

  export default Dynamic_webbapps