import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom'
import Contact from './contact.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

class SwapperTitle extends React.Component
{
    constructor(params)
    {
        console.log(params)
        super(params)
        this.params = params
        this.state = {selected:false}
    }

    mouseOver = (e) => 
    {
        
        console.log("Mouse over!")
        this.setState({selected:!this.state.selected})
    }
    mouseOut = (e) => 
    {
        console.log("Mouse out!")
        this.setState({selected:!this.state.selected})
    }


    render()
    {
        console.log(this.params)
        return <h1 onMouseOver = {this.mouseOver} onMouseOut = {this.mouseOut}>{this.state.selected?this.params.text_selected: this.params.text_normal}</h1>
    }
}

class SwapperTitleMobile extends React.Component
{
    constructor(params)
    {
        console.log(params)
        super(params)
        this.params = params
        this.state = {selected:false}
    }


    handleClick = (e) => 
    {
        
        //If already selected then make redirect
        if(this.state.selected)
        {
            window.location.href =  this.params.url;
            console.log("URL: " + this.params.url)
        }
        //Toggle state
        this.setState({selected:!this.state.selected})
        //Wait 2000 milliseconds and then return back state
        let i = setInterval(()=>{
            this.setState({selected:!this.state.selected})
            clearInterval(i);
        },2000);
    }

    render()
    {
        console.log(this.params)
        return <h1 onClick={this.handleClick}>{this.state.selected?this.params.text_selected: this.params.text_normal}</h1>
    }

}    


function MainMenu()
{
    //Return two menues (one for desktop and one for mobile)
    return(
        <div id="main-menu">
        <div id='main-menu-desktop' class='main-menu'>
        <a href = "/Blog"><div className='swapper-title font-white'><SwapperTitle text_selected="Blogg" text_normal = "Hej &"/>  </div></a>
        <a href = "/Work"><div className='swapper-title font-green'><SwapperTitle text_selected="Jobb" text_normal = "Välkommen :)"/></div></a>
        <a href = "/Contact"><div className='swapper-title font-green'><SwapperTitle text_selected="Kontakta mig" text_normal = "Jag är William Gustafsson"/></div></a>
        </div>
        <div id='main-menu-mobile' class='main-menu'>
        <div className='font-white'><SwapperTitleMobile text_selected="Blogg" text_normal = "Hej &" url="/Blog"/></div>
        <div className='font-green'><SwapperTitleMobile  text_selected="Jobb" text_normal = "Välkommen :)" url="/Work" /></div>
        <div className='font-green'><SwapperTitleMobile text_selected="Kontakt" text_normal = "Jag är William Gustafsson" url="/Contact"/></div>
        </div>
        <section id = "badges">
            <a href="https://github.com/wgustavsson1"><img src={require('./images/github.png')} class="badge"/></a>
            <a href="https://www.linkedin.com/in/wilhelm-gustavsson/"><img src={require('./images/linkedin.png')} class="badge"/></a>
        </section>
        
        </div>
    )
}

function Home()
{
   return <MainMenu/>
}


export default Home

//const swapper_a = ReactDOM.createRoot(document.getElementById('SwapperTitle_a'));
//const swapper_b = ReactDOM.createRoot(document.getElementById('SwapperTitle_b'));
//const swapper_c = ReactDOM.createRoot(document.getElementById('SwapperTitle_c'));
//swapper_a.render(<SwapperTitle text_selected="Home" text_normal = "Hello."/>)
//swapper_b.render(<SwapperTitle text_selected="Work" text_normal = "I am"/>)
//swapper_c.render(<SwapperTitle text_selected="Contact" text_normal = "William Gustafsson"/>)