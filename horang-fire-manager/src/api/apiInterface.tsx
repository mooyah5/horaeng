export interface NewLogin {
  id: string;
  password: string;
  role: string; // admin
}

export interface NewNoticeData {
  userId: string;
  title: string;
  content: string;
}

export interface UpdatedNoticeData {
  id: string;
  title: string;
  content: string;
}

export interface NewMissionData {
  title: string;
  content: string;
  img: string;
}

export interface UpdatedMissionData {
  title: string;
  content: string;
  img: string;
}

export interface NewReport {
  userId: string;
  diaryId: number;
  reportType: string;
}
