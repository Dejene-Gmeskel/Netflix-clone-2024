import React, { useRef } from "react";
import "./signup.css";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
        if(authUser) {
          alert ("your subscription successfully added please sign in")
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((authUser)=>{
        console.log(authUser)
        if (authUser) {
          window.location.href = "/";
        }
    }).catch(()=>{
       alert("We have no registered account with this credentials")
    })
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="password" type="password" />
        <button type="submit" onClick={signIn}>
          SignIn
        </button>
        <h4>
          <span className="signupScreen_grey">New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
