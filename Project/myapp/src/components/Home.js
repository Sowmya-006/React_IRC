import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faSignature } from '@fortawesome/free-solid-svg-icons';
import '../Assests/css/home.css'

const Home=()=> {
          const [name, setName] = useState('');
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [repeatPassword, setRepeatPassword] = useState('');
        

          const handleNameChange = (e) => {
            setName(e.target.value);
          };

          const handleEmailChange = (e) => {
            setEmail(e.target.value);
          };

          const handlePasswordChange = (e) => {
            setPassword(e.target.value);
          };

          const handleRepeatPasswordChange = (e) => {
            setRepeatPassword(e.target.value);
          };

          const handleSubmit = (e) => {
            e.preventDefault();
            if (!name || name.length < 2) {
              window.alert('Name must be at least 2 characters');
              return;
            }
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
              window.alert('Invalid email format');
              return;
            }  
            if (password.length < 8) {
              window.alert('Password must be at least 8 characters.');
              return;
            }
            if (password !== repeatPassword) {
              window.alert('Passwords do not match');
              return;
            }
           };
 
    return (
        <>
          <div>
            <body>
              <div className="container">
                <nav className="nav">
                  <ul>
                    <li>
                      <Link to="/" className="logo">
                        <img src="https://cdn1.iconfinder.com/data/icons/hotel-receptionist-housekeeper-services/282/hotel-services-005-1024.png" alt="Logo" />
                        <span className="nav-item">BOOK FOR STAY</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/bookings">
                        <i className="fas fa-menorah"></i>
                        <span className="nav-item">Bookings</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/messages">
                        <i className="fas fa-comment"></i>
                        <span className="nav-item">Message</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/report">
                        <i className="fas fa-database"></i>
                        <span className="nav-item">Report</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/logout" className="logout">
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="nav-item">Log out</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
    
                <ul className="navbar">
                  <li><b><Link to="/Login">Home</Link></b></li>
                  <li><b><Link to="/Login">Login</Link></b></li>
                  <li><b><Link to="/Login">Register</Link></b></li>
                  <li><b><Link to="/Login">Services</Link></b></li>
                  <li><b><Link to="/Login">Contact</Link></b></li>
                </ul>
              </div>
            </body>
          </div>
        </>
      );
 }
    
    export default Home;