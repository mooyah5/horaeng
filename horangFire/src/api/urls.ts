const GATEWAY = 'http://k7c108.p.ssafy.io:8000/';
// host 주소
const HOST = 'http://k7c108.p.ssafy.io:8000/';
const USER_HOST = 'http://k7c108.p.ssafy.io:8010/';
const SOCIAL_HOST = 'http://k7c108.p.ssafy.io:8020/';
const CHARACTER_HOST = 'http://k7c108.p.ssafy.io:8030/';

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
    login: () => HOST + AUTH + 'auth/login',
  },
  user: {
    getUserInfo: (userId: string) => HOST + USER + USER_INFO + userId,
  },
  diary: {
    submit: () => GATEWAY + SOCIAL + 'diary',
  },
  character: {
    getNowUserCharacter: (userId: string) =>
      HOST + CHARACTER + USER_CHARACTER + USER_INFO + userId,
    getCharacterList: () => HOST + CHARACTER + 'character',
    create: () => HOST + CHARACTER + USER_CHARACTER,
    getCharacterDialog: (id: number) =>
      HOST + CHARACTER + 'character-dialog/' + `${id}`,
  },
};

export default urls;
