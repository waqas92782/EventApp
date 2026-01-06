import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Home = ({ formData, setFormData }) => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/form">Form</Link>
        <Link to="/tabledata">Saved Data</Link>
      </nav>
    </div>
  )
}

export default Home;
