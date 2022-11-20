const GATEWAY_HOST = 'https://k7c108.p.ssafy.io/';
// const USERL_HOST = 'http://k7c108.p.ssafy.io:8010/';
const SOCIAL_HOST = 'http://k7c108.p.ssafy.io:8020/';

const SOCIAL = 'social-service/';
const NOTICE = 'notice/';
const REPORT = 'report/';
const MISSION = 'mission/';
const USER = 'user/';
const AUTH = 'auth/';
const LOGIN = 'login';

const CHARACTER_SERVICE = 'character-service/';
const AUTH_SERVICE = 'auth-service/';
const USER_SERVICE = 'user-service/';

const rf = {
  // 추후 참고
  auth: {
    login: () => GATEWAY_HOST + AUTH_SERVICE + AUTH + LOGIN,
    // 'http://k7c108.p.ssafy.io:8030/' + AUTH_SERVICE + AUTH + LOGIN,
    logout: (userId: string) =>
      GATEWAY_HOST + USER_SERVICE + `logout/${userId}`,
    userInfo: (userId: string) =>
      GATEWAY_HOST + USER_SERVICE + `user/${userId}`,
  },

  // notice
  notice: {
    read: (noticeId: number) => GATEWAY_HOST + SOCIAL + NOTICE + `${noticeId}`,
    readAll: () => GATEWAY_HOST + SOCIAL + NOTICE,
    delete: (noticeId: number) =>
      GATEWAY_HOST + SOCIAL + NOTICE + `${noticeId}`,
    update: () => GATEWAY_HOST + SOCIAL + NOTICE,
    create: () => GATEWAY_HOST + SOCIAL + NOTICE,
  },
  report: {
    // 신고전체조회, 신고조회, 유저신고조회, 신고생성, 거절, 수락
    readAll: () => GATEWAY_HOST + SOCIAL + REPORT,
    read: (reportId: number) =>
      GATEWAY_HOST + SOCIAL + REPORT + `item/${reportId}`,
    userReport: (userId: string) =>
      GATEWAY_HOST + SOCIAL + REPORT + USER + `${userId}`,
    create: () => GATEWAY_HOST + SOCIAL + REPORT,
    refuse: (userId: string) =>
      GATEWAY_HOST + SOCIAL + REPORT + `cancle/${userId}`,
    allow: (userId: string) =>
      GATEWAY_HOST + SOCIAL + REPORT + `allow/${userId}`,
  },

  mission: {
    // 일지조회, 일지전체조회, 일지수정, 생성, 삭제
    readOrDeleteOrUpdate: (missionId: number) =>
      GATEWAY_HOST + CHARACTER_SERVICE + MISSION + `${missionId}`,
    // 'http://k7c108.p.ssafy.io:8030/character-service/' +
    // MISSION +
    // `${missionId}`,
    readAllorCreate: () => GATEWAY_HOST + CHARACTER_SERVICE + 'mission',
    // 'http://k7c108.p.ssafy.io:8030/character-service/' + MISSION,
  },
};

export default rf;
