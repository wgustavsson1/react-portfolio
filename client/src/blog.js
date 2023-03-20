import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './blog.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Prism  from "prismjs";
import Normalizer from 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import HTMLReactParser from 'html-react-parser';
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
                <section class = "article-head">
                <h4>Written by: {post.author}</h4>
                <h5>Published: {post.date}</h5>
                </section>
                <section>{HTMLReactParser(post.content)}</section>
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

        return (
        <>

            <section className='header-warning'>This blog is under construction!</section>
            <header><h2><a href = "/">Wilhelm Gustavsson.</a></h2></header>
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
    var xml = new DOMParser().parseFromString(getXMLDocument("blog_posts.xml"),"text/xml");
    var posts = xml.getElementsByTagName("post")

    for(var index = 0; index < posts.length; index++)
    {
        const title = posts[index].getElementsByTagName("title")[0].innerHTML
        const date = posts[index].getElementsByTagName("date")[0].innerHTML
        const author = posts[index].getElementsByTagName("author")[0].innerHTML
        const content = posts[index].getElementsByTagName("content")[0].innerHTML

        var new_post = new blog_post(title,author,date,content)
        blog_posts.push(new_post)
    }
    console.log(blog_posts)
    return blog_posts
}

class blog_post
{
    constructor(title,author,date,content)
    {
        this.title = title;
        this.author = author;
        this.date = date;
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
                // Create a new Normalizer object
                
                // ..or use the default object from Prism
                var nw = new Normalizer({
                    'remove-trailing': true,
                    'remove-indent': true,
                    'left-trim': true,
                    'right-trim': true,
                    'break-lines': 5,
                    'indent': 2,
                    'remove-initial-line-feed': false,
                    'tabs-to-spaces': 4,
                    'spaces-to-tabs': 4
                });

                let code_html_string = element.props.children;
                const original_code_string = element.props.children;
                code_html_string = nw.normalize(code_html_string, {
                    // Extra settings
                    indent: 1
                });

                //TODO: Parse language from XML not hardcoded
                const codified_html_string = Prism.highlight(code_html_string, Prism.languages.javascript, 'js');
                console.log(codified_html_string + " codified")
                //Find current code block in this.content and replace it with the codified html string
                this.content = this.content.replace(original_code_string,codified_html_string);
            }
        })
    }
}

export default Blog