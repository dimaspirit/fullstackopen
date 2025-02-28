import { IDiary } from "../types/diary";

const Diary = ({diary}: {diary: IDiary}) => {
  return (
    <div key={diary.id} style={{paddingTop: '10px', marginBottom: '10px'}}>
      <h3>{diary.date}</h3>
      <p>visibilty: {diary.visibility}</p>
      <p>weather: {diary.weather}</p>
      <p>comment: {diary.comment}</p>
    </div>
  )
}

export default Diary;