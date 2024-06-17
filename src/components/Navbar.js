import React from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5'; // Import MD5 library for hashing

import '../styles/Navbar.css';

const Navbar = ({ username, email }) => {
  // Function to generate Gravatar URL
  const getGravatarUrl = (email) => {
    const base = 'https://www.gravatar.com/avatar/';
    const hash = md5(email.toLowerCase().trim()); // Hash the email
    const size = 200; // Set desired size of the avatar
    const defaultImage = 'mp'; // Default image if no Gravatar is found

    return `${base}${hash}?s=${size}&d=${defaultImage}`;
  };

  // Example data (replace with actual data)
  const profilePic = getGravatarUrl(email || ''); // Use email for Gravatar
  const displayName = username || 'Guest'; // Fallback if no username is provided

  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/add-product">Add Product</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div className="profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span>{displayName}</span>
      </div>
    </div>
  );
};

export default Navbar;
