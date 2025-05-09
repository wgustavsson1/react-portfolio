import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './article.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function TQPR10()
{
    return (
        <article>
        <header><h2 id = "name"><a href = "/">William Gustafsson</a></h2></header>
        <h1>Bachelor's Thesis</h1>
        <bold>Automation Integration Using IFTTT Webhooks</bold>
        <p>Det här examensarbetet undersöker den idag största tjänsten för Automation Integration IFTTT och hur den hur den kan underlätta sammankoppling av olika webbtjänster. Detta undersöks genom att utveckla en webapplikation som är beroende av en extern tjänst. Applikationerna implementeras dels genom att använda IFTTT som en mellanhand men också genom att utveckla en jämförelseimplementation som inte använder sig av IFTTT. Implementationerna undersöks och jämförs med avseende på prestanda och kodkomplexitet.</p>
        <p>Automation Integration är en process där man eftersträvar
automatisering utan att bygga några nya tjänster eller
bygger sina tjänster på ett sådant sätt att andra utvecklare
inte ska behöva skapa en liknande tjänst. Befintliga tjänster
kan integreras i nya applikationer utan att behöva uppfinna
hjulet på nytt. Utvecklare kan också integrera sina
applikationer till en plattform som fungerar som en
mellanhand mellan två olika applikationer. Detta låter
slutanvändare att på ett enkelt sätt bygga sin egna logiska
flöden för att lösa olika problem eller för att underlätta
vardagen.
För att underlätta automation integration finns det
webbtjänster som fungerar som förmedlare mellan två olika
webbtjänster. Den tjänst som kommer att undersökas i det
här arbetet är IFTTT(If This Then That).
IFTTT används framförallt av konsumenter men erbjuder
också en möjlighet för utvecklare att koppla samman sin
egna applikation med externa tjänster. Detta kan göras
dessutom nästan helt utan att skriva någon kod, istället så
konfigureras webhooks g</p>
        <iframe width="1120" height="630" src="https://www.youtube.com/embed/sV6rOI-E1f0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </article>
    )
}

  export default TQPR10