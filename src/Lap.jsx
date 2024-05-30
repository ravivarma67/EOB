import React, { useState } from 'react';
import './Lap.css';
import { Link } from 'react-router-dom';

function Lap() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    setShowPopup(true);
    setEmail('');
    setPassword('');
    setTimeout(() => setShowPopup(false), 5000);
    alert('Login Successfully');
  };

  const handleCancel = () => {
    setEmail('');
    setPassword('');
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (value.length === 0 || value[0] !== ' ') {
      setEmail(value);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    if (value === '' || value[0] !== ' ') {
      setPassword(value);
    }
  };

  return (
    <div>
      <div className="ravicontainer">
        <div className="heading">Login</div>
        <form className="form" onSubmit={handleLogin}>
          <input
            required
            className="input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail or User Id"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            required
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <span className="forgot-password">
            <Link to="/Forgot">Forgot Password?</Link>
          </span>
          <div className="button-container">
            <input
              className="login-button"
              type="submit"
              value="Login"
            />
            <button
              className="cancel-button"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default Lap;
