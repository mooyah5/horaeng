import React, {useState, useEffect, MouseEvent, ChangeEvent} from 'react';
import './create.scss';
import {useLocation} from 'react-router-dom';

function NoticeCreate() {
  const location = useLocation();

  const [modeTitle, setModeTitle] = useState('공지사항 작성'); // TITLE (공지사항 작성, mode: 'update' = 공지사항 수정)
  const [noticeTitleValue, setNoticeTitleValue] = useState(''); // 제목 value
  const [noticeContentValue, setNoticeContentValue] = useState(''); // 내용 value

  useEffect(() => {
    if (location.state) {
      if (location.state.mode === 'update') {
        setModeTitle('공지사항 수정');
      } else {
        setModeTitle('공지사항 작성');
      }
    }
  }, []);
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });
  const {title, content} = inputs;
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    // todo
    // console.log(location.state.mode);
  };
  const HandleSubmit = () => {
    return;
  };
  return (
    <div id="create">
      <div className="create-body">
        <div className="container">
          <div className="input-box">
            <div className="title-box">
              <div className="title-box-text">
                <p className="title">{modeTitle}</p>
              </div>
              <div className="title-box-submit">
                <button
                  className="login-btn flex align-center justify-center preMid fs-16"
                  onClick={HandleSubmit}>
                  작성 완료
                </button>
              </div>
            </div>
          </div>
          <div className="input-box">
            <p className="input-text">제목</p>
            <input
              name="title"
              className="input-title"
              type="text"
              placeholder="제목이다제목이야"
              onChange={onChange}
              value={noticeTitleValue}
            />
          </div>
          <div className="input-box">
            <p className="input-text">내용</p>
            <textarea
              name="content"
              className="input-content"
              // type="textarea"
              placeholder="여기에 입력하세요"
              rows={5}
              cols={5}
              onChange={onChange}
              value={noticeContentValue}
            />
          </div>
          {/* <div className="input-box">
            <button onClick={HandleSubmit}>제출하기</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NoticeCreate;
