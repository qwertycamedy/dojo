import React, { useEffect } from "react";
import cl from "./NotFound.module.scss";
import MyNotFound from "../../components/_UI/myNotFound/MyNotFound";
import MyPage from "../../components/_UI/myPage/MyPage";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("404");
  }, [navigate]);

  return (
    <MyPage classNames={cl.page}>
      <MyNotFound
        classNames={cl.info}
        title={":/"}
        text={"Ты, по-моему, перепутал"}
      />
    </MyPage>
  );
};

export default NotFound;
