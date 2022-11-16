import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import api from '../../api/api';
import '../../screens/notice/index.scss';

interface notice {
  id: number;
  title: string;
  userId: string;
  content: string;
  createDate: string;
}

function NoticeList() {
  const navigate = useNavigate();
  const [list, setList] = useState<notice[]>([]);
  const fetchNotices = async () => {
    try {
      const res = await api.notice.readAll();
      setList(res.data);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  return (
    <div id="notice_items">
      <ul className="list_table">
        <li className="fs-16 preMid list_table_top">
          <ul className="flex">
            <li>No.</li>
            <li>제목</li>
            <li>작성자</li>
            <li>작성일</li>
          </ul>
        </li>
        {list &&
          list.map((item, i) => (
            <li key={item.id}>
              <ul className="flex">
                <li className="flex align-center justify-center preReg fs-14">
                  {i + 1}
                </li>

                <li className="flex align-center justify-center list_table_items_subject">
                  <button
                    type="button"
                    className="preReg fs-14"
                    onClick={() => {
                      navigate(`/notice/detail/${item.id}`, {
                        state: {id: item.id},
                      });
                    }}>
                    {item.title}
                  </button>
                </li>
                <li className="flex align-center justify-center preReg fs-14">
                  {item.userId}
                </li>
                <li className="flex align-center justify-center preReg fs-14">
                  {item.createDate.substr(0, 10)}
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NoticeList;
