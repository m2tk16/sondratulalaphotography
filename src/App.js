// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import NavBar from "./Navigation/navbar";
import Home from "./Home/home";
import About from "./About/about";
import Gallary from "./Gallary/gallary";
import Footer from "./Utilities/footer";


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
            <Route path='/gallary' element={<Gallary/>} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;