// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import SignUp from "./components/main/SignUp";
import Login from "./components/main/Login";
import UserProvider from "./context/UserProvider";
import { useState } from "react";
import User from "./components/user";
import UserProfile from "./components/user/UserProfile";

function App() {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))


  return (
    <>
      <BrowserRouter>
        {/* <UserProvider currentUser={currentUser}> */}
        <UserProvider>
          <Routes>
            <Route path="/" element={<Navigate to='/main/home' />} />
            <Route path="main" element={<Main />}>
              <Route path="home" element={<Home />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="user" element={<User />}>
              <Route path='userProfile' element={<UserProfile />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
