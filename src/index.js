import React from 'react';
import ReactDOM from 'react-dom/client';
import './new.css';
import NavBar from './nav';
import Head from './head';
import Border from './border.js';
import Card from './card.js';
import NewSection from './section.js';
import New from './sec';
import NewSec from './newone';
import Mobile from './mobile';
import Web from './web';
import Login from './login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <NavBar/>
       <Head/>
       <Border/>
       <Card/>
       <NewSection/>
       <New/>
       <NewSec/>
       <Mobile/>
       <Web/>
       <Login/>
  </React.StrictMode>
);

