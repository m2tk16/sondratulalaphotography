// import React, { useState, useEffect } from "react";
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import NavBar from "./Navigation/navbar";
import Home from "./Home/home";
import About from "./About/about";
import Portfolio from "./Portfolio/portfolio";
import Contact from "./Contact/contact";
import Footer from "./Utilities/footer";
import Subscribe from "./Subscribe/subscribe";
import Unsubscribe from "./Unsubscribe/unsubscribe";


Amplify.configure(awsConfig);

function App() {
  // const [endpoint, setEndPoint] = useState({})

  /*
  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setEndPoint({
          url: "https://8n0kkaiqz4.execute-api.us-east-1.amazonaws.com/staging/",
          api: "LokisPlaygroundProductsAPI",
          ip: data.ip
        })
    })
  }, []);
  */  

  return (
    <div className="body">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/subscribe' element={<Subscribe/>} />
            <Route path='/unsubscribe' element={<Unsubscribe/>} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;