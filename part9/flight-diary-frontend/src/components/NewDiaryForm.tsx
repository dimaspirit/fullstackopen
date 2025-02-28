import { useState, SyntheticEvent } from "react";
import { IDiaryNew } from "../types/diary";

interface INewDiaryFormProps {
  onAdd: (newDiary: IDiaryNew) => void;
}

const NewDiaryForm = (props: INewDiaryFormProps) => {
  const { onAdd } = props;

  const [newDiaryItem, setNewDiaryItem] = useState<IDiaryNew>({
    date: '',
    visibility: '',
    weather: '',
    comment: ''
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onAdd(newDiaryItem);
  }

  return (
    <>
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
            <input 
              type="text" name="comment" id="comment"
              onChange={(event) => setNewDiaryItem({...newDiaryItem, comment: event.target.value})} />
          </div>

          <button type="submit">Add</button>
        </form>
    </>
  )
}

export default NewDiaryForm;