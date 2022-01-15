import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import Hero from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Projects />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
