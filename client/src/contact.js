import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './contact.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Contact() {
  
    return(
      <div>
       <header><h2><a href = "/" id="font-white">William Gustafsson.</a></h2></header>
      <ContactForm></ContactForm>
      <section id = "badges">
        <a href="https://github.com/wgustavsson1"><img src={require('./images/github.png')} class="badge"/></a>
        <a href="https://www.linkedin.com/in/wilhelm-gustavsson/"><img src={require('./images/linkedin.png')} class="badge"/></a>
      </section>
      </div>
      )
  }

  const FORM_ENDPOINT = "mailto:wilhelm.gustavsson899@gmail.com"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (

    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="GET"
      target="_blank" 
    >
      <label for ="subject">Subject</label>
      <div className="mb-3 pt-0">
        <input
          type="text"
          name="subject"
          placeholder = "Regarding.."
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <label for ="body">Message</label>
      <div className="mb-3 pt-0">
        <textarea
          name="body"
          placeholder = "Hello..
          Best Regards"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Send!
        </button>
      </div>
    </form>
  );
};


  export default Contact