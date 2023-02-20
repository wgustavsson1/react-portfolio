import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './blog.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Prism  from "prismjs";
import HTMLReactParser from 'html-react-parser'
const loadLanguages = require('prismjs/components/');

const root = ReactDOM.createRoot(document.getElementById('root'));

class BlogPost extends React.Component
{
    constructor(params)
    {
        console.log(params)
        super(params)
        this.params = params
    }
    render()
    {
        var articles = []
        this.params.blog_posts.forEach((post,index) => {
            articles.push(
            <article>
                <h1>{post.title}</h1>
                <h2>{post.author}</h2>
                <h3>{post.date}</h3>
                <span>{HTMLReactParser(post.content)}</span>
            </article>
            )
        });
        return articles
    }
}


function Blog()
{
    var blog_posts = parse_blog_posts();
    console.log(blog_posts)
    //loadLanguages(['haml']);

    // The code snippet you want to highlight, as a string
    const code = "function hello_world(){console.log('hello world!'); hello_world!\n";

    // Returns a highlighted HTML string
    const html = Prism.highlight(code, Prism.languages.javascript, 'js');
    console.log(html)

        return (
        <>
            <h2><a href = "/">Wilhelm Gustavsson.</a></h2>
            <div class="code">{HTMLReactParser (html) }</div>
            <BlogPost blog_posts = {blog_posts}></BlogPost>
        </>
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
    var blog_posts = [];
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
        
        var new_post = new blog_post(title,author,date,image_sources,content)
        blog_posts.push(new_post)
    }
    console.log(blog_posts)
    return blog_posts
}

class blog_post
{
    constructor(title,author,date,image_sources,content)
    {
        this.title = title;
        this.author = author;
        this.date = date;
        this.image_sources = image_sources;
        this.content = content;
        this.codify();
    }
    codify()
    {
        var html = HTMLReactParser(this.content);
        console.log(html)
        html.forEach((element,index)=>{
            console.log(element)
            if(element.type == 'code')
            {
                const code_html_string = element.props.children;
                const codified_html_string = Prism.highlight(code_html_string, Prism.languages.javascript, 'js');
                const pre = this.content.split("<code>")[0]
                const post = this.content.split("</code>")[1]
                if(pre != undefined && post != undefined)
                {
                    this.content = pre + codified_html_string + post
                }
                else if(pre!=undefined && post == undefined)
                {
                    this.content = pre + codified_html_string;
                }
                else if(pre == undefined && post != undefined)
                {
                    this.content = codified_html_string + post
                }
                else
                {
                    this.content = codified_html_string;
                }
            }
        })
    }
}

export default Blog