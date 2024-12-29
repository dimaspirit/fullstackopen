import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import personsServices from './services/persons';
import Persons from './components/Persons';

function App() {
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

  const handleRemovePerson = (id) => {
    personsServices.remove(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id));
      }).catch(error => {
        console.warn(`Can not delete constact with ${id}`, error);
        setPersons(persons.filter(p => p.id !== id));
      });
  }

  const handleAddPerson = (event) => {
    event.preventDefault();

    const personNew = {
      name: newName,
      number: newNumber,
      id: (persons.length+1).toString(),
    }

    const personExisted = persons.find(person => person.name === newName);
    if(personExisted) {
      const updateMessage = `${newName} is already added, replace the old number(${personExisted.number}) with a new one`;
      if(!window.confirm(updateMessage)) return;

      personsServices.update(personExisted.id, {...personExisted, number: newNumber})
        .then((personUpdated) => {
          const personsUpdated = persons.filter(person => person.id !== personExisted.id).concat(personUpdated);
          setPersons(personsUpdated);
          setNewName('');
          setNewNumber('');
        });
    } else {
      personsServices.create(personNew)
        .then(person => {
          setPersons([...persons, person]);
        }).finally(() => {
          setNewName('');
          setNewNumber('');
        });
    }
  }

  useEffect(() => {
    personsServices.getAll()
      .then(persons => {
        setPersons(persons);
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
          <Persons  persons={personsToShow} onRemove={handleRemovePerson} />
      </div>
    </>
  )
}

export default App
