const GATEWAY = 'https://k7c108.p.ssafy.io/';

// 대분류
const AUTH = 'auth-service/';
const USER = 'user-service/';
const CHARACTER = 'character-service/';
const SOCIAL = 'social-service/';

// 중분류
const USER_INFO = 'user/';

const REPORT = 'report/';
const NOTICE = 'notice/';

const USER_CHARACTER = 'user-character/';

const urls = {
  auth: {
    login: () => GATEWAY + AUTH + 'auth/login',
  },
  user: {
    getUserInfo: (kakaoId: string) => GATEWAY + USER + USER_INFO + kakaoId,
  },
  diary: {
    submit: () => GATEWAY + SOCIAL + 'diary', // 일지 제출
    viewCharDiary: (charId: number) =>
      GATEWAY + SOCIAL + 'diary/user/' + `${charId}`, // 특정 유저 캐릭터의 일지 조회
    getMainId: (charId: number) =>
      GATEWAY + CHARACTER + 'character-mission/main/' + `${charId}`,
  },
  mission: {
    upload: (formdata: any) => '', // formdata 업로드
    getCommonId: (charId: number) =>
      GATEWAY + CHARACTER + 'character-mission/common/' + `${charId}`,
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
    getCommunityAll: () => GATEWAY + SOCIAL + 'diary',
    getCommunityDetail: (id: number) =>
      GATEWAY + SOCIAL + 'diary/' + 'item' + `${id}`,
    report: () => GATEWAY + SOCIAL + REPORT,
  },
  notice: {
    getNoticeAll: () => GATEWAY + SOCIAL + NOTICE,
    getNoticeDetail: (id: number) => GATEWAY + SOCIAL + NOTICE + `${id}`,
  },
};

export default urls;
