import React from "react";
import cl from "./SignIn.module.scss";
import MyModal from "../../../components/_UI/myModal/MyModal";
import MyInput from "../../../components/_UI/myInput/MyInput";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  authSel,
  setIsSignInM,
  setLogin,
  setPass,
  switchM,
} from "../../../redux/slices/auth/authSlice";
import clsx from "clsx";

const SignIn = () => {
  const dispatch = useDispatch();
  const { isSignInM, login, pass } = useSelector(authSel);

  return (
    <MyModal title={"Sign In"} isActive={isSignInM} setIsActive={setIsSignInM}>
      <MyInput
        placeholder={"login"}
        type={"email"}
        value={login}
        setValue={setLogin}
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
            [cl.btn_dis]: login.length < 6 || pass.length < 6,
          })}
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
