import { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Mark Lobanov' },
  ]);
  const [newName, setNewName] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleAddPerson = (event) => {
    event.preventDefault();
    setPersons([...persons, { name: newName }]);
    setNewName('');
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={handleAddPerson}>
          <div>
            name: <input onChange={handleNewName} value={newName} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>

        <h2>Numbers</h2>
          {persons.map(person => <p key={person.name}>{person.name}</p>)}
      </div>
    </>
  )
}

export default App
