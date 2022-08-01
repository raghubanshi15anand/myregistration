import React, { useState } from 'react';
import './App.css';
import Form from "./Form"
import Product from "./components/Product"
import './components/Product.css'

import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";



function App() {
	const [submitted, setSubmitted] = useState(false);


return (
    <>
	{submitted ?
	 <Router>
      <div>
        <Routes>
		<Route path='/' element={<Product/>} />
        </Routes>
      </div>
    </Router>
	: null }
	<div className="App">
	{!submitted ? 
	<Form  submitted = {submitted} setSubmitted= {setSubmitted} />
	: null }
	</div>
	</>
);
}

export default App;
