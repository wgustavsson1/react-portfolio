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
        <h1>Dynamiska Webbapplikationer</h1>
        <p>Detta var en kurs jag läste på Uppsala Universitet där slutprojektet gick ut på att skapa en 
            hemsida som på något sätt skulle handla om mat</p>
        <p>Allt skulle vara utvecklat med Vanilla Javascript, HTML 5 och CSS.</p>
        <p>I mitt projekt gjorde jag en hemsida för näringsdata där man kan använda naturligt språk till att söka upp näringsdata helt utan att använda några avancerade sök queries</p>
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/ksTNJzpSpCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </article>
    )
}

  export default Dynamic_webbapps