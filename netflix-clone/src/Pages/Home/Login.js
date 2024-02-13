import React from "react";
import "./login.css";
import logo from "../../Assets/images/logo.png";
// import down_icon from "../../Assets/images/down-icon.png";

const Login = () => {
  return (
    <div className="header">
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <div>
          <button>Sign In</button>
        </div>
      </nav>
      <div className="header_content">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className="email_signup">
          <input type="email" placeholder="Email address" />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
