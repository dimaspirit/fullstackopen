import { CoursePart } from "../types";

const Part = ({part}: {part: CoursePart}) => {
  switch (part.kind) {
    case "basic":
      return (
        <>
          <h4>{part.name}: {part.exerciseCount}</h4>
          <p>{part.description}</p>
        </>
      )
    case "group":
      return (
        <>
          <h4>{part.name}: {part.exerciseCount}</h4>
          <p>Group project count: {part.groupProjectCount}</p>
        </>
      )
    case "background":
      return (
        <>
          <h4>{part.name}: {part.exerciseCount}</h4>
          <p>Background material: {part.backgroundMaterial}</p>
        </>
      )
    case "special":
      return (
        <>
          <p>{part.name}: {part.exerciseCount}</p>
        </>
      )
    }
}

export default Part;