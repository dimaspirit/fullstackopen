import { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Mark Lobanov', number: '123-456-7890' },
    { name: 'Dmytro Lobanov', number: '234-432-7110' },
    { name: 'Viki Lobanov', number: '214-632-9110' },
  ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const [query, setQuery] = useState('');

  const personsToShow = query === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(query.toLowerCase()));

  const handleQuery = (event) => {
    setQuery(event.target.value.trim());
  }

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
        <h1>Phonebook</h1>

        <p>filter shown with <input type="text" value={query} onChange={handleQuery} /></p>

        <h2>Add a new person</h2>
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
          {personsToShow.map(person => (<p key={person.name}>{person.name}: {person.number}</p>))}
      </div>
    </>
  )
}

export default App
