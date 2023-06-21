import React, { useEffect } from "react";
import Header from "./components/header/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import Messages from "./pages/messages/Messages";
import Navbar from "./components/navbar/Navbar";
import MessagesWindow from "./pages/messages/window/MessagesWindow";
import { useDispatch, useSelector } from "react-redux";
import {
  authSel,
  setAuthLoadStatus,
  setIsAuth,
  signOutUser,
  signUser,
} from "./redux/slices/auth/authSlice";
import Auth from "./pages/auth/Auth";
import { auth, onAuthStateChanged } from "./firebase";
import { loadStatus } from "./redux/loadStatus";
import Loader from "./components/loader/Loader";
import Feed from "./pages/feed/Feed";
import { defaultFilter } from "./redux/slices/filters/filtersSlice";
import Dudes from "./pages/dudes/Dudes";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
  const { isAuth, authLoadStatus } = useSelector(authSel);
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  useEffect(() => {
    dispatch(setAuthLoadStatus(loadStatus.LOADING));
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
        dispatch(setIsAuth(true));
        dispatch(setAuthLoadStatus(loadStatus.SUCCESS));
      } else {
        dispatch(signOutUser());
        auth.signOut();
        dispatch(setAuthLoadStatus(loadStatus.SUCCESS));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(defaultFilter());
  }, [dispatch, location]);

  return (
    <div className="app">
      <Header />

      <main className="main">
        {authLoadStatus === loadStatus.SUCCESS ? (
          <Routes>
            {isAuth ? (
              <>
                <Route path="/" element={<Feed />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/messages/:id" element={<MessagesWindow />} />
                <Route path="/dudes" element={<Dudes />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </>
            ) : (
              <>
                <Route path="*" element={<Auth />} />
              </>
            )}
          </Routes>
        ) : (
          <Loader />
        )}
      </main>

      <Navbar />
    </div>
  );
};

export default App;
