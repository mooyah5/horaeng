import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import './detail.scss';
import Btn from '../../components/common/OrangeBtn';
import api from '../../api/api';

interface mission {
  id: number;
  charactersId: number;
  userId: string;
  userCharacterId: number;
  content: string;
  imgUrl: string;
}

const defaultMission: mission = {
  id: 0,
  charactersId: 0,
  userId: '',
  userCharacterId: 0,
  content: '',
  imgUrl: '',
};

function MissionDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mission, setMission] = useState<mission>(defaultMission);

  const id = location.state.id;

  useEffect(() => {
    readMission();
  }, []);

  const readMission = async () => {
    try {
      const res = await api.mission.read(id);
      setMission(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMission = async () => {
    try {
      const res = await api.mission.delete(id);
      alert(`공통미션이 삭제되었습니다.`);
      navigate(`/mission`);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleUpdate = () => {
    navigate(`/mission/update/${id}`, {state: {id: id}});
  };

  const HandleDelete = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      deleteMission();
    } else {
      null;
    }
  };

  return (
    <div id="detail">
      <div className="create-body">
        <div className="container">
          <div className="input-box">
            <div className="title-box">
              <div className="title-box-text">
                <p className="title">{mission.content}</p>
              </div>
              <div className="title-box-submit">
                <div className="title-box-submit-btndiv">
                  <Btn txt="수정" clickEvent={HandleUpdate}></Btn>
                  <Btn txt="삭제" clickEvent={HandleDelete}></Btn>
                </div>
              </div>
            </div>
          </div>
          <div className="input-box">
            <div className="text-box">
              <img
                className="text-image"
                src={mission.imgUrl}
                alt={mission.imgUrl}
              />
              <p className="text">{mission.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionDetail;
