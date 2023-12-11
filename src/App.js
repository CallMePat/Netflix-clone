import React, { useEffect } from "react";
import "./App.css";
import { HomeScreen } from "./Components/Screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScreen } from "./Components/Screens/LoginScreen";
import { ProfileScreen } from "./Components/Screens/ProfileScreen";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        //Logged in
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid, 
          email: userAuth.email,
        })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;

  }, [dispatch]);
  return (
    <div className="BGC">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route exact path="/profile" element={<ProfileScreen />} />

          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
