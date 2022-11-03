import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './detail.scss';
import Btn from '../../components/common/OrangeBtn';

function MissionDetail() {
  const navigate = useNavigate();
  const id = 1;

  const [title, setTitle] = useState('쓰레기 분리수거하기');
  const [content, setContent] = useState('분리사항 방법! 첫 번째!');
  const HandleUpdate = () => {
    navigate(`/mission/create/${id}`, {state: {mode: 'update'}});
  };
  const HandleDelete = () => {
    window.confirm('정말로 삭제하시겠습니까?')
      ? window.alert('삭제가 완료되었습니다.')
      : null;
  };
  return (
    <div id="detail">
      <div className="create-body">
        <div className="container">
          <div className="input-box">
            <div className="title-box">
              <div className="title-box-text">
                <p className="title">{title}</p>
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
                src={require('../../assets/images/admin.png')}
                alt="미션이미지예시"
              />
              <p className="text">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionDetail;
