import axios from 'axios';
import urls from './urls';

const api = {
  auth: {
    login: async (formData: any) => {
      const response = await axios({
        url: urls.auth.login(),
        method: 'post',
        data: {
          token: formData.data,
        },
      });

      return response;
    },
  },
};

export default api;
