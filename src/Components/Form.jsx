import React, { useState } from 'react';
import '../App.css';

const Form = ({ formData, setFormData }) => {
  const [input, setInput] = useState({
    guestNumber: '',
    guestName: '',
    dateTime: '',
    adults: '',
    children: '',
    slipNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (Object.values(input).some(val => val === '')) {
      alert("Please fill all fields!");
      return;
    }
    setFormData([...formData, input]);
    setInput({ guestNumber: '', guestName: '', dateTime: '', adults: '', children: '', slipNumber: '' });
    
  }

  return (
    <div className="form-container">
      <h2>Add Booking</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="guestNumber" placeholder="Guest Number" value={input.guestNumber} onChange={handleChange} autoComplete="off" />
        <input type="text" name="guestName" placeholder="Guest Name" value={input.guestName} onChange={handleChange} autoComplete="off" />
        <input type="datetime-local" name="dateTime" value={input.dateTime} onChange={handleChange} autoComplete="off" />
        <input type="number" name="adults" placeholder="Number of Adults" value={input.adults} onChange={handleChange} autoComplete="off" />
        <input type="number" name="children" placeholder="Number of Children" value={input.children} onChange={handleChange} autoComplete="off" />
        <input type="text" name="slipNumber" placeholder="Slip Number" value={input.slipNumber} onChange={handleChange} autoComplete="off" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;
