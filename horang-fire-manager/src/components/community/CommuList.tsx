import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import api from '../../api/api';
import '../../screens/community/index.scss';

interface report {
  id: number;
  reporterId: string;
  diaryId: number;
  reportStatus: string;
  reportType: string;
  diaryContent: string;
  respondentId: string;
  imgUrl: string;
}

function CommuList() {
  const navigate = useNavigate();
  const [list, setList] = useState<report[]>([]);
  const fetchReports = async () => {
    try {
      const res = await api.report.readAll();
      setList(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  useEffect(() => {
    // fetchReports();
  }, [list]);

  return (
    <div id="commu_items">
      <ul className="list_table">
        <li className="fs-16 preMid list_table_top">
          <ul className="flex">
            <li>No.</li>
            <li>신고 유형</li>
            <li>내용</li>
            <li>피신고자</li>
            <li>처리여부</li>
          </ul>
        </li>
        {list &&
          list.map((item, i) => (
            <li key={item.id}>
              <ul className="flex">
                <li className="flex align-center justify-center preReg fs-14">
                  {i + 1}
                </li>
                <li className="flex align-center justify-center preReg fs-14">
                  {item.reportType}
                </li>
                <li className="flex align-center justify-center list_table_items_subject">
                  <button
                    type="button"
                    className="preReg fs-14"
                    onClick={() =>
                      navigate(`/commu/detail/${item.id}`, {
                        state: {id: item.id},
                      })
                    }>
                    {item.diaryContent}
                  </button>
                </li>
                <li className="flex align-center justify-center preReg fs-14">
                  {item.respondentId}
                </li>
                <li className="flex align-center justify-end fs-14 list_table_items_check">
                  {item.reportStatus}
                </li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CommuList;
