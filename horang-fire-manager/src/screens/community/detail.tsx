import React, {useEffect, useState, ChangeEvent} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import './detail.scss';
import Btn from '../../components/common/OrangeBtn';
import api from '../../api/api';

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

const defaultReport: report = {
  id: 0,
  reporterId: '',
  diaryId: 0,
  reportStatus: '',
  reportType: '',
  diaryContent: '',
  respondentId: '',
  imgUrl: '',
};

interface userInfo {
  id: string;
  name: string;
  reportCnt: number;
  point: number;
  role: string;
}

const defaultUserInfo: userInfo = {
  id: '', // userId
  name: '', // user nickname
  reportCnt: 0, // 신고당한횟수
  point: 0, // 유저포인트
  role: '', // Admin 혹은 User
};

function CommuDetail() {
  const navigate = useNavigate();
  const location = useLocation();

  const status = [
    {id: 0, status: 'IN_PROGRESS', expression: '접수'},
    {id: 1, status: 'ALLOW', expression: '수락'},
    {id: 2, status: 'CANCLE', expression: '취소'},
  ];

  const [report, setReport] = useState<report>(defaultReport);
  const [userInfo, setUserInfo] = useState<userInfo>(defaultUserInfo);
  const [statusName, setStatusName] = useState('');

  const id = location.state.id;

  useEffect(() => {
    readReport();
    readUserInfo(report.respondentId);

    for (let i = 0; i < status.length; i += 1) {
      if (status[i].status == report.reportStatus) {
        setStatusName(status[i].expression);
      }
    }
  }, []);
  useEffect(() => {
    readUserInfo(report.respondentId);
    for (let i = 0; i < status.length; i += 1) {
      if (status[i].status == report.reportStatus) {
        setStatusName(status[i].expression);
      }
    }
    // console.log(statusName);
  }, [report]);

  const readReport = async () => {
    try {
      const res = await api.report.read(id);
      setReport(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const readUserInfo = async (userId: string) => {
    try {
      const res = await api.auth.userInfo(userId);
      setUserInfo(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 신고 거절
  const refuseReport = async () => {
    try {
      await api.report.refuse(id);
      alert(`신고를 거절하였습니다.`);
    } catch (err) {
      console.log(err);
    }
  };

  // 신고 수락
  const allowReport = async () => {
    try {
      await api.report.allow(id);
      alert(`신고를 수락하였습니다.`);
    } catch (err) {
      console.log(err);
    }
  };

  const HandleAccept = () => {
    window.confirm('신고를 수락하시겠습니까?') ? allowReport() : null;
    navigate('/commu');
  };
  const HandleCancel = () => {
    window.confirm('신고를 거절하시겠습니까?') ? refuseReport() : null;
    navigate('/commu');
  };

  return (
    <div id="detail">
      <div className="create-body">
        <div className="container">
          <div className="input-box">
            <div className="title-box">
              <div className="title-box-text">
                <p className="title">{report.diaryContent}</p>
                <p className="writer">
                  신고자 {report.reporterId} / 피신고자 {report.respondentId}
                  <span>
                    &nbsp; &nbsp; 신고접수 {userInfo.reportCnt}회
                    누적&nbsp;&nbsp;
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
              <p>
                {/* {report.reportStatus} */}
                {statusName} 상태입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommuDetail;
