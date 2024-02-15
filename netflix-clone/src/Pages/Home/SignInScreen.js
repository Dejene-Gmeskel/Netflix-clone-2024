import React, { useRef } from "react";
import "./signin.css";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignInScreen = ({ onSignUpClick }) => { // Accept prop for handling sign up click
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch(() => {
        alert("We have no registered account with these credentials. Please Sign Up below");
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen_grey">New to Netflix? </span>
          <span className="signupScreen_link" onClick={onSignUpClick}>Sign Up now</span> {/* Call function passed as prop */}
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;

