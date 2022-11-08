import {getDataInLocalStorage} from './../store/AsyncService';
import axios from 'axios';
import {CharacterInfo} from './apiDataType';
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
    submitMain: async (diary: any) => {
      console.log(diary);
      const res = await axios({
        //url: urls.diary.submit(),
        method: 'post',
        data: {
          ...diary,
        },
      });
      return res;
    },
    viewCharDiary: async (charId: number) => {
      console.log(charId);
      const res = await axios({
        url: urls.diary.viewCharDiary(charId),
        headers: {
          token: await getDataInLocalStorage('token'),
          // token:
          //   'eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjY3ODg0NTM0Mjg2LCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njc4ODUxMzQsInN1YiI6ImFjY2Vzcy10b2tlbiIsImlkIjoiYWRtaW5UZXN0In0.batDv0_vwpUbjX6fza4dZilI2_DugCe5kxrpfg8k278',
        },
        method: 'get',
      });

      return res.data;
    },
  },

  character: {
    getNowUserCharacter: async (userId: string) => {
      const response = await axios({
        url: urls.character.getNowUserCharacter(userId),
        method: 'get',
      });
      return response;
    },
    getCharacterList: async () => {
      const response = await axios({
        url: urls.character.getCharacterList(),
        method: 'get',
      });
      return response;
    },
    create: async (characterInfo: CharacterInfo) => {
      const response = await axios({
        url: urls.character.create(),
        method: 'post',
        data: {
          ...characterInfo,
        },
      });
      //response.data
      // {
      //   "characterLevel": "LEVEL_1",
      //   "character_id": 1,
      //   "created_date": "2022-11-06T06:56:09.634464727",
      //   "id": 9,
      //   "nickname": "Iii",
      //   "user_id": 2
      // }
      return response;
    },
    getCharacterDialog: async (id: number) => {
      console.log(id);
      const response = await axios({
        url: urls.character.getCharacterDialog(id),
        method: 'get',
      });
      return response;
    },
  },

  user: {
    getUserInfo: async (userId: string) => {
      const response = await axios({
        url: urls.user.getUserInfo(userId),
        method: 'get',
      });

      return response;
    },
  },
};

export default api;
