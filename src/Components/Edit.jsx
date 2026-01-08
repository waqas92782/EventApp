import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const Edit = ({ formData, setFormData }) => {
  const { index } = useParams(); // index from URL
  const navigate = useNavigate();

  const [input, setInput] = useState({
    guestNumber: '',
    guestName: '',
    dateTime: '',
    adults: '',
    children: '',
    slipNumber: ''
  });

  // Load existing data whenever index or formData changes
  useEffect(() => {
    const idx = parseInt(index, 10); // ensure it's a number

    if (!formData[idx]) {
      // If data at index doesn't exist (deleted or invalid), redirect to table
      alert("This entry does not exist or has been deleted.");
      navigate('/tabledata');
      return;
    }

    setInput(formData[idx]); // set the latest data
  }, [index, formData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(input).some(val => val === '')) {
      alert("Please fill all fields!");
      return;
    }

    const idx = parseInt(index, 10);
    const updatedData = [...formData];
    updatedData[idx] = input; // update the correct entry

    setFormData(updatedData); // update App state + localStorage
    navigate('/tabledata');
 setInput({ guestNumber: '', guestName: '', dateTime: '', adults: '', children: '', slipNumber: '' });

  };

  return (
    <div className="form-container">
      <h2>Edit Booking</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="guestNumber"
          placeholder="Guest Number"
          value={input.guestNumber}
          onChange={handleChange}
        />
        <input
          name="guestName"
          placeholder="Guest Name"
          value={input.guestName}
          onChange={handleChange}
        />
        <input
          type="datetime-local"
          name="dateTime"
          value={input.dateTime}
          onChange={handleChange}
        />
        <input
          name="adults"
          placeholder="Number of Adults"
          type="number"
          value={input.adults}
          onChange={handleChange}
        />
        <input
          name="children"
          placeholder="Number of Children"
          type="number"
          value={input.children}
          onChange={handleChange}
        />
        <input
          name="slipNumber"
          placeholder="Slip Number"
          value={input.slipNumber}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
