import './App.css';
import { useEffect, useState } from 'react';

interface Diary {
  id: number;
  date: string;
  visibility: string;
  weather: string;
  comment: string;
}

function App() {
  const [diaries, setDiares] = useState<Diary[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/diaries')
      .then(response => response.json())
      .then(data => setDiares(data));
  }, []);

  return (
    <>
      <h1>Flight diary</h1>

      {diaries.map((diary) => (
        <div key={diary.id}>
          <h2>{diary.date}</h2>
          <p>visibilty: {diary.visibility}</p>
          <p>weather: {diary.weather}</p>
          <p>comment: {diary.comment}</p>
        </div>
      ))}
    </>
  )
}

export default App
