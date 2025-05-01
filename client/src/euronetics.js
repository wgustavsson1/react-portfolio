import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './article.css';
import App from './App';
import liftly_logo from './images/liftly.png';
import liftly_google_play from './images/liftly2.png';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));


function Liftly()
{
    return (
        <article>
        <header><h2 id = "name"><a href = "/">William Gustafsson.</a></h2></header>
        <h1>Euronetics</h1>
        <section class="article-head"></section>
        
        <p>I worked as a Fullstack Software Developer using these techniques on a daily basis:
        <h4>Backend</h4>
        Python<br></br>
        Flask<br></br>
        MySQL<br></br>
        PostgreSQL<br></br>
        <h4>Front End</h4>
        React<br></br>
        Angular <br></br>
        Typescript<br></br>
        Javascript <br></br>
        CSS<br></br>
        Tailwind.css<br></br>
        Bootsrap<br></br>
        HTML 5<br></br>
        </p>
        </article>
    )
}

  export default Liftly