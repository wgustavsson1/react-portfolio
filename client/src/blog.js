import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './blog.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Prism  from "prismjs";
import HTMLReactParser from 'html-react-parser'
const loadLanguages = require('prismjs/components/');

const root = ReactDOM.createRoot(document.getElementById('root'));

function Blog()
{
    parse_blog_posts();
    //loadLanguages(['haml']);

    // The code snippet you want to highlight, as a string
    const code = "function hello_world(){console.log('hello world!'); hello_world!\n";

    // Returns a highlighted HTML string
    const html = Prism.highlight(code, Prism.languages.javascript, 'js');
    console.log(html)

        return (
        <div>
            <h2><a href = "/">Wilhelm Gustavsson.</a></h2>
            <div class="code">{HTMLReactParser (html) }</div>
        </div>
        )
}

function getXMLDocument(filepath) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET",filepath, false);
    xhttp.send();
    return xhttp.responseText
}
function parse_blog_posts()
{
    var image_sources = [];
    var xml = new DOMParser().parseFromString(getXMLDocument("blog_posts.xml"),"text/xml");
    var posts = xml.getElementsByTagName("post")

    for(var index = 0; index < posts.length; index++)
    {
        console.log(i)
        const title = posts[index].getElementsByTagName("title")[0].innerHTML
        const date = posts[index].getElementsByTagName("date")[0].innerHTML
        const author = posts[index].getElementsByTagName("author")[0].innerHTML
        const content = posts[index].getElementsByTagName("content")[0].innerHTML
        const images = posts[index].getElementsByTagName("image")

        for(var i = 0; i < images.length; i++)
        {
            image_sources.push(images[i].innerHTML)
        }
        
        console.log(title);
        console.log(author);
        console.log(date);
        console.log(images);
        console.log(image_sources);
        console.log(content);
    }
}

export default Blog