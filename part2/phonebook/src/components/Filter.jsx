const Filter = ({query, onChange}) => {
  return (
    <p>filter shown with <input type="text" value={query} onChange={onChange} /></p>
  )
}

export default Filter;