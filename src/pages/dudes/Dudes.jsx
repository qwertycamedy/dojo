import React, { useEffect } from "react";
import cl from "./Dudes.module.scss";
import MyPage from "../../components/_UI/myPage/MyPage";
import MySection from "../../components/_UI/mySection/MySection";
import { useDispatch, useSelector } from "react-redux";
import { dudesSel, fetchDudes } from "../../redux/slices/dudes/dudesSlice";
import DudesDude from "./dude/DudesDude";
import { loadStatus } from "../../redux/loadStatus";
import Loader from "../../components/loader/Loader";
import MyNotFound from "../../components/_UI/myNotFound/MyNotFound";
import { authSel } from "../../redux/slices/auth/authSlice";

const Dudes = () => {
  const dispatch = useDispatch();
  const { dudes, dudesLoadStatus } = useSelector(dudesSel);
  const {authUser} = useSelector(authSel);
  useEffect(() => {
    dispatch(fetchDudes());
  }, [dispatch]);

  const wMeDudes = dudes.filter(dude => dude.id !== authUser.id)

  return (
    <MyPage classNames={cl.outer}>
      <MySection classNames={cl.content} containerCl={cl.content_container}>
        {dudesLoadStatus === loadStatus.LOADING ? (
          <Loader />
        ) : dudesLoadStatus === loadStatus.ERROR ? (
          <MyNotFound title={":/"} text={"чуваки не найдены"} />
        ) : (
          <div className={cl.dudes}>
            {wMeDudes.map(dude => (
              <DudesDude dude={dude} key={dude.id} />
            ))}
          </div>
        )}
      </MySection>
    </MyPage>
  );
};

export default Dudes;
