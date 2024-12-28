const Total = (props) => {
  return (
    <p>
      <b>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </b>
    </p>
  )
}

export default Total;