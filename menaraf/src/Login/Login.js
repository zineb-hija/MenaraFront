import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import { getCurrentUser } from '../services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //const data = await login(username, password);
      const currentUser = getCurrentUser();
      console.log('Current User:', currentUser); // Add this line to see what is retrieved
      console.log('User ID:', currentUser?.id); // Safely access id to avoid potential undefined errors
      
      if (currentUser && currentUser.role) {
        switch (currentUser.role) {
          case 'RH':
            navigate('/rh');
            break;
          case 'ENCADRANT':
            navigate('/encadrant');
            break;
          case 'STAGIAIRE':
            navigate('/stagiaire');
            break;
          default:
            navigate('/dashboard');
        }
      }
    }catch (err) {
      console.error('Login error:', err); // Log des erreurs
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Sign In With Simple Login</h2>
      <p>Enter your username & password to login</p>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />
        </div>
        <div className="input-group">
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
        </div>
        <div className="options">
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember password</label>
          </div>
          <a href="/forgot-password">Forgot password?</a>
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
      <div className="social-signin">
        <p>Or Sign up with</p>
        <div className="social-icons">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
      <p>Don't have an account? <a href="/create-account">Create Account</a></p>
    </div>
  );
};

export default Login;
