import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import WriteBtn from '../../components/common/WriteBtn';
import NoticeList from '../../components/notice/noticeList';
import './index.scss';

function NoticeHome() {
  const navigate = useNavigate();
  const id = 1;
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
            <div className=""></div>
          </div>
          <div>
            <WriteBtn
              txt={'글 작성'}
              clickEvent={() => navigate(`/notice/create`)}
            />
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
