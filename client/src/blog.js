import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './blog.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Prism  from "prismjs";
import ReactHtmlParser from "react-html-parser";
const loadLanguages = require('prismjs/components/');


const root = ReactDOM.createRoot(document.getElementById('root'));

function Blog()
{
//loadLanguages(['haml']);

// The code snippet you want to highlight, as a string
const code = "function hello_world(){console.log('hello world!'); hello_world!\n";

// Returns a highlighted HTML string
const html = Prism.highlight(code, Prism.languages.javascript, 'js');
console.log(html)

    return (
    <div>
        <h2><a href = "/">Wilhelm Gustavsson.</a></h2>
        <div class="code">{ ReactHtmlParser (html) }</div>
    </div>
    )
}
export default Blog