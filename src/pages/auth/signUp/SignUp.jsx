import React from "react";
import cl from "./SignUp.module.scss";
import MyModal from "../../../components/_UI/myModal/MyModal";
import MyInput from "../../../components/_UI/myInput/MyInput";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  authSel,
  setConfirmPass,
  setIsSignUpM,
  setLogin,
  setNickname,
  setPass,
  switchM,
} from "../../../redux/slices/auth/authSlice";
import clsx from "clsx";

const SignUp = () => {
  const dispatch = useDispatch();
  const { isSignUpM, login, pass, nickname, confirmPass } =
    useSelector(authSel);

  return (
    <MyModal title={"Sign Up"} isActive={isSignUpM} setIsActive={setIsSignUpM}>
      <MyInput
        placeholder={"nickname"}
        value={nickname}
        setValue={setNickname}
      />
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
      <MyInput
        placeholder={"confirm password"}
        type={"password"}
        value={confirmPass}
        setValue={setConfirmPass}
      />
      <div className={cl.btns}>
        <MyBtn
          classNames={clsx(cl.btn_auth + " " + cl.btn, {
            [cl.btn_dis]:
              nickname.length < 3 ||
              pass.length < 6 ||
              login.length < 6 ||
              pass !== confirmPass,
          })}
        >
          Sign Up
        </MyBtn>
        <MyBtn
          classNames={cl.switch}
          onClick={() => dispatch(switchM({ in: true, up: false }))}
        >
          sign in
        </MyBtn>
      </div>
    </MyModal>
  );
};

export default SignUp;
