import React from "react";
import cl from "./SignUp.module.scss";
import MyModal from "../../../components/_UI/myModal/MyModal";
import MyInput from "../../../components/_UI/myInput/MyInput";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { useDispatch, useSelector } from "react-redux";
import {
  authSel,
  signUser,
  setConfirmPass,
  setIsSignUpM,
  setEmail,
  setNickname,
  setPass,
  switchM,
  setIsAuth,
} from "../../../redux/slices/auth/authSlice";
import {
  auth,
  createUserWithEmailAndPassword,
  db,
  updateProfile,
} from "../../../firebase";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";

const SignUp = () => {
  const dispatch = useDispatch();
  const { isSignUpM, email, pass, nickname, confirmPass } =
    useSelector(authSel);
  const navigate = useNavigate();

  const handleReg = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(async ({ user }) => {
        await updateProfile(user, {
          displayName: nickname,
        });
        const newUser = {
          nickname: user.displayName,
          email: user.displayName,
          token: user.accessToken,
          id: user.uid,
        };
        const newDude = { id: user.uid, nickname: user.displayName };
        await addDoc(collection(db, "dudes"), newDude);
        dispatch(signUser(newUser));
        dispatch(setIsSignUpM(false));
        dispatch(setIsAuth(true));
        navigate("/profile");
      })
      .catch(err => alert(`при регистрации возникла ошибка: ${err}`));
  };

  return (
    <MyModal title={"Sign Up"} isActive={isSignUpM} setIsActive={setIsSignUpM}>
      <MyInput
        placeholder={"nickname"}
        value={nickname}
        setValue={setNickname}
      />
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
              email.length < 6 ||
              pass !== confirmPass,
          })}
          onClick={handleReg}
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
