const Persons = ({ persons, onRemove }) => {
  return persons.map(person => {
    return (
      <div key={person.id}>
        <p>{person.name}: {person.number}</p>
        <button onClick={() => onRemove(person.id)}>Delete</button>
      </div>
    )
  });
};

export default Persons;