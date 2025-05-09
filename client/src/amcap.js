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
        <header><h2 id = "name"><a href = "/">William Gustafsson</a></h2></header>
        <h1>AMCAP</h1>
        <section class="article-head"></section>
        
        <p>Senior Fullstack Lead Developer at AMCAP</p>

        </article>
    )
}

  export default Liftly