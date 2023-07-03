import React from "react";
import cl from "./DudesDude.module.scss";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const DudesDude = ({ dude }) => {

  return (
    <Link className={cl.dude} to={`/dude/${dude.nickname}`}>
      <div className={cl.info}>
        {dude.img ? (
          <img className={cl.img} src={dude.img} alt={dude.nickname} />
        ) : (
          <FaUserCircle className={cl.img} />
        )}
        <h3 className={`${cl.name} title-3`}>{dude.nickname}</h3>
      </div>
    </Link>
  );
};

export default DudesDude;
