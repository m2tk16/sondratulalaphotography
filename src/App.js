// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";


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
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;