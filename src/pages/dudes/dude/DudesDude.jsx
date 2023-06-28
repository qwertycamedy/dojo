import React from "react";
import cl from "./DudesDude.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { AiOutlineMessage } from "react-icons/ai";

const DudesDude = ({ dude }) => {
  const navigate = useNavigate();

  const toChat = e => {
    e.stopPropagation();
    navigate(`/messages/${dude.nickname}`);
  };
  return (
    <div className={cl.dude}>
      <Link to={`/dudes/${dude.nickname}`}>
        <div className={cl.info}>
          {dude.img ? (
            <img className={cl.img} src={dude.img} alt={dude.nickname} />
          ) : (
            <FaUserCircle className={cl.img} />
          )}
          <h3 className={`${cl.name} title-3`}>{dude.nickname}</h3>
        </div>
      </Link>
      <MyBtn classNames={cl.message} onClick={toChat}>
        <AiOutlineMessage />
      </MyBtn>
    </div>
  );
};

export default DudesDude;
