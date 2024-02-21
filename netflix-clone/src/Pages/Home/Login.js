import "./login.css";
import React, { useState } from 'react';
import logo from "../../Assets/images/logo.png";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const Login = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  return (
    <div className="header">
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <div>
          <button onClick={handleSignInClick}>Sign In</button>
        </div>
      </nav>
      <div className="header_content">
        {showSignIn && <SignInScreen onSignUpClick={handleSignUpClick} />} 
        {showSignUp && <SignUpScreen />}
        {!showSignIn && !showSignUp && (
          <>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className="email_signup">
              <input type="email" placeholder="Email address" />
              <button onClick={handleSignInClick} type="submit">
                Get Started
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
