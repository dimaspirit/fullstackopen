import './App.css'

const Header = ({courseName}: {courseName: string}) => {
  return (
    <h1>{courseName}</h1>
  )
}

const Total = ({totalExercises}: {totalExercises: number}) => {
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}

interface CoursePart {
  name: string;
  exerciseCount: number;
}

const Content = ({courseParts}: {courseParts:CoursePart[]}) => {
  return (
    <>
      <p>
        {courseParts[0].name} {courseParts[0].exerciseCount}
      </p>
      <p>
        {courseParts[1].name} {courseParts[1].exerciseCount}
      </p>
      <p>
        {courseParts[2].name} {courseParts[2].exerciseCount}
      </p>
    </>
  )
}

function App() {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];
  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header courseName={courseName} />

      <Content courseParts={courseParts} />

      <Total totalExercises={totalExercises} />
    </div>
  );
}

export default App
