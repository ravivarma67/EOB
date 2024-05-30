import React, { useState } from 'react';
import './Forgot.css';

function Forgot() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
      setTimeout(() => setPasswordError(''), 3000);
      return;
    }
   
    alert('Password reset successful');
    setPassword('');
    setConfirmPassword('');
    setPasswordError('');
    
  };

  return (
    <div>
      <div className="forgotcontainer">
        <div className="heading">Forgot Password</div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            required
            className="input"
            type="password"
            name="password"
            id="password"
            placeholder="New Password"
            value={password}
            onChange={handleChangePassword}
          />
          <input
            required
            className="input"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
          />
          {passwordError && <div className="error">{passwordError}</div>}
          <div className="button-container">
            <input
              className="reset-password-button"
              type="submit"
              value="Reset Password"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
