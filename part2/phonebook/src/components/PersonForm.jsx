const PersonForm = ({ name, number, onSubmit, onChangeName, onChangeNumber }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        Name: <input onChange={onChangeName} value={name} />
      </div>
      <div>
        Number: <input onChange={onChangeNumber} value={number} />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default PersonForm;