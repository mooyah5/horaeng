import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import WriteBtn from '../../components/common/WriteBtn';
import MissionList from '../../components/mission/missionList';
import './index.scss';

function MissionHome() {
  const id = 1;
  const [clickAll, setClickAll] = useState<boolean>(false);
  const [clickToday, setClickToday] = useState<boolean>(true);

  const navigate = useNavigate();
  const activeBtns = (active: boolean): string => {
    const prefix =
      'flex align-center justify-center preMid fs-16 mission_select_btns_';
    return active ? `${prefix}active` : `${prefix}unactive`;
  };

  return (
    <div id="mission" className="flex justify-center">
      <div className="container flex column">
        <div className="mission_title fs-32 preBold">공통 미션</div>
        <div className="mission_top flex justify-space-between">
          <div className="mission_select flex preMid fs-18"></div>
          <div>
            <WriteBtn
              txt={'글 작성'}
              clickEvent={() => navigate(`/mission/create`)}
            />
          </div>
        </div>

        <div className="mission_list">
          <MissionList />
        </div>
        <div className="line" />
      </div>
    </div>
  );
}

export default MissionHome;
