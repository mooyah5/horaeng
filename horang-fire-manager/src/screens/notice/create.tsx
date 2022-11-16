import React, {useState, useEffect, ChangeEvent} from 'react';
import './create.scss';
import {useLocation, useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import api from '../../api/api';

function NoticeCreate() {
  const location = useLocation();
  const navigate = useNavigate();
  const userName = useSelector((state: any) => state.authToken.userName);

  const [inputs, setInputs] = useState({
    title: '',
    content: '',
    userId: userName,
    id: '',
  });

  const {title, content} = inputs;
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const HandleSubmit = async () => {
    try {
      const res = await api.notice.create(inputs);
      alert('작성이 완료되었습니다.');
      navigate(`/notice`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="create">
      <div className="create-body">
        <div className="container">
          <div className="input-box">
            <div className="title-box">
              <div className="title-box-text">
                <p className="title">공지사항 작성</p>
              </div>
              <button className="title-box-submit" onClick={HandleSubmit}>
                <div className="login-btn flex align-center justify-center preMid fs-16">
                  작성 완료
                </div>
              </button>
            </div>
          </div>
          <div className="input-box">
            <p className="input-text">제목</p>
            <input
              name="title"
              className="input-title"
              type="text"
              placeholder="제목을 입력해주세요."
              onChange={onChange}
            />
          </div>
          <div className="input-box">
            <p className="input-text">내용</p>
            <textarea
              name="content"
              className="input-content"
              placeholder="공지사항 내용을 입력해주세요."
              rows={5}
              cols={5}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeCreate;
