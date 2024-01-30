import { useState, useEffect } from 'react'
import personService from './services/persons'
import PersonForm from './components/Personform'
import Persons from './components/Persons'
import Phonebook from './components/Phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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

    if (!containsObjectWithName(newName, newNumber)) {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName("")
          setNewNumber("")

        })


    }
    else {
      alert(`${newName} and ${newNumber} are already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChangeFilter = (event) => setNewFilter(event.target.value)

  const handleRemovePerson = (name, id) => {
    if (window.confirm(`delete ${name}`)) {
      personService
        .remove(id)
        .then((response) => {
          setPersons(persons.filter(person => person.id !== id))

        })
        .catch(error =>
          console.log('fail')
        )
    }


  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Phonebook newFilter={newFilter} handleChangeFilter={handleChangeFilter} />

      <h2>add a new</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleSubmitName={handleSubmitName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} handleRemovePerson={handleRemovePerson} />
    </div>
  )
}

export default App