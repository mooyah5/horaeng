import axios from 'axios';

import rf from './rf';
import {
  NewNoticeData,
  UpdatedNoticeData,
  NewMissionData,
  UpdatedMissionData,
  NewReport,
  NewLogin,
} from './apiInterface';
// import {SET_TOKEN} from '../store/Auth';
// import {getCookie} from './cookie';
// import {useDispatch, useSelector} from 'react-redux';

// const dispatch = useDispatch();
// const accessToken = useSelector((state: any) => state.authToken.accessToken);

const api = {
  auth: {
    login: async (formData: NewLogin) => {
      const response = await axios({
        url: rf.auth.login(),
        method: 'post',
        data: {
          id: formData.id,
          password: formData.password,
          role: formData.role,
        },
      });
      return response;
    },
    userInfo: async (userId: string) => {
      const response = await axios({
        url: rf.auth.userInfo(userId),
        method: 'get',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },
  },
  notice: {
    read: async (noticeId: number) => {
      const response = await axios({
        url: rf.notice.read(noticeId),
        method: 'get',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },

    readAll: async () => {
      const response = await axios({
        url: rf.notice.readAll(),
        method: 'get',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },

    delete: async (noticeId: number) => {
      const response = await axios({
        url: rf.notice.delete(noticeId),
        method: 'delete',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },

    update: async (formData: UpdatedNoticeData) => {
      const response = await axios({
        url: rf.notice.update(),
        method: 'put',
        headers: {
          token: localStorage.getItem('token') || '',
        },
        data: {
          id: formData.id,
          title: formData.title,
          content: formData.content,
        },
      });
      return response;
    },

    create: async (formData: NewNoticeData) => {
      const response = await axios({
        url: rf.notice.create(),
        method: 'post',
        headers: {
          token: localStorage.getItem('token') || '',
        },
        data: {
          title: formData.title,
          content: formData.content,
          userId: formData.userId,
        },
      });
      return response;
    },
  },
  mission: {
    read: async (missionId: number) => {
      const response = await axios({
        url: rf.mission.readOrDeleteOrUpdate(missionId),
        method: 'get',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },

    readAll: async () => {
      const response = await axios({
        url: rf.mission.readAllorCreate(),
        method: 'get',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },

    delete: async (missionId: number) => {
      const response = await axios({
        url: rf.mission.readOrDeleteOrUpdate(missionId),
        method: 'delete',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },

    update: async (formData: UpdatedMissionData, id: number) => {
      const response = await axios({
        url: rf.mission.readOrDeleteOrUpdate(id),
        method: 'put',
        headers: {
          token: localStorage.getItem('token') || '',
        },
        data: {
          title: formData.title,
          content: formData.content,
          img: formData.img,
        },
      });
      return response;
    },

    create: async (formData: NewMissionData) => {
      const response = await axios({
        url: rf.mission.readAllorCreate(),
        method: 'post',
        headers: {
          token: localStorage.getItem('token') || '',
        },
        data: {
          title: formData.title,
          content: formData.content,
          img: formData.img,
        },
      });
      return response;
    },
  },
  report: {
    readAll: async () => {
      const response = await axios({
        url: rf.report.readAll(),
        method: 'get',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },
    read: async (reportId: number) => {
      const response = await axios({
        url: rf.report.read(reportId),
        method: 'get',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },
    readUserReport: async (userId: string) => {
      const response = await axios({
        url: rf.report.userReport(userId),
        method: 'get',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },

    refuse: async (userId: string) => {
      const response = await axios({
        url: rf.report.refuse(userId),
        method: 'put',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },
    allow: async (userId: string) => {
      const response = await axios({
        url: rf.report.allow(userId),
        method: 'put',
        headers: {
          token: localStorage.getItem('token') || '',
        },
      });
      return response;
    },
  },
};

export default api;
