import {createSlice} from '@reduxjs/toolkit';

/**
 * @param charType
 * @id 캐릭터의 고유 아이디
 * @user_id 유저의 고유 아이디
 * @character_id 캐릭터의 고유 번호(ex: 1 호랑이)
 * @nickname 캐릭터의 닉네임
 * @characterLevel 캐릭터의 현재 레벨
 * @status 미션을 3일차까지 모두 완료한 동물인가?
 */
export interface charType {
  id: number;
  user_id: string;
  character_id: number;
  created_date: string;
  nickname: string;
  characterLevel: string;
  status: boolean;
}

export const charInitialState: charType | null = null;

export const charSlice = createSlice({
  name: 'character',
  initialState: charInitialState,
  reducers: {
    setMyCharacter: (state: charType | null, action) => {
      return action.payload.character;
    },
    setTodaysMission: (state: charType | null, action) => {
      if (state) {
        state.status = action.payload.isDone;
      }
    },
  },
});

export const checkTodaysMission = (state: {character: {status: boolean}}) =>
  state.character?.status;
export const selectName = (state: {character: {nickname: string}}) =>
  state.character?.nickname;
export const selectCharacter = (state: {character: charType | null}) =>
  state.character;

export const {setMyCharacter, setTodaysMission} = charSlice.actions;

export default charSlice.reducer;
