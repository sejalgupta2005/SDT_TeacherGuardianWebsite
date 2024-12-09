import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');

  const sendOTP = () => {
    if (!email) {
      toast.error('Email is required!');
      return;
    }
    // Mock API call for OTP
    toast.success('OTP sent successfully to your email!');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={sendOTP}>Send OTP</button>
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Login;
