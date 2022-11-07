import {createSlice} from '@reduxjs/toolkit';

/**
 * @param User
 * @id 유저의 고유 아이디(카카오 유저 번호)
 * @name 유저 닉네임
 * @reportCnt 유저가 신고당한 횟수
 * @point 성냥 개수
 * @role 권한
 */
export interface User {
  id: string;
  name: string;
  reportCnt: number;
  point: number;
  role: string;
}

export const userInitialState: User | null = {
  id: '',
  name: '',
  reportCnt: 0,
  point: 0,
  role: '',
};

// state
export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    //mutations
    setUserObject: (state, action) => {
      return action.payload.user;
    },
    reset: state => {
      Object.assign(state, userInitialState);
    },
  },
});

// getters -> Login.tsx 가서 확인
export const selectUser = (state: {user: User}) => state.user;
export const {setUserObject, reset} = userSlice.actions;

export default userSlice.reducer;
