import React, { useState } from "react";
import "./login.css";
import logo from "../../Assets/images/logo.png";
import SignUpScreen from "./SignUpScreen"

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="header">
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <div>
          <button onClick={() => setSignIn(true)}>Sign In</button>
        </div>
      </nav>
      <div className="header_content">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className="email_signup">
              <input type="email" placeholder="Email address" />
              <button onClick={() => setSignIn(true)} type="submit">
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
