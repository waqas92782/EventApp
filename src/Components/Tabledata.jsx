import React, { useState } from 'react';
import '../App.css';

const Tabledata = ({ formData }) => {
  const [search, setSearch] = useState('');

  // Filter data across all fields
  const filteredData = formData.filter(item => 
    Object.values(item).some(
      value => value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="table-container">
      <h2 style={{ color: '#ecf0f1', textAlign: 'center', marginBottom: '20px' }}>
        Saved Event Data
      </h2>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by any field..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredData.length === 0 ? (
        <p style={{ color: '#ecf0f1', textAlign: 'center' }}>No data available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th> {/* Roll / Serial Number */}
              <th>Date & Time</th>
              <th>Guest Name</th>
              <th>Adults</th>
              <th>Children</th>
              <th>Slip Number</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td data-label="#"> {index + 1} </td> {/* Serial Number */}
                <td data-label="Date & Time">{item.dateTime}</td>
                <td data-label="Guest Name">{item.guestName}</td>
                <td data-label="Adults">{item.adults}</td>
                <td data-label="Children">{item.children}</td>
                <td data-label="Slip Number">{item.slipNumber}</td>
                <td data-label="Contact">{item.guestNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Tabledata;
