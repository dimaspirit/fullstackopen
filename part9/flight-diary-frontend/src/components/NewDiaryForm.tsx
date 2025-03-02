import { useState, SyntheticEvent } from "react";
import { IDiaryNew } from "../types/diary";

interface INewDiaryFormProps {
  onAdd: (newDiary: IDiaryNew) => void;
}

const diaryInit = {
  date: '',
  visibility: 'ok',
  weather: 'sunny',
  comment: ''
}

const NewDiaryForm = (props: INewDiaryFormProps) => {
  const { onAdd } = props;

  const [newDiaryItem, setNewDiaryItem] = useState<IDiaryNew>({...diaryInit});

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onAdd(newDiaryItem);
    setNewDiaryItem({...diaryInit});
  }

  const handleRadioButtonChange = (event: SyntheticEvent, type:string) => {
    const target = event.target as HTMLInputElement;
    setNewDiaryItem({...newDiaryItem, [type]: target.value});
  }

  return (
    <>
      <h3>Add new item in diary</h3>
      <form onSubmit={handleSubmit}>
          <div>
            <p>Date</p>
            <input
              type="date" name="date" id="date"
              value={newDiaryItem.date}
              onChange={(event) => setNewDiaryItem({...newDiaryItem, date: event.target.value})} />
          </div>

          <div>
            <p>Visibility</p>
            <div>
              <input 
                type="radio" id="visibilityGreat" name="visibility" value="good"
                checked={newDiaryItem.visibility === 'good'}
                onChange={(event) => handleRadioButtonChange(event, 'visibility')} />
              <label htmlFor="visibilityGreat"> Great</label> <br />

              <input 
                type="radio" id="visibilityOk" name="visibility" value="ok"
                checked={newDiaryItem.visibility === 'ok'}
                onChange={(event) => handleRadioButtonChange(event, 'visibility')} />
              <label htmlFor="visibilityOk"> Ok</label> <br />

              <input 
                type="radio" id="visibilityPoor" name="visibility" value="poor"
                checked={newDiaryItem.visibility === 'poor'}
                onChange={(event) => handleRadioButtonChange(event, 'visibility')} />
              <label htmlFor="visibilityPoor"> Poor</label> <br />
            </div>
          </div>

          <div>
            <p>Weather</p>
            <div>
              <input 
                type="radio" id="weatherSunny" name="weather" value="sunny"
                checked={newDiaryItem.weather === 'sunny'}
                onChange={(event) => handleRadioButtonChange(event, 'weather')} />
              <label htmlFor="weatherSunny"> Sunny</label> <br />

              <input 
                type="radio" id="weatherCloudy" name="weather" value="cloudy"
                checked={newDiaryItem.weather === 'cloudy'}
                onChange={(event) => handleRadioButtonChange(event, 'weather')} />
              <label htmlFor="weatherCloudy"> Cloudy</label> <br />

              <input 
                type="radio" id="weatherStormy" name="weather" value="stormy"
                checked={newDiaryItem.weather === 'stormy'}
                onChange={(event) => handleRadioButtonChange(event, 'weather')} />
              <label htmlFor="weatherStormy"> Stormy</label> <br />

              <input 
                type="radio" id="weatherWindy" name="weather" value="windy"
                checked={newDiaryItem.weather === 'windy'}
                onChange={(event) => handleRadioButtonChange(event, 'weather')} />
              <label htmlFor="weatherWindy"> Windy</label> <br />
            </div>

            {/* <input 
              type="text" name="weather" id="weather"
              value={newDiaryItem.weather}
              onChange={(event) => setNewDiaryItem({...newDiaryItem, weather: event.target.value})} /> */}
          </div>

          <div>
            <p>Comment</p>
            <input 
              type="text" name="comment" id="comment"
              value={newDiaryItem.comment}
              onChange={(event) => setNewDiaryItem({...newDiaryItem, comment: event.target.value})} />
          </div>

          <button type="submit">Add</button>
        </form>
    </>
  )
}

export default NewDiaryForm;