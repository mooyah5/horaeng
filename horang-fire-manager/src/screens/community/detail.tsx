import React, {useEffect, useState, ChangeEvent} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import './detail.scss';
import Btn from '../../components/common/OrangeBtn';

function CommuDetail() {
  const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  const [title, setTitle] = useState('쓰레기 분리수거하기');
  const [writer, setWriter] = useState('작성자');
  const [reported, setReported] = useState<number>(2);
  const [reportCheck, setReportCheck] = useState();
  const [content, setContent] = useState('분리사항 방법! 첫 번째!');
  const HandleAccept = () => {
    window.confirm('신고 접수처리를 하시겠습니까?')
      ? window.alert('접수가 완료되었습니다..')
      : null;
  };
  const HandleCancel = () => {
    window.confirm('접수를 취소하시겠습니까?')
      ? window.alert('접수가 취소되었습니다.')
      : null;
  };
  const HandleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <div id="detail">
      <div className="create-body">
        <div className="container">
          <div className="input-box">
            <div className="title-box">
              <div className="title-box-text">
                <p className="title">{title}</p>
                <p className="writer">
                  {writer}
                  <span>
                    &nbsp; &nbsp; 신고접수 {reported}회 누적&nbsp;&nbsp;
                    <input
                      onChange={HandleCheck}
                      id="checking"
                      type="checkbox"
                      value={reportCheck}
                    />
                  </span>
                </p>
              </div>
              <div className="title-box-submit">
                <div className="title-box-submit-btndiv">
                  <Btn txt="접수" clickEvent={HandleAccept}></Btn>
                  <Btn txt="취소" clickEvent={HandleCancel}></Btn>
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

export default CommuDetail;
