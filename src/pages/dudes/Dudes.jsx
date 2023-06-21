import React, { useEffect } from "react";
import cl from './Dudes.module.scss'
import MyPage from "../../components/_UI/myPage/MyPage";
import MySection from "../../components/_UI/mySection/MySection";
import { useDispatch, useSelector } from "react-redux";
import { dudesSel, fetchDudes } from "../../redux/slices/dudes/dudesSlice";
import Dude from "./dude/Dude";
import { loadStatus } from "../../redux/loadStatus";
import Loader from "../../components/loader/Loader";
import MyNotFound from "../../components/_UI/myNotFound/MyNotFound";

const Dudes = () => {
  const dispatch = useDispatch();
  const { dudes, dudesLoadStatus } = useSelector(dudesSel);
  useEffect(() => {
    dispatch(fetchDudes());
  }, [dispatch]);

  return (
    <MyPage classNames={cl.outer}>
      <MySection classNames={cl.content} containerCl={cl.content_container}>
        {dudesLoadStatus === loadStatus.LOADING ? (
            <Loader />
        ) : dudesLoadStatus === loadStatus.ERROR ? (
          <MyNotFound title={":/"} text={"чуваки не найдены"} />
        ) : (
          dudes.map(dude => <Dude dude={dude} key={dude.id} />)
        )}
      </MySection>
    </MyPage>
  );
};

export default Dudes;
