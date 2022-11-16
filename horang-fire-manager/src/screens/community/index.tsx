import React, {useState} from 'react';
import CommuList from '../../components/community/CommuList';
import WriteBtn from '../../components/common/WriteBtn';
import './index.scss';

function CommuHome() {
  const [clickAll, setClickAll] = useState<boolean>(true);
  const [clickFinished, setClickFinished] = useState<boolean>(false);
  const [clickNotyet, setClickNotyet] = useState<boolean>(false);
  const [clickCancled, setClickCancled] = useState<boolean>(false);

  const activeBtns = (active: boolean): string => {
    const prefix =
      'flex align-center justify-center preMid fs-16 commu_select_btns_';
    return active ? `${prefix}active` : `${prefix}unactive`;
  };

  return (
    <div id="commu" className="flex justify-center">
      <div className="container flex column">
        <div className="commu_title fs-32 preBold">커뮤니티 신고 관리</div>
        <div className="commu_top flex justify-space-between">
          <div className="commu_select flex preMid fs-18">
            <button
              type="button"
              className={activeBtns(clickAll)}
              onClick={() => {
                setClickAll(true);
                setClickFinished(false);
                setClickNotyet(false);
                setClickCancled(false);
              }}>
              전체 보기
            </button>
            <button
              type="button"
              className={activeBtns(clickFinished)}
              onClick={() => {
                setClickAll(false);
                setClickFinished(true);
                setClickNotyet(false);
                setClickCancled(false);
              }}>
              처리완료
            </button>
            <button
              type="button"
              className={activeBtns(clickNotyet)}
              onClick={() => {
                setClickAll(false);
                setClickFinished(false);
                setClickNotyet(true);
                setClickCancled(false);
              }}>
              미처리
            </button>
            <button
              type="button"
              className={activeBtns(clickCancled)}
              onClick={() => {
                setClickAll(false);
                setClickFinished(false);
                setClickNotyet(false);
                setClickCancled(true);
              }}>
              반려된 처리
            </button>
          </div>
        </div>

        <div className="commu_list">
          <CommuList />
        </div>
        <div className="line" />
      </div>
    </div>
  );
}

export default CommuHome;
