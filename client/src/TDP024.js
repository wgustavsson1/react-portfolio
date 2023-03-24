import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './article.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function TDP024()
{
    return (
        <article>
        <header><h2 id = "name"><a href = "/">Wilhelm Gustavsson.</a></h2></header>
        <h1>Enterprise Systems</h1>
        <p><bold>TDP024- Enterprise Systems (Git,Maven & SOA)</bold></p>
        <p>This course persists of three laborations:</p>
        <ol>
            <li>Git</li>
            <li>Maven</li>
            <li>SOA Service</li>
        </ol>
        <p>Unfortunately I don't have neither the code or the video demo from the third lab(SOA) left since my school Gitlab account was deleted</p>
        <h2>Git</h2>
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/ZgIR1rHz4Vo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2>Maven</h2>
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/wC95RNbiyPY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </article>
    )
}

  export default TDP024