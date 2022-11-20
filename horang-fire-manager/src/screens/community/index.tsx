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
        <div className="commu_top flex justify-space-between"></div>
        <div className="commu_list">
          <CommuList />
        </div>
        <div className="line" />
      </div>
    </div>
  );
}

export default CommuHome;
