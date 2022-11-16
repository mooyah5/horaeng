const GATEWAY = 'https://k7c108.p.ssafy.io/';

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
const CHARACTER_ADDR = 'characters/';

const USER_CHARACTER = 'user-character/';

const urls = {
  auth: {
    login: () => GATEWAY + AUTH + 'auth/login',
  },
  user: {
    getUserInfo: (kakaoId: string) => GATEWAY + USER + USER_INFO + kakaoId,
  },
  diary: {
    submit: () => GATEWAY + SOCIAL + 'diary',
  },
  character: {
    getNowUserCharacter: (userId: string) =>
      GATEWAY + CHARACTER + USER_CHARACTER + USER_INFO + userId,
    getCharacterList: () => GATEWAY + CHARACTER + 'character',
    create: () => GATEWAY + CHARACTER + USER_CHARACTER,
    getCharacterDialog: (id: number) =>
      GATEWAY + CHARACTER + 'character-dialog/' + `${id}`,
  },
  community: {
    getCommunityAll: (lastId: number) =>
      GATEWAY + SOCIAL + `diary/items/${lastId}`,
    getCommunityAnimalsAll: (character_id: number, lastId: number) =>
      GATEWAY + SOCIAL + DIARY + CHARACTER_ADDR + `${character_id}/${lastId}`,
    getCommunityDetail: (id: number) => GATEWAY + SOCIAL + DIARY + `item/${id}`,
    report: () => GATEWAY + SOCIAL + 'report',
  },
  notice: {
    getNoticeAll: () => GATEWAY + SOCIAL + NOTICE,
    getNoticeDetail: (id: number) => GATEWAY + SOCIAL + NOTICE + `${id}`,
  },
};

export default urls;
