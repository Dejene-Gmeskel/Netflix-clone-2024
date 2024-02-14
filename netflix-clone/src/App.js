import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Home/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useUser } from "../src/Utils/userContext";

const App = () => {
  const { state, dispatch } = useUser();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch({
          type: "LOGIN",
          payload: { uid: userAuth.uid, email: userAuth.email },
        });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Routes>
        {!state.user ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
