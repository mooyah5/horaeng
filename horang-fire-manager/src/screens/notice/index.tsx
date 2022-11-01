import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import WriteBtn from '../../components/common/WriteBtn';
import NoticeList from '../../components/notice/noticeList';
import './index.scss';

function NoticeHome() {
  const [clickNow, setClickNow] = useState<boolean>(true);
  const [clickDelete, setClickDelete] = useState<boolean>(false);

  const navigate = useNavigate();
  const activeBtns = (active: boolean): string => {
    const prefix =
      'flex align-center justify-center preMid fs-16 notice_select_btns_';
    return active ? `${prefix}active` : `${prefix}unactive`;
  };

  return (
    <div id="notice" className="flex justify-center">
      <div className="container flex column">
        <div className="notice_title fs-32 preBold">공지사항</div>
        <div className="notice_top flex justify-space-between">
          <div className="notice_select flex preMid fs-18">
            <button
              type="button"
              className={activeBtns(clickNow)}
              onClick={() => {
                setClickNow(true);
                setClickDelete(false);
              }}>
              현재 업로드 된 공지 보기
            </button>
            <button
              type="button"
              className={activeBtns(clickDelete)}
              onClick={() => {
                setClickNow(false);
                setClickDelete(true);
              }}>
              삭제된 공지 보기
            </button>
          </div>
          <div>
            <WriteBtn txt={'글 작성'} clickEvent={() => navigate('/')} />
          </div>
        </div>

        <div className="notice_list">
          <NoticeList />
        </div>
        <div className="line" />
      </div>
    </div>
  );
}

export default NoticeHome;
