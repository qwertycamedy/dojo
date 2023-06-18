import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Messages from "./pages/messages/Messages";
import Navbar from "./components/navbar/Navbar";
import MessagesWindow from "./pages/messages/window/MessagesWindow";
import { useSelector } from "react-redux";
import { authSel } from "./redux/slices/auth/authSlice";
import Auth from "./pages/auth/Auth";

const App = () => {
  const { isAuth } = useSelector(authSel);
  return (
    <div className="app">
      <Header />

      <main className="main">
        <Routes>
          {isAuth ? (
            <>
              <Route path="/" element={<Profile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/messages/:id" element={<MessagesWindow />} />
            </>
          ) : (
            <>
            <Route path="*" element={<Auth />} />
            </>
          )}
        </Routes>
      </main>

      <Navbar />
    </div>
  );
};

export default App;
