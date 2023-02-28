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
        <header><h2 id = "name"><a href = "/">Wilhelm Gustavsson.</a></h2></header>
        <h1>Liftly</h1>
        <section class="article-head"></section>
        <p>Android App keeping track of fuel consumption with functionallity allowing app to automatically bill your friend for the ride. Developed in Java and includes a wide range of external integrations such as Facebook and Google Sign in, Maps integration,Messenger Integration, Fuel Station Integration etc..</p>
        <p><a href = "https://play.google.com/store/apps/details?id=com.wilhouse.apps.liftly">Download Liftly on Google Play</a></p>
        <img src={liftly_logo}></img>
        <img src={liftly_google_play} class="fitted-img"></img>
        </article>
    )
}

  export default Liftly