import './App.css';
import { useEffect, useState } from 'react';
import { IDiary, IDiaryNew } from './types/diary';
import NewDiaryForm from './components/NewDiaryForm';

import Diary from './components/Diary';

function App() {
  const [diaries, setDiares] = useState<IDiary[]>([]);

  const onAdd = (newDiary: IDiaryNew) => {
    fetch('http://localhost:3000/api/diaries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDiary)
    }).then(response => response.json())
      .then(data => setDiares([...diaries, data]));
  }

  useEffect(() => {
    fetch('http://localhost:3000/api/diaries')
      .then(response => response.json())
      .then(data => setDiares(data));
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
