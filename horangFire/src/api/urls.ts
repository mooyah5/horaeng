const GATEWAY = 'https://k7c108.p.ssafy.io/';
// // host 주소
// const HOST = 'http://k7c108.p.ssafy.io:8000/';
// const USER_HOST = 'http://k7c108.p.ssafy.io:8010/';
// const SOCIAL_HOST = 'http://k7c108.p.ssafy.io:8020/';
// const CHARACTER_HOST = 'http://k7c108.p.ssafy.io:8030/';

// 대분류
const AUTH = 'auth-service/';
const USER = 'user-service/';
const CHARACTER = 'character-service/';
const SOCIAL = 'social-service/';

// 중분류
const USER_INFO = 'user/';
const BACKGROUND = 'background/';

const DIARY = 'diary/';
const REPORT = 'report/';
const NOTICE = 'notice/';

const MISSION = 'mission/';
const CHARACTER_ADDR = 'character/';

const USER_CHARACTER = 'user-character/';

const urls = {
  auth: {
    login: () => GATEWAY + AUTH + 'auth/login',
  },
  user: {
    getUserInfo: (userId: string) => GATEWAY + USER + USER_INFO + userId,
  },
  diary: {
    submit: () => GATEWAY + SOCIAL + 'diary', // 일지 제출
    viewCharDiary: (charId: number) =>
      GATEWAY + SOCIAL + 'diary/user/' + `${charId}`, // 특정 유저 캐릭터의 일지 조회
  },
  character: {
    getNowUserCharacter: (userId: string) =>
      GATEWAY + CHARACTER + USER_CHARACTER + USER_INFO + userId,
    getCharacterList: () => GATEWAY + CHARACTER + 'character',
    create: () => GATEWAY + CHARACTER + USER_CHARACTER,
    getCharacterDialog: (id: number) =>
      GATEWAY + CHARACTER + 'character-dialog/' + `${id}`,
  },
};

export default urls;
