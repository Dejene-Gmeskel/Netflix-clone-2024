import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Home/Login";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuthin) => {
      setUser(userAuthin);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      {user ? <Navigate to="/" /> : <Navigate to="/login" />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
