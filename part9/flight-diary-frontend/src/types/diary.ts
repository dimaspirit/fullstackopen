export interface IDiaryBase {
  date: string;
  visibility: string;
  weather: string;
}

export interface IDiaryNew extends IDiaryBase {
  comment: string;
}

export interface IDiary extends IDiaryNew {
  id: number;
}