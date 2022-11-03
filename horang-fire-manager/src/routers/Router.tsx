import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainNavBar from '../components/common/MainNavBar';
import Home from '../screens/home';
import Login from '../screens/user/login';

// 공지사항
import NoticeHome from '../screens/notice';
import NoticeCreate from '../screens/notice/create';
import NoticeDetail from '../screens/notice/detail';

// 커뮤니티
import CommuHome from '../screens/community';
import CommuDetail from '../screens/community/detail';

// 공통미션
import MissionHome from '../screens/mission';
import MissionCreate from '../screens/mission/create';
import MissionDetail from '../screens/mission/detail';

function Router() {
  return (
    <>
      <MainNavBar />
      <Routes>
        {/* 홈 & 로그인 */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* 커뮤니티 */}
        <Route path="/commu/*">
          <Route index element={<CommuHome />} />
          <Route path="detail/:id" element={<CommuDetail />} />
        </Route>

        {/* 공지사항 */}
        <Route path="/notice/*">
          <Route index element={<NoticeHome />} />
          <Route path="create/:id" element={<NoticeCreate />} />
          <Route path="detail/:id" element={<NoticeDetail />} />
        </Route>

        {/* 공통 미션 */}
        <Route path="/mission/*">
          <Route index element={<MissionHome />} />
          <Route path="create/:id" element={<MissionCreate />} />
          <Route path="detail/:id" element={<MissionDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
