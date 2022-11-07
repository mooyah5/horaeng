import axios from 'axios';
import {CharacterInfo} from './apiDataType';
import urls from './urls';

const api = {
  auth: {
    login: async (formData: any) => {
      const response = await axios({
        url: urls.user.login(),
        method: 'post',
        data: {
          token: formData.data,
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
      console.log(res);
      return res;
    },
  },

  character: {
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
};

export default api;
