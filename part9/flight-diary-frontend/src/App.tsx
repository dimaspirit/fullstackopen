import './App.css';
import { useEffect, useState, SyntheticEvent } from 'react';

interface DiaryBase {
  date: string;
  visibility: string;
  weather: string;
}

interface DiaryNew extends DiaryBase {
  comment: string;
}

interface Diary extends DiaryNew {
  id: number;
}

function App() {
  const [diaries, setDiares] = useState<Diary[]>([]);

  const [newDiaryItem, setNewDiaryItem] = useState<DiaryNew>({
    date: '',
    visibility: '',
    weather: '',
    comment: ''
  })

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    fetch('http://localhost:3000/api/diaries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDiaryItem)
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
        <h3>Add new item in diary</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Date</p>
            <input
              type="text" name="date" id="date"
              onChange={(event) => setNewDiaryItem({...newDiaryItem, date: event.target.value})} />
          </div>

          <div>
            <p>Visibility</p>
            <input 
              type="text" name="visibility" id="visibility"
              onChange={(event) => setNewDiaryItem({...newDiaryItem, visibility: event.target.value})} />
          </div>

          <div>
            <p>Weather</p>
            <input 
              type="text" name="weather" id="weather"
              onChange={(event) => setNewDiaryItem({...newDiaryItem, weather: event.target.value})} />
          </div>

          <div>
            <p>Comment</p>
            <input type="text" name="comment" id="comment" />
          </div>

          <button type="submit">Add</button>
        </form>
      </div>

      <div>
        <h3>List</h3>

        {diaries.map((diary) => (
          <div key={diary.id}>
            <h3>{diary.date}</h3>
            <p>visibilty: {diary.visibility}</p>
            <p>weather: {diary.weather}</p>
            <p>comment: {diary.comment}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
