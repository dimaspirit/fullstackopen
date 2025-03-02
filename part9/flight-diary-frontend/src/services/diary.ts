import axios from 'axios';
import { IDiaryNew, IDiary } from '../types/diary';

const baseUrl = 'http://localhost:3000/api/diaries';

export const getAllDiaries = async () => {
  const response = await axios.get<IDiary[]>(baseUrl);
  return response.data;
}

export const createDiary = async (diaryNew:IDiaryNew) => {
  const response = await axios.post<IDiary>(baseUrl, diaryNew);
  return response.data;
}