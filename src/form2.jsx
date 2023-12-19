// src/MyForm.js
import React, { useState } from 'react';
import './index.css';

const MyForm2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any form submission logic here
    console.log('Form submitted:', formData);
  };

    return (
        <div className="parent">
            {/* <img src="./Bismuth.png" alt="" /> */}
            <div className="my-form">
                <h2>Enter your password</h2>
      <form onSubmit={handleSubmit}>
        <label>
                        <input
                            placeholder='Email'
            type="email"
            name="email"
            value={formData.name}
            onChange={handleChange}
                        />
                        
                        <input
                            placeholder='Password'
            type="password"
            name="password"
            value={formData.name}
            onChange={handleChange}
          />
                    </label>
                <p>Forgot password?</p>
                    <button type="submit">Continue</button>
                    <p>Don't have an account? <a>Sign up</a> </p>
                </form>
                </div>
      </div>
    
  );
};

export default MyForm2;
