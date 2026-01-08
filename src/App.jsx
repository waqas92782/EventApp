import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Form  from './Components/Form';
import Tabledata from './Components/Tabledata';
import './App.css'; // styling ek hi file me
import Edit from './Components/Edit';

const App = () => {
  const [formData, setFormData] = useState(() => {
    // LocalStorage se initial data load
    const saved = localStorage.getItem("eventData");
    return saved ? JSON.parse(saved) : [];
  });

  // Form data save hone ke baad localStorage update
  useEffect(() => {
    localStorage.setItem("eventData", JSON.stringify(formData));
  }, [formData]);

  return (
    <BrowserRouter>
      <Home formData={formData} setFormData={setFormData} />
      <Routes>
        <Route path="/form" element={<Form formData={formData} setFormData={setFormData} />} />
        <Route path="/tabledata" element={<Tabledata formData={formData} />} />
        <Route path="/edit/:index" element={<Edit formData={formData} setFormData={setFormData} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
