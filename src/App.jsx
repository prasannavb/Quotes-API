import Quote from "./Quote.jsx"
import QuoteBycategory from "./Quote_category.jsx"
import Home from "./Home.jsx"
import React from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
const  App=()=> 
{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/QG" element={<Quote />} />
      <Route path="/QGC" element={<QuoteBycategory />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
