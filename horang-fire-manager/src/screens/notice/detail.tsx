import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

import './detail.scss';
import Btn from '../../components/common/OrangeBtn';

function NoticeDetail() {
  const navigate = useNavigate();

  const id = 1;

  // todo
  // const location = useLocation();
  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);

  const [title, setTitle] = useState('[업데이트] 2.3.15 버그 수정');
  const [content, setContent] = useState(
    '문제사항 해결했습니다. \n 어쩌구저쩌구',
  );
  const HandleUpdate = () => {
    navigate(`/notice/create/${id}`, {state: {mode: 'update'}});
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
              <p className="text">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeDetail;
