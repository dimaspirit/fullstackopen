const Total = ({parts}) => {
  const total = parts.reduce((accum, part) => accum + part.exercises, 0);

  return (
    <p>
      <b>
        Number of exercises: {total}
      </b>
    </p>
  )
}

export default Total;