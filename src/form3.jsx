// src/MyForm.js
import React, { useState } from 'react';
import './index.css';

const MyForm3 = () => {
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
                <h2>Welcome back</h2>
      <form onSubmit={handleSubmit}>
        <label>
                        <input
                            placeholder='Email'
            type="email"
            name="email"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
       
        <button type="submit">Continue</button>
                </form>
                <p>Already have an account? <a>Log in</a>  </p>
                <button>Continue with Github</button> <br />
                <br />
                <button>Continue with Google</button>


    </div>
      </div>
    
  );
};

export default MyForm3;
