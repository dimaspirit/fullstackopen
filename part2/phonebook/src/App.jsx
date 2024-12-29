import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

function App() {
  const PERSONS_URL = 'http://localhost:3001/persons';

  const [persons, setPersons] = useState([]);
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

  useEffect(() => {
    axios.get(PERSONS_URL)
      .then(response => {
        setPersons(response.data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Phonebook</h1>

        <Filter query={query} onChange={handleQuery} />

        <h2>Add a new person</h2>
        <PersonForm 
          name={newName} 
          number={newNumber} 
          onSubmit={handleAddPerson} 
          onChangeName={handleNewName} 
          onChangeNumber={handleNewNumber} />

        <h2>Numbers</h2>
          {personsToShow.map(person => (<p key={person.name}>{person.name}: {person.number}</p>))}
      </div>
    </>
  )
}

export default App
