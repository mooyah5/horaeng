import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import CommuList from '../../components/community/CommuList';
import WriteBtn from '../../components/common/WriteBtn';
import './index.scss';

function CommuHome() {
  const [clickAll, setClickAll] = useState<boolean>(true);
  const [clickFinished, setClickFinished] = useState<boolean>(false);
  const [clickNotyet, setClickNotyet] = useState<boolean>(false);

  const navigate = useNavigate();
  const activeBtns = (active: boolean): string => {
    const prefix =
      'flex align-center justify-center preMid fs-16 commu_select_btns_';
    return active ? `${prefix}active` : `${prefix}unactive`;
  };

  return (
    <div id="commu" className="flex justify-center">
      <div className="container flex column">
        <div className="commu_title fs-32 preBold">커뮤니티</div>
        <div className="commu_top flex justify-space-between">
          <div className="commu_select flex preMid fs-18">
            <button
              type="button"
              className={activeBtns(clickAll)}
              onClick={() => {
                setClickAll(true);
                setClickFinished(false);
                setClickNotyet(false);
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
              }}>
              접수 완료
            </button>
            <button
              type="button"
              className={activeBtns(clickNotyet)}
              onClick={() => {
                setClickAll(false);
                setClickFinished(false);
                setClickNotyet(true);
              }}>
              미접수
            </button>
          </div>
          <div>
            <WriteBtn txt={'글작성'} clickEvent={() => navigate('/')} />
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
