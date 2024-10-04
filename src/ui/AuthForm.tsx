import React, { useState } from 'react';
import '../assets/css/AuthForm.css';

import Logo from "../assets/img/logo.png";

const AuthForm: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`wrapper ${isActive ? 'active' : ''}`}>
      <span className="bg-animate"></span>
      <span className="bg-animate2"></span>

      {/* Login Form */}
      <div>
        <div className="form-box login">
          <img src={Logo} alt="logo" className='Logo' />
          <h2 className="animation" style={{ '--i': 0, '--j': 21 } as React.CSSProperties}>Login</h2>
          <form action="#">
            <div className="input-box animation" style={{ '--i': 1, '--j': 22 } as React.CSSProperties}>
              <input type="text" id="Username_log" required />
              <label>Username</label>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
              </i>
            </div>
            <div className="input-box animation" style={{ '--i': 2, '--j': 23 } as React.CSSProperties}>
              <input type="password" id="password" required />
              <label>Password</label>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </i>
            </div>
            <button type="submit" className="btn animation" style={{ '--i': 3, '--j': 24 } as React.CSSProperties}>Login</button>
            <div className="logreg-link animation" style={{ '--i': 4, '--j': 25 } as React.CSSProperties}>
              <p>Don't have an account? <a href="#" className="register-link" onClick={handleRegisterClick}>Sign Up</a></p>
              <p>Forgot Password? <a href="#" className="register-link"></a></p>
            </div>
          </form>
        </div>
        <div className="info-text login">
          <h2 className="animation" style={{ '--i': 0, '--j': 20 } as React.CSSProperties}>Welcome Back!</h2>
          <p className="animation" style={{ '--i': 1, '--j': 21 } as React.CSSProperties}>Already a Member? Please Login.</p>
        </div>
      </div>

      {/* Sign Up Form */}
      <div>
        <div className="form-box register">
          <h2 className="animation" style={{ '--i': 17, '--j': 0 } as React.CSSProperties}>Sign Up</h2>
          <form action="#">
            <div className="input-box animation" style={{ '--i': 18, '--j': 1 } as React.CSSProperties}>
              <input type="text" id="Username_reg" required />
              <label>Username</label>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
              </i>
            </div>
            <div className="input-box animation" style={{ '--i': 19, '--j': 2 } as React.CSSProperties}>
              <input type="email" id="email_reg" required />
              <label>Email</label>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </i>
            </div>
            <div className="input-box animation" style={{ '--i': 20, '--j': 3 } as React.CSSProperties}>
              <input type="password" id="password_reg" required />
              <label>Password</label>
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </i>
            </div>
            <button type="submit" className="btn animation" style={{ '--i': 21, '--j': 4 } as React.CSSProperties}>Sign Up</button>
            <div className="logreg-link animation" style={{ '--i': 22, '--j': 5 } as React.CSSProperties}>
              <p>Already have an account? <a href="#" className="login-link" onClick={handleLoginClick}>Login</a></p>
            </div>
          </form>
        </div>
        <div className="info-text register">
          <h2 className="animation" style={{ '--i': 17, '--j': 0 } as React.CSSProperties}>Welcome!</h2>
          <p className="animation" style={{ '--i': 18, '--j': 1 } as React.CSSProperties}>Create account?</p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
