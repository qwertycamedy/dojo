import React, { useEffect } from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Messages from "./pages/messages/Messages";
import Navbar from "./components/navbar/Navbar";
import MessagesWindow from "./pages/messages/window/MessagesWindow";
import { useDispatch, useSelector } from "react-redux";
import { authSel, signOutUser, signUser } from "./redux/slices/auth/authSlice";
import Auth from "./pages/auth/Auth";
import { auth, onAuthStateChanged } from "./firebase";

const App = () => {
  const { isAuth } = useSelector(authSel);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        dispatch(
          signUser({
            nickname: userAuth.displayName,
            email: userAuth.displayName,
            token: userAuth.accessToken,
            id: userAuth.uid,
          })
        );
      } else {
        dispatch(signOutUser());
      }
    });
  }, [dispatch]);

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
