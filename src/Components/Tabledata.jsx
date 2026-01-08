import React, { useState, useEffect } from 'react';
import { Trash, Pencil } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Tabledata = () => {
  const [formData, setFormData] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Load data from localStorage on mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('eventData')) || [];
    setFormData(storedData);
  }, []);

  // Delete a row and update localStorage immediately
  const deleteData = (index) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    setFormData(updatedData);
    localStorage.setItem('eventData', JSON.stringify(updatedData)); // update storage
    window.location.reload();
  };

  // Filter based on search
  const filteredData = formData.filter(item =>
    Object.values(item).some(value =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="table-container">
      <h2>Saved Event Data</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by any field..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredData.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Date & Time</th>
              <th>Guest Name</th>
              <th>Adults</th>
              <th>Children</th>
              <th>Slip Number</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.dateTime}</td>
                <td>{item.guestName}</td>
                <td>{item.adults}</td>
                <td>{item.children}</td>
                <td>{item.slipNumber}</td>
                <td>{item.guestNumber}</td>
                <td>
                  <button onClick={() => navigate(`/edit/${index}`)}>
                    <Pencil />
                  </button>
                  <button onClick={() => deleteData(index)}>
                    <Trash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Tabledata;
