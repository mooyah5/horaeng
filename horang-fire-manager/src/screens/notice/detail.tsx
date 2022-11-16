import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import api from '../../api/api';

import './detail.scss';
import Btn from '../../components/common/OrangeBtn';

interface notice {
  id: number;
  userId: string;
  title: string;
  content: string;
  createDate: string;
}

const defaultNotice: notice = {
  id: 0,
  userId: '',
  title: '',
  content: '',
  createDate: '',
};

function NoticeDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [notice, setNotice] = useState<notice>(defaultNotice);

  const id = location.state.id;

  useEffect(() => {
    readNotice();
    // console.log('location', location.pathname.substr(15, 1));
  }, []);

  const readNotice = async () => {
    try {
      const res = await api.notice.read(id);
      setNotice(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNotice = async () => {
    try {
      const res = await api.notice.delete(id);
      alert(`공지가 삭제되었습니다.`);
      navigate(`/notice`);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleUpdate = () => {
    navigate(`/notice/update/${id}`, {state: {id: id}});
  };
  const HandleDelete = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      deleteNotice();
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
                <p className="title">{notice.title}</p>
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
              <p className="text">{notice.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoticeDetail;
