import React, { useEffect } from "react";
import MyPage from "../../components/_UI/myPage/MyPage";
import DudeHeader from "./header/DudeHeader";
import DudePosts from "./posts/DudePosts";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dudeSel, fetchDude } from "../../redux/slices/dude/dudeSlice";
import { loadStatus } from "../../redux/loadStatus";
import Loader from "../../components/loader/Loader";
import MyNotFound from "../../components/_UI/myNotFound/MyNotFound";

const Dude = () => {
  const dispatch = useDispatch();
  const { dudeLoadStatus } = useSelector(dudeSel);
  const { dudeNickname } = useParams();

  useEffect(() => {
    dispatch(fetchDude(dudeNickname));
  }, [dispatch, dudeNickname]);

  return (
    <MyPage>
      {dudeLoadStatus === loadStatus.LOADING ? (
        <Loader />
      ) : dudeLoadStatus === loadStatus.ERROR ? (
        <MyNotFound title={':/'} text={'Ошибка при получении дудя'} />
      ) : (
        <>
          <DudeHeader />
          <DudePosts />
        </>
      )}
    </MyPage>
  );
};

export default Dude;
