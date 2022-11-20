import {getDataInLocalStorage} from './../store/AsyncService';
import axios from 'axios';
import {CharacterInfo, MissionInfo, Point, Report} from './apiDataType';
import urls from './urls';

const api = {
  auth: {
    login: async (socialId: string) => {
      const response = await axios({
        url: urls.auth.login(),
        method: 'post',
        data: {
          id: socialId,
          role: 'User',
        },
      });
      return response;
    },
  },

  diary: {
    submit: async (diary: MissionInfo) => {
      const res = await axios({
        url: urls.diary.submit(),
        method: 'post',
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        data: {
          ...diary,
        },
      });
      return res;
    },
    getDiaries: async (id: number) => {
      const response = await axios({
        url: urls.diary.getDiaries(id),
        method: 'get',
        headers: {
          token: await getDataInLocalStorage('token'),
        },
      });

      return response;
    },
    getMainId: async (charId: number) => {
      const res = await axios({
        url: urls.diary.getMainId(charId),
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        method: 'get',
      });
      return res.data;
    },
  },
  mission: {
    getCommonId: async (charId: number) => {
      const response = await axios({
        url: urls.mission.getCommonId(charId),
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        method: 'get',
      });
      return response.data;
    },
  },
  character: {
    getNowUserCharacter: async (userId: string) => {
      const response = await axios({
        url: urls.character.getNowUserCharacter(userId),
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        method: 'get',
      });
      return response;
    },
    getCharacterList: async () => {
      const response = await axios({
        url: urls.character.getCharacterList(),
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        method: 'get',
      });
      return response;
    },
    create: async (characterInfo: CharacterInfo) => {
      const response = await axios({
        url: urls.character.create(),
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        method: 'post',
        data: {
          ...characterInfo,
        },
      });
      return response;
    },
    getCharacterDialog: async (id: number) => {
      const response = await axios({
        url: urls.character.getCharacterDialog(id),
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        method: 'get',
      });
      return response;
    },
  },

  user: {
    getUserInfo: async (kakaoId: string) => {
      const response = await axios({
        url: urls.user.getUserInfo(kakaoId),
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        method: 'get',
      });

      return response;
    },
    addPoint: async (pointInfo: Point) => {
      const res = await axios({
        url: urls.user.addPoint(),
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        method: 'put',
        data: {
          ...pointInfo,
        },
      });
      return res;
    },
  },

  community: {
    getCommunityAll: async (lastId: number) => {
      const response = await axios({
        url: urls.community.getCommunityAll(lastId),
        method: 'get',
        headers: {
          token: await getDataInLocalStorage('token'),
        },
      });

      return response;
    },

    getCommunityAnimalsAll: async (character_id: number, lastId: number) => {
      const response = await axios({
        url: urls.community.getCommunityAnimalsAll(character_id, lastId),
        method: 'get',
        headers: {
          token: await getDataInLocalStorage('token'),
        },
      });
      return response;
    },

    getCommunityDetail: async (id: number) => {
      const response = await axios({
        url: urls.community.getCommunityDetail(id),
        method: 'get',
        headers: {
          token: await getDataInLocalStorage('token'),
        },
      });

      return response;
    },

    report: async (data: Report) => {
      const response = await axios({
        url: urls.community.report(),
        method: 'post',
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        data: {
          reporterId: data.userId,
          diaryId: data.diaryId,
          reportType: data.reportType,
        },
      });
      return response;
    },
  },

  notice: {
    getNoticeAll: async () => {
      const response = await axios({
        url: urls.notice.getNoticeAll(),
        method: 'get',
        headers: {
          token: await getDataInLocalStorage('token'),
        },
      });

      return response;
    },
    getNoticeDetail: async (id: number) => {
      const response = await axios({
        url: urls.notice.getNoticeDetail(id),
        method: 'get',
        headers: {
          token: await getDataInLocalStorage('token'),
        },
      });

      return response;
    },
  },

  history: {
    getHistory: async (id: string) => {
      const response = await axios({
        url: urls.history.getHistory(id),
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        method: 'get',
      });

      return response;
    },
  },

  background: {
    getAllBackground: async () => {
      const response = await axios({
        url: urls.background.getAllBackground(),
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        method: 'get',
      });

      return response;
    },
    getUserBackground: async (id: string) => {
      const response = await axios({
        url: urls.background.getUserBackground(id),
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        method: 'get',
      });

      return response;
    },
    buyUserBackground: async (id: string, bgNumber: number) => {
      const response = await axios({
        url: urls.background.buyUserBackground(),
        method: 'post',
        headers: {
          token: await getDataInLocalStorage('token'),
        },
        data: {
          backgroundId: bgNumber,
          userId: id,
        },
      });

      return response;
    },
  },
};

export default api;
