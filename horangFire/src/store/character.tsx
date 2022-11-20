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
interface charType {
  id: number;
  user_id: string;
  character_id: number;
  created_date: string;
  nickname: string;
  characterLevel: string;
  status: boolean;
}

export interface CharacterResponseType {
  todayMain: boolean;
  todayCommon: boolean;
  count?: number;
  message: string;
  userCharacter: charType | null;
}

export const charInitialState: CharacterResponseType | null = null;

export const charSlice = createSlice({
  name: 'character',
  initialState: charInitialState,
  reducers: {
    setMyCharacter: (state: CharacterResponseType | null, action) => {
      return action.payload.character;
    },
    setTodaysMission: (state: CharacterResponseType | null, action) => {
      if (state) {
        state.todayMain = action.payload.isDone;
      }
    },
  },
});

export const selectTodaysMission = (state: {
  character: CharacterResponseType;
}) => state.character.todayMain;
export const selectTodaysCommonMission = (state: {
  character: CharacterResponseType;
}) => state.character.todayCommon;
export const selectCharMission = (state: {
  character: CharacterResponseType;
}) => {
  state.character.userCharacter?.character_id;
};
export const selectName = (state: {character: CharacterResponseType}) =>
  state?.character?.userCharacter?.nickname;
export const selectCharacter = (state: {
  character: CharacterResponseType | null;
}) => state.character;
export const {setMyCharacter, setTodaysMission} = charSlice.actions;

export default charSlice.reducer;
