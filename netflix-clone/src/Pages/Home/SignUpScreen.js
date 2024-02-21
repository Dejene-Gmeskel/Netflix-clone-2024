import React, { useRef } from "react";
import "./signup.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
  const emailRegRef = useRef(null);
  const passwordRegRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    const email = emailRegRef.current.value;
    const password = passwordRegRef.current.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log(authUser);
        if (authUser) {
          console.log(
            "Your subscription is successfully added. Please sign in."
          );
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign UP</h1>
        <input ref={emailRegRef} placeholder="Email" type="email" />
        <input ref={passwordRegRef} placeholder="Password" type="password" />
        <button type="submit" onClick={register}>
          Get Access
        </button>
      </form>
    </div>
  );
};

export default SignUpScreen;
