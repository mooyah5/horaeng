export interface CharacterInfo {
  user_id: string;
  character_id: number;
  nickname: string;
}

export interface Report {
  userId: string;
  diaryId: number;
  reportType: string;
}

export interface Point {
  userId: string;
  point: number;
}
export interface MissionInfo {
  content: string;
  imgUrl: string;
  userId: string | undefined;
  userCharacterId: number | undefined;
  charactersId: number | undefined;
  characterMissionId: number;
  addPoint: number;
  isMain: 0 | 1;
}
