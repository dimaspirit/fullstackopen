import { CoursePart } from "../types";
import Part from "./Part";

const Content = ({courseParts}: {courseParts:CoursePart[]}) => {
  return (
    <>
      {courseParts.map((part, index) => <Part key={index} part={part} />)}
    </>
  )
}

export default Content;