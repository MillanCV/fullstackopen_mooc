import { useState } from 'react'
import PersonForm from './components/Personform'
import Persons from './components/Persons'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleSubmitName = (event) => {
    event.preventDefault()

    function containsObjectWithName(name, number) {
      for (var i = 0; i < persons.length; i++) {
        if (persons[i].name === name && persons[i].number === number) {
          return true;
        }
      }
      return false;
    }

    if (!containsObjectWithName(newName))
      setPersons(persons.concat({ name: newName, number: newNumber }))
    else
      alert(`${newName} is already added to phonebook`)

    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChangeFilter = (event) => setNewFilter(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Phonebook newFilter={newFilter} handleChangeFilter={handleChangeFilter} />

      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleSubmitName={handleSubmitName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App