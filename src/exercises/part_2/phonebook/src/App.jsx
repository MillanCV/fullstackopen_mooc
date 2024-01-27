import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/Personform'
import Persons from './components/Persons'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

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