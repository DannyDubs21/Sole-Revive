import React, { useState } from 'react';
import './sell.css'; // Import the CSS file for Sell component

function Sell() {
  const [shoe, setShoe] = useState('');
  const [size, setSize] = useState('');
  const [offer, setOffer] = useState('');
  const [image, setImage] = useState(null);
  const [condition, setCondition] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleShoeChange = (event) => {
    setShoe(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleOfferChange = (event) => {
    setOffer(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleConditionChange = (event) => {
    setCondition(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data (e.g., submit to server)
    console.log('Submitted shoe:', shoe);
    console.log('Submitted size:', size);
    console.log('Submitted offer:', offer);
    console.log('Submitted image:', image);
    console.log('Submitted condition:', condition);
    console.log('Submitted gender:', gender);
    console.log('Submitted email:', email);
    console.log('Submitted phone:', phone);
  };

  return (
    <div className="sell-container">
      <h1 className="sell-heading">Sell Your Worn-Out Shoes</h1>
      <form onSubmit={handleSubmit} className="sell-form">
        <label>
          Shoe:
          <input type="text" value={shoe} onChange={handleShoeChange} />
        </label>
        <br />
        <label>
          Size (US):
          <input type="text" value={size} onChange={handleSizeChange} />
        </label>
        <br />
        <label>
          Offer Price:
          <input type="text" value={offer} onChange={handleOfferChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" onChange={handleImageChange} />
        </label>
        <br />
        <label>
          Condition:
          <select value={condition} onChange={handleConditionChange}>
            <option value="">Select condition</option>
            <option value="New">New</option>
            <option value="Used - Excellent">Used - Excellent</option>
            <option value="Used - Good">Used - Good</option>
            <option value="Used - Fair">Used - Fair</option>
          </select>
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={handleGenderChange}>
            <option value="">Select gender</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
          </select>
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={handlePhoneChange} />
        </label>
        <br />
        <button type="submit" className="sell-button">
          Sell
        </button>
      </form>
    </div>
  );
}

export default Sell;