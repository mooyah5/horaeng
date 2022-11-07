const HOST = 'http://k7c108.p.ssafy.io:8000/';
const USER_HOST = 'http://k7c108.p.ssafy.io:8010/';
const SOCIAL_HOST = 'http://k7c108.p.ssafy.io:8020/';
const CHARACTER_HOST = 'http://k7c108.p.ssafy.io:8030/';

const USER = 'user-service/';
const USER_INFO = 'user/';

const CHARACTER = 'character-service/';
const USER_CHARACTER = 'user-character/';

const urls = {
  user: {
    login: () => HOST + USER + 'login',
  },
  diary: {
    // submit: () => GATEWAY + DIARY + 'diary',
  },
  character: {
    getCharacterList: () => HOST + CHARACTER + 'character',
    create: () => HOST + CHARACTER + USER_CHARACTER,
    getCharacterDialog: (id: number) =>
      HOST + CHARACTER + 'character-dialog/' + `${id}`,
  },
};

export default urls;
