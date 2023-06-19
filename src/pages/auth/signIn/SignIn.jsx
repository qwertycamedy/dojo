import React from "react";
import cl from "./SignIn.module.scss";
import MyModal from "../../../components/_UI/myModal/MyModal";
import MyInput from "../../../components/_UI/myInput/MyInput";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  authSel,
  setIsSignInM,
  setEmail,
  setPass,
  switchM,
  signUser,
  setIsAuth,
} from "../../../redux/slices/auth/authSlice";
import clsx from "clsx";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const { isSignInM, email, pass } = useSelector(authSel);
  const navigate = useNavigate();

  const handleLog = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(async ({ user }) => {
        const newUser = {
          nickname: user.displayName,
          email: user.displayName,
          token: user.accessToken,
          id: user.uid,
        };
        dispatch(signUser(newUser));
        dispatch(setIsSignInM(false));
        dispatch(setIsAuth(true));
        navigate("/profile");
      })
      .catch(err => alert(`при авторизации возникла ошибка: ${err}`));
  };

  return (
    <MyModal title={"Sign In"} isActive={isSignInM} setIsActive={setIsSignInM}>
      <MyInput
        placeholder={"email"}
        type={"email"}
        value={email}
        setValue={setEmail}
      />
      <MyInput
        placeholder={"password"}
        type={"password"}
        value={pass}
        setValue={setPass}
      />
      <div className={cl.btns}>
        <MyBtn
          classNames={clsx(cl.btn_auth + " " + cl.btn, {
            [cl.btn_dis]: email.length < 6 || pass.length < 6,
          })}
          onClick={handleLog}
        >
          Sign In
        </MyBtn>
        <MyBtn
          classNames={cl.switch}
          onClick={() => dispatch(switchM({ in: false, up: true }))}
        >
          sign up
        </MyBtn>
      </div>
    </MyModal>
  );
};

export default SignIn;
