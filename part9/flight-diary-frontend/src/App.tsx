import './App.css';
import { useEffect, useState } from 'react';
import { IDiary, IDiaryNew } from './types/diary';
import NewDiaryForm from './components/NewDiaryForm';
import { getAllDiaries, createDiary } from './services/diary';

import Diary from './components/Diary';

function App() {
  const [diaries, setDiares] = useState<IDiary[]>([]);

  const onAdd = async (newDiary: IDiaryNew) => {
    const diary = await createDiary(newDiary);
    setDiares([...diaries, diary]);
  }

  useEffect(() => {
    getAllDiaries().then(data => setDiares(data));
  }, []);

  return (
    <>
      <h1>Flight diary service</h1>

      <div>
        <NewDiaryForm onAdd={onAdd} />
      </div>

      <div>
        <h3>List</h3>

        {diaries.map((diary) => (
          <Diary diary={diary} key={diary.id} />
        ))}
      </div>
    </>
  )
}

export default App
