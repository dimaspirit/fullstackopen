import { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Mark Lobanov', number: '123-456-7890' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNewName = (event) => {
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleAddPerson = (event) => {
    event.preventDefault();

    const isPersonNameExist = persons.some(person => person.name === newName);
    if(isPersonNameExist) {
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      return;
    }

    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName('');
    setNewNumber('');
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={handleAddPerson}>
          <div>
            Name: <input onChange={handleNewName} value={newName} />
          </div>
          <div>
            Number: <input onChange={handleNewNumber} value={newNumber} />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>

        <h2>Numbers</h2>
          {persons.map(person => (<p key={person.name}>{person.name}: {person.number}</p>))}
      </div>
    </>
  )
}

export default App
