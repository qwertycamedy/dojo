import React from "react";
import cl from "./AuthInfo.module.scss";
import MySection from "../../../components/_UI/mySection/MySection";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { useDispatch } from "react-redux";
import {
  setIsSignInM,
  setIsSignUpM,
} from "../../../redux/slices/auth/authSlice";

const AuthInfo = () => {
  const dispatch = useDispatch();

  const onSignInM = () => {
    dispatch(setIsSignInM(true));
    dispatch(setIsSignUpM(false));
  };

  const onSignUpM = () => {
    dispatch(setIsSignInM(false));
    dispatch(setIsSignUpM(true));
  };

  return (
    <MySection classNames={cl.info}>
      <h1 className=" title-2">You are not authorized</h1>
      <p>Authorize to get all the features of Dojo</p>
      <div className={cl.btn_outer}>
        <MyBtn classNames={cl.btn + " " + cl.in} onClick={onSignInM}>
          Sign in
        </MyBtn>
        <MyBtn classNames={cl.btn + " " + cl.up} onClick={onSignUpM}>
          Sign up
        </MyBtn>
      </div>
    </MySection>
  );
};

export default AuthInfo;
