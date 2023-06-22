import React from "react";
import cl from "./DudesDude.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyBtn from "../../../components/_UI/myBtn/MyBtn";
import { AiOutlineMessage } from "react-icons/ai";

const DudesDude = ({ dude }) => {
  return (
    <Link className={cl.dude} to={`/dudes/${dude.nickname}`}>
      <div className={cl.info}>
        {dude.img ? (
          <img className={cl.img} src={dude.img} alt={dude.nickname} />
        ) : (
          <FaUserCircle className={cl.img} />
        )}
        <h3 className={`${cl.name} title-3`}>{dude.nickname}</h3>
      </div>
      <MyBtn classNames={cl.message}>
        <AiOutlineMessage />
      </MyBtn>
    </Link>
  );
};

export default DudesDude;
