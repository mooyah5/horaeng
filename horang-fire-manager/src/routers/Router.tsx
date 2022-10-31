import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainNavBar from '../components/common/MainNavBar';
import Home from '../screens/home';
import Login from '../screens/user/login';
import Join from '../screens/user/join';
import CommuHome from '../screens/community';
import NoticeHome from '../screens/notice';
import MissionHome from '../screens/mission';

function Router() {
  return (
    <>
      <MainNavBar />
      <Routes>
        {/* 홈 & 로그인 */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />

        {/* 커뮤니티 */}
        <Route path="/commu/*">
          <Route index element={<CommuHome />} />
        </Route>
        {/* 공지사항 */}
        <Route path="/notice/*">
          <Route index element={<NoticeHome />} />
        </Route>
        {/* 공통 미션 */}
        <Route path="/mission/*">
          <Route index element={<MissionHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
